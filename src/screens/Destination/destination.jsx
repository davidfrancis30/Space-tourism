import Header from "../../components/header/header-compo";
import "../../styles/destination.css"
import image from "../../assets/image-mars.png"
const destination = () => {
	return (
		<>
			<div className="destination">
				<Header />
				<div className="main-destination">
					<div className=" destinationleft">
						<h1>01 Pick your destination</h1>
						<img src={image} alt="" />
					</div>

					<div className="destinationright">
						<div className="right-1">
							<p>Moon</p>
							<p>Mars</p>
							<p>Europa</p>
							<p>Titan</p>
						</div>
						<div className="right-2">
							<h1>Mars</h1>
						</div>
						<div className="right-3">
							<p>
								Don’t forget to pack your hiking boots. You’ll
								need them <br /> to tackle Olympus Mons, the
								tallest planetary mountain in <br /> our solar
								system. It’s two and a half times the size of <br/> 
								Everest!
							</p>
						</div>
						<div className="right-4line"></div>
						<div className="right-5">
							<div>
								<p> Avg. distance </p>
								<h1> 225 mil. km </h1>
							</div>
							<div>
								<p>travel time</p>
								<h1>9 months</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default destination;
