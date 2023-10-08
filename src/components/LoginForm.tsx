import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

interface Message {
  type: "error" | "success" | null;
  text: string | null;
}

const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<Message>({ type: null, text: null });
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setMessage(null);

		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
    const { user, session } = data;
    console.log(error, data)
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
        setUser(session.user);
        setAuth(true);
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
			<form className="mt-8 space-y-6" onSubmit={handleLogin}>
				<input type="hidden" name="remember" value="true" />
				<div className="rounded-md shadow-sm -space-y-px">
					<div>
						<label htmlFor="email-address" className="sr-only">
							Email address
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
						<label htmlFor="password" className="sr-only">
							Password
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
				<div>
					<button
						type="submit"
						disabled={loading}
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						{loading ? "Signing in..." : "Sign in"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;