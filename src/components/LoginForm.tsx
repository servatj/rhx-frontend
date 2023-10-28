import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

interface Message {
	type: "error" | "success" | null;
	text: string | null;
}

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<Message>({ type: null, text: null });
	const { login } = useAuth();

	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const response = await login(email, password);

		console.log(response);

		const { data, error } = response;

		const { user, session } = data;
		console.log(data);
		setLoading(false);

		if (error) {
			setMessage({ type: "error", text: error.message });
		} else if (user) {
			setMessage({ type: "success", text: "Successfully logged in!" });
		}
	};

	useEffect(() => {
		const { data } = supabase.auth.onAuthStateChange((event, session) => {
			if (event === "SIGNED_IN") {
				navigate("/profile");
			}
		});
		return () => {
			data.subscription.unsubscribe();
		};
	}, []);

	return (
		<div className="max-w-md w-full space-y-8">
			{message && (
				<div
					className={`alert ${
						message.type === "error" ? "alert-error" : "alert-success"
					}`}
				>
					{message.text}
				</div>
			)}
			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black border-0">
				<div className="rounded-t mb-0 px-12 py-6">
					<form className="mt-8 space-y-6 flex flex-col" onSubmit={handleLogin}>
						<div className="text-blueGray-400 text-center mb-3 font-bold">
							<small>Sign in with credentials</small>
						</div>
						<input type="hidden" name="remember" value="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="email-address" className="bg-white">
									<h6 className="text-blueGray-500 font-bold">Email</h6>
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor="email-address" className="bg-white">
									<h6 className="text-blueGray-500 font-bold">Password</h6>
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						<div className="flex justify-between">
						    <Link to="/forgot" className="text-blueGray-400">
                  <small>reset</small>
                </Link>
                <Link to="/register" className="text-blueGray-400">
                  <small>Create new account</small>
                </Link>
						</div>
						<div className="flex items-center justify-center pt-8">
							<button
								type="submit"
								disabled={loading}
								className="group ml-1 text-white font-bold px-6 py-4 justify-center rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
							>
								{loading ? "Signing in..." : "Sign in"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
