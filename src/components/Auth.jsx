import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");

	const handleLogin = async (event) => {
		event.preventDefault();
		setLoading(true);
		const { error } = await supabase.auth.signIn({ email });
		if (error) alert(error.message);
		alert("Check your email for the login link!");
		setLoading(false);
	};

	return (
		<section className="flex flex-col sm:flex-col items-center w-full md:w-auto gap-4 mt-10 mb-12">
			<h1 className="text-4xl font-bold mb-4 sm:mb-0">Get Started</h1>
			<form className="w-72 justify-center" onSubmit={handleLogin}>
				<div className="mb-4">
					<input
						className="w-full p-2 border border-gray-300 rounded-md"
						type="email"
						placeholder="Your email"
						value={email}
						required={true}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
					disabled={loading}
				>
					{loading ? <span>Loading</span> : <span>Send magic link</span>}
				</button>
			</form>
		</section>
	);
}
