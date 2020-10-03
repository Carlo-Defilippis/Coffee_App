import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = function () {
	const [users, setUsers] = useState(null);

  
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	useEffect(() => {
		axios
			.get("/api/users")
			.then((users) => setUsers(users), console.log('Users in useEffect: ',users))
			.catch((err) => console.log(err));
	}, []);

	function submitForm(event) {
		event.preventDefault()
		if (email === "") {
			alert("Please fill the email field");
			return;
		}
		if (password === "") {
			alert("Please fill the password field");
			return;
		}
		axios
			.post("/api/users", {
				email: email,
				password: password,
			}, console.log(email, password))
			.then(function (result) {
				alert("Account created successfully");
				console.log("Result of succesful login: ", result)
			})
			.catch(function (err) {
				console.log(window)
				console.log("Could not create account. Please try again", err.response);
			});
  }
  console.log('Email and Password', email, password)
	return (
		<>
			<h1>My Project</h1>
			{/* {users === null ? (
				<p>Loading...</p>
			) : users.length === 0 ? (
				<p>No user available</p>
			) : (
						<>
							<h2>Available Users</h2>
							<ol>
								{users.map((user, index) => (
									<li key={index}>
										Email: {user.email} - Password: {user.password}
									</li>
								))}
							</ol>
						</>
					)} */}

			<form onSubmit={submitForm}>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Enter your email address"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Enter your password"
				/>
				<input type="submit" />
			</form>
		</>
	);
};
export default App