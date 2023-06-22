import HomePage from "./screens/home/home"
import DestinationPage from "./screens/Destination/destination"
import CrewPage from "./screens/crew/crew"
import TechnologyPage from "./screens/Technology/technology"
import Login from "./screens/register-user/login"
import Signup from "./screens/register-user/signup"
import Editprofile from "./screens/profile/profile"
import WelcomePage from "./screens/welcome/welcom-page"

// import Crew from "./screens/crew"
// import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
		<BrowserRouter>
			<Routes>
			  <Route path="/">
				  


					<Route path="" element={<WelcomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/destination" element={<DestinationPage />} />
					<Route path="/crew" element={<CrewPage />} />
					<Route path="/technology" element={<TechnologyPage />} />
					<Route path="/profile" element={<Editprofile />} />
				</Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App
