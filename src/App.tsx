import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoverLetter from "./pages/CoverLetter";
import Login from './pages/Login';
import Register from './pages/Register';


function App(): JSX.Element {
	return (
    <Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cover" element={<CoverLetter />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
