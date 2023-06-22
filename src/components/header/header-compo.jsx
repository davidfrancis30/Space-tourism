import React ,{useState} from 'react'
import logo from "../../assets/logo.svg"
import { Link } from'react-router-dom'
import  "../../styles/header.css"
import ham from "../../assets/icon-hamburger.svg"
import Profilepic from "../../assets/logo.svg"
const header = () => {
	const [ToggleHam ,setToggleHam] = useState(false)

  return (
		<div className="mainheader">
			<div className="logo">
				<img src={logo} alt="" />
		  </div>
		  <div className='hamcontainer'>
			  			  {
			  ToggleHam && (
				  <div className='hamList'>
					   <div>
					  <Link to= "/profile">
					  <img   src={Profilepic	} alt="" />
					  </Link>
					  <p>david francis</p>
				  </div>
          <Link  className="hamText" to="/home"> 00 HOME</Link>
				<Link className="hamText" to="/destination"> 01 DESTINATION</Link>
				<Link  className="hamText" to="/crew"> 02 CREW</Link>
				  <Link className="hamText" to="/technology"> 03 TECHNOLOGY</Link>
         </div>
			  )
			  }

			  <div className='ham'>
		
			  <img onClick={() => setToggleHam(!ToggleHam)} src={ham} alt="" />

			  </div>
			  		
		  </div>



		   
			<div className="headerline"></div>
			<div className="headerlinkscontainer">
        <div className='headerlinks'>
          <Link  className="Linktext" to="/home"> 00 HOME</Link>
				<Link className="Linktext" to="/destination"> 01 DESTINATION</Link>
				<Link  className="Linktext" to="/crew"> 02 CREW</Link>
				  <Link className="Linktext" to="/technology"> 03 TECHNOLOGY</Link>
				  <div>
					  <Link to= "/profile">
					  <img   src={Profilepic	} alt="" />
					  </Link>
					  <p>david francis</p>
				  </div>
				  
         </div>
		  </div>
		  
		  
		</div>
  );
}

export default header