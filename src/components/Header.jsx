import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-gray-800 p-4 text-white">
			<div className="container mx-auto">
				<Link to="/">
					<h1 className="text-2xl font-bold">RHX</h1>
				</Link>
			</div>
		</header>
	);
};

export default Header;
