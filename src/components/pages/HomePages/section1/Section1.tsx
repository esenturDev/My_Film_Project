import scss from "./Section1.module.scss";
const Section1 = () => {
	return (
		<div className={scss.section1}>
			<div className="container">
        <div className={scss.content}>
          Section1
        </div>
      </div>
		</div>
	);
};

export default Section1;
