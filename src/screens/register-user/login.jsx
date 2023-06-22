
import { Link, useNavigate } from "react-router-dom"
import "../../styles/register.css"
import { useState } from "react";

const login = () => {

	const [email, setemail] = useState("");
	const [password, setPassword] = useState("");

	  const [error , setError] = useState("")
	const navigate = useNavigate()
	const loginUser = async (e) => {
		e.preventDefault();

		const data = {
			email: email,
			password: password,
		}
		
		
	try {
		const result = await fetch("http://localhost:9000/api/v1/login", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(data),
			credentials: "include"
		});
		if (result.ok) {
			 await result.json();
			navigate("/home");
		} else {
			navigate("/login")
		}
		
	} catch (error) {
		setError(error);
	}

	}
	
	return (
		<div className="body">
			<div className="main">
				<h1 className="space"> Welcome to Space</h1>
				<div className="Links">
					<Link className="link-a" to="/login">
						<p className="ptag">Login</p>
					</Link>
					<Link className="link-a" to="/signup">
						<p className="ptag">signup</p>
					</Link>
				</div>
				<p className="line"></p>
				<form onSubmit={loginUser}>
					<div className="email">
						<p className="ptag">email</p>
						<input
							className="inputinfo"	
							type="text"
							name="username"
							placeholder=" Enter your username"
							onChange={(e) => {
								setemail(e.target.value);
							}}
							required
						/>
					</div>
					<div>
						<p className="ptag">password</p>
						<input
							className="inputinfo"
							type="password"
							name="password"
							placeholder=" Enter password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
						/>
					</div>

					<div>
						<button type="submit" className="signin">
							login
						</button>
					</div>

					<div className="reset">
						<Link to="/" className="reset2">
							<p> Forgot your password?</p>
						</Link>
					</div>
				</form>
				<div className="border"> </div>

				<div>
					<div className="connect"> Or connect with:</div>
					<div className="apple">
						<svg
							viewBox="0 0 170 170"
							fill="currentColor"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
							aria-hidden="true"
						>
							<title>Apple Logo</title>
							<path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z"></path>
						</svg>
						Connect with Apple
					</div>

					<div className="facebook">
						<svg
							viewBox="0 0 200 200"
							aria-hidden="true"
							fill="currentColor"
							preserveAspectRatio="xMinYMin meet"
							focusable="false"
						>
							<title>Facebook</title>
							<path
								d="M200 100a100 100 0 1 0-115.6 98.8v-69.9H59V100h25.4V78c0-25 14.9-39 37.7-39 11 0 22.4 2 22.4 2v24.6H132c-12.4 0-16.3 7.7-16.3 15.6V100h27.8l-4.5 29h-23.3v69.8A100 100 0 0 0 200 100"
								stroke="none"
							></path>
						</svg>
						Connect with Facebook
					</div>

					<div className="google">
						<svg viewBox="0 0 256 262">
							<path
								d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
								fill="#4285F4"
							></path>
							<path
								d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
								fill="#34A853"
							></path>
							<path
								d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
								fill="#FBBC05"
							></path>
							<path
								d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
								fill="#EB4335"
							></path>
						</svg>
						Connect with Google
					</div>
				</div>
			</div>
		</div>
	);
}

export default login