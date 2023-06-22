import Header from "../../components/header/header-compo";
import "../../styles/technology.css"
import image from "../../assets/image-launch-vehicle-portrait.jpg"
const technology = () => {
	return (
		<>
			<div className="technology">
				<Header />
				<div className="main-technology">
					<div className="tech-left">
						<p className="techp">03 Space launch 101</p>

						<div className="left-2">
							<div className="header-p">
								<p> 1</p>
								<p>2</p>
								<p>3</p>
							</div>
							<div className="left-in">
								<p>The terminology...</p>
								<h1>Launch vehicle</h1>
								<p>
									A launch vehicle or carrier rocket is a
									rocket-propelled vehicle used to carry a
									payload from Earth's surface to space,
									usually to Earth orbit or beyond. Our WEB-X
									carrier rocket is the most powerful in
									operation. Standing 150 metres tall, it's
									quite an awe-inspiring sight on the launch
									pad!
								</p>
							</div>
						</div>
					</div>
					<div className="tech-right">
						<img src={image} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default technology;
