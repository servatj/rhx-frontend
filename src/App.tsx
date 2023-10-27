import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoverLetter from "./pages/CoverLetter";
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/PricingPage";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

function App(): JSX.Element {
	return (
    <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cover" element={<CoverLetter />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/pricing" element={<PricingPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
