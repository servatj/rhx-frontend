import { Link } from "react-router-dom";
import Container from "./ui/Container";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";
import ProfileButton from "./ui/ProfileButton";

const Header = () => {
	const links = [
		{ to: "/", text: "Home" },
		{ to: "/cover", text: "Cover Letter" },
	];

	return (
		<header className="sm:flex sm:justify-between py-3 px-4 border-b bg-slate-800">
			<Container>
				<div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
					<div className="flex items-center">
						<Link to="/" className="ml-4 lg:ml-0">
							<h1 className="text-2xl font-bold text-white">RHX </h1>
						</Link>
					</div>
					{/* <nav className="mx-6 flex items-center md:block space-x-4 lg:space-x-6 hidden">
						{links.map(({ to, text }, i) => (
							<Button asChild variant="ghost" key={i}>
								<Link
									key={to}
									to={to}
									className="text-base font-medium text-gray-500 hover:text-gray-900"
								>
									{text}
								</Link>
							</Button>
						))}
					</nav> */}
					<div className="flex items-center">
						<Button
							size="icon"
							aria-label="Toggle theme"
							variant="ghost"
							className="mr-6"
						>
							<Sun className="w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<Moon className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">toggle theme</span>
						</Button>
						<ProfileButton />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
