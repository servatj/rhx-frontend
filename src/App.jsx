import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CoverLetter from "./pages/CoverLetter";

function App() {
	return (
    <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cover" element={<CoverLetter />} />
		</Routes>
	);
}

export default App;
