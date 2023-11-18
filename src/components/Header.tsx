import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
	background: black; // Or any other color you prefer
	color: #fff;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	align-items: center;
`;

const Logo = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;

const Nav = styled.nav`
	@media (max-width: 768px) {
		display: none;
	}
`;

const NavList = styled.ul`
	list-style: none;
	display: flex;
	gap: 2rem;
`;

const NavLink = styled.li`
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

const MobileMenuIcon = styled.button`
	background: none;
	border: none;
	color: #fff;
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`;

const MobileNav = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 80%; // or 100% if you want full width
	height: 100%;
	background: #fff; // Background for the mobile menu
	color: #000; // Text color for the mobile menu
	transform: translateX(100%);
	transition: transform 0.3s ease-in-out;

	&.active {
		transform: translateX(0);
	}
`;

const MobileNavList = styled(NavList)`
	flex-direction: column;
	padding: 2rem;
`;

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
	};

	const toggleMobileMenu = () => {
		console.log("toggleMobileMenu");
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<HeaderContainer>
			<Link to="/">
				<Logo>LEVELY</Logo>
			</Link>
			<Nav>
				<NavList>
					{links.map(
						({ to, text, visible }) =>
							visible && (
								<Link key={to} to={to}>
									{text}
								</Link>
							)
					)}
					{user && <button key={"logout"} onClick={handleSignout}>Logout</button>}
				</NavList>
			</Nav>
			<MobileMenuIcon onClick={toggleMobileMenu}>
				{/* Icon from https://heroicons.com/ */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					width="24"
					height="24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</MobileMenuIcon>
			<MobileNav className={isMobileMenuOpen ? "active" : ""}>
				<MobileNavList>
					{links.map(
						({ to, text, visible }) =>
							visible && (
								<NavLink onClick={toggleMobileMenu}>
									<Link key={to} to={to}>
										{text}
									</Link>
								</NavLink>
							)
					)}
					{user && <NavLink>
						<a key={"logout"} onClick={handleSignout}>Logout</a>
						</NavLink>}
				</MobileNavList>
			</MobileNav>
		</HeaderContainer>
	);
};

export default Header;
