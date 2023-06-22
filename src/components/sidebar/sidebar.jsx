import React from 'react'
import "../../styles/sidebar.css"
// import image from "../../assets/image-mars.png"
import { Link } from 'react-router-dom'
import {HiPencil}  from "react-icons/hi"
import { BiHome, BiLogOut } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
const sidebar = () => {
  return (
		<div className="sidebar">
			<div className="sidebar-main">
				<div className="card-header">
					<h2>User name</h2>
				</div>
				<div className=" sidebar-2">
					<div className="">
						{/* <form action="">
							<label htmlFor="text">
								<img
									className="side-image"
									src={image}
									alt=""
								/>
						  </label>
						  <input type="file"
							  id='text' 
							  style={{display:"none"}}
						  />
						</form> */}

						<div className="side-links">
							<Link className="side-linksA" to="/profile">
								<div className="sideIcon">
									<ImProfile />
								</div>
								profile
							</Link>
							<Link className="side-linksA" to="/home">
								<div className="sideIcon">
									<BiHome />
								</div>
								Home
							</Link>
							<Link className="side-linksA" to="/edit/profile">
								<div className="sideIcon">
									<HiPencil />
								</div>
								Edit profile
							</Link>
							<Link className="side-linksA" to="/logout">
								<div className="sideIcon">
									<BiLogOut />
								</div>
								Logout
							</Link>
							<Link className="side-linksA" to="/logout">
								<div className="sideIcon">
									<BiLogOut />
								</div>
								Logout
							</Link>
							<Link className="side-linksA" to="/logout">
								<div className="sideIcon">
									<BiLogOut />
								</div>
								Logout
							</Link>
							<Link className="side-linksA" to="/logout">
								<div className="sideIcon">
									<BiLogOut />
								</div>
								Logout
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default sidebar