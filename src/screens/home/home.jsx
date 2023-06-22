import {useEffect ,  useState} from 'react'    
import Header from "../../components/header/header-compo"
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/home.css"
const home = () => {

	const [userData, setUserData] = useState(null);
	
  const navigate = useNavigate();
  useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await fetch(
					"http://localhost:9000/api/v1/home",
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
						credentials: "include", 
					}
				);

				if (response.status === 200) {
					const data = await response.json();
					setUserData(data);
					console.log(data);
					
				} else if (response.status === 401) {
					console.log("Unauthorized access");
					navigate("/login");
				} else {
					throw new Error("Error fetching user data");
				}
			} catch (error) {
				console.log(error.message);
			}
		};

		fetchUserData();
  }, []);
  return (
		<>
			<div className="Home">
				<Header />
				<div className="Homemain">
					<div className="Homeleft">
						{userData && <p> { userData.username}</p>}
						<h3> So, you want to travel to</h3>
						<h1> Space</h1>
						<p className="homedesktop">
							Let’s face it; if you want to go to space, you might
							as well <br /> genuinely go to outer space and not
							hover kind of on the <br /> edge of it. Well sit
							back, and relax because we’ll give you <br />a truly
							out of this world experience!
						</p>
						<p className="homemobile">
							Let’s face it; if you want to go to space, you might
							as well genuinely go to outer space and not hover
							kind of on the edge of it. Well sit back, and relax
							because we’ll give you a truly out of this world
							experience!
						</p>
					</div>
					<div className="Homeright">
						<p> Explore</p>
					</div>
				</div>
			</div>
		</>
  );
}

export default home