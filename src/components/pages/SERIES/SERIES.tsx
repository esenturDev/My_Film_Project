/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetProjectQuery } from '../../../reducer/api/crud';
import scss from './SERIES.module.scss';

const SERIES = () => {
  const {data, isLoading} =  useGetProjectQuery();
  const filtredDataSERIES = data?.filter((itemSERIES) => itemSERIES.nameg === 'сериалы');
  console.log(filtredDataSERIES);
  return (
    <div className={scss.SERIES}>
      <div className="container">
        <div className={scss.content}>
          {filtredDataSERIES?.map((item) => (
            <div key={item._id}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.freeOfCharge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SERIES