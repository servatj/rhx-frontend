import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from "react";
import Auth from "../components/Auth";
import Account from "../components/Account";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Layout from "../components/Layout";
import "../App.css";

export default function Home() {
	const [session, setSession] = useState(null);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
		});

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
		});
	}, []);

	return (
		<div className="App min-w-[600px]">
			<Layout>
				<Container className="bg-slate-700">
					<Hero />
				</Container>
				<Container className="bg-white">
					{!session ? (
						<Auth />
					) : (
						<Account key={session.user.id} session={session} />
					)}
				</Container>
				<Container className="bg-slate-700">
					<div className="bg-red-500 p-4 m-2 text-white">Item 1</div>
					<div className="bg-blue-500 p-4 m-2 text-white">Item 2</div>
					<div className="bg-green-500 p-4 m-2 text-white">Item 3</div>
				</Container>
			</Layout>
		</div>
	);
}
