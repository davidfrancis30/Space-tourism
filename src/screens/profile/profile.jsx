import React from 'react'
 import Sidebar from '../../components/sidebar/sidebar'

import image from "../../assets/image-mars.png";
//  import Header  from "../../components/header/header-compo"
import "../../styles/profile.css"
const profile = () => {
  return (
		<div className="profile">
			<div className='profile-sidebar'>
				<Sidebar />
			</div>
		  <div className='profile-main'>
			  
				<div className="side1-image">
					<form action="">
						<label htmlFor="text">
							<img className="side-image" src={image} alt="" />
						</label>
						<input
							type="file"
							id="text"
							style={{ display: "none" }}
						/>
					</form>
			  </div>
			  
			  <div className='profile-details'>
				   <p> welcome : user name</p>
				   <p>user name</p>
				   <p>email</p>
				   <p>Phonenumber</p>
				   
			  </div>
			</div>
		</div>
  );
}

export default profile