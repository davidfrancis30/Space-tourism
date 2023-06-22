import Header from "../../components/header/header-compo";
import "../../styles/crew.css"
import image from "../../assets/image-anousheh-ansari.png"
import{Link} from "react-router-dom"
const crew = () => {
	return (
		<>
			<div className="crew">
				<Header />
				<div className="main-crew ">
					<div className="crew-left">
						<p className="left-1">02 Meet your crew</p>
						<p className="left-2">Flight Engineer</p>
						<h1 className="left-3">Anousheh Ansari</h1>
						<p className="left-4">
							Anousheh Ansari is an Iranian American engineer and
							co-founder of Prodea Systems. Ansari was the fourth
							self-funded space tourist, the first self-funded
							woman to fly to the ISS, and the first Iranian in
							space.
						</p>
						<div className="toggle">
							<Link to="/">
								<p></p>
							</Link>
							<Link to="/login">
								<p></p>
							</Link>
							<Link to="/signup">
								<p></p>
							</Link>
							<Link to="/technology">
								<p></p>
							</Link>
						</div>
					</div>
					<div className="crew-right">
						<img src={image} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default crew;
