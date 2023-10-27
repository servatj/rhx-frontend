/*eslint-disable*/
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

import PagesDropdown from "../Dropdowns/PagesDropdown";

export default function Navbar(props) {
	const [navbarOpen, setNavbarOpen] = React.useState(false);
	const navigate = useNavigate();

	const { user, signOut } = useAuth();

	const links = [
		{ to: "/", text: "Home", visible: true },
		{ to: "/cover", text: "Cover Letter", visible: false },
		{ to: "/login", text: "Login", visible: !user },
		{ to: "/register", text: "Register", visible: !user },
		{ to: "/profile", text: "Profile", visible: user },
		{ to: "/pricing", text: "Pricing", visible: true },
	];

	const handleSignout = () => {
		signOut();
		navigate("/");
	};

	return (
		<>
			<nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black shadow">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link
							className="text-white text-8xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
							to="/"
						>
							Levely
						</Link>
						<button
							className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="text-white fas fa-bars"></i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none justify-end" +
							(navbarOpen ? " block rounded shadow-lg" : " hidden")
						}
						id="navbar-warning"
					>
						<ul className="flex flex-col lg:flex-row list-none  m-2">
							{links.map(
								({ to, text, visible }) =>
									visible && (
										<li className="flex items-center">
											<Link
												key={to}
												to={to}
												className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
											>
												{text}
											</Link>
										</li>
									)
							)}
							<li className="flex items-center">
								{user && (
									<button
										onClick={handleSignout}
										className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
									>
										Logout
									</button>
								)}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
