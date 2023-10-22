import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
	}

	return (
		<header className="sm:flex sm:justify-between py-3 px-4 border-b bg-slate-800">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
					<div className="flex items-center">
						<Link to="/" className="ml-4 lg:ml-0">
							<h1 className="text-2xl font-bold text-white">Levely </h1>
						</Link>
					</div>
					<nav className="mx-6 flex items-center md:block space-x-4 lg:space-x-6">
						{links.map(({ to, text, visible }) => (
							visible && (
								<Link
									key={to}
									to={to}
									className="text-base font-medium text-white hover:text-pink-400"
								>
									{text}
								</Link>
							)
						))}
						{user && (
							<button
								onClick={handleSignout}
								className="text-base font-medium text-white hover:text-pink-400"
							>
								Logout
							</button>
						)}
					</nav>
					{/* <div className="flex items-center">
						<Sun className="w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<Moon className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">toggle theme</span>
					</div> */}
				</div>
			</Container>
		</header>
	);
};

export default Header;
