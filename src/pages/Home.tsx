import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Features from "../components/Features";

interface CommentCardProps {
	name: string;
	time: string;
	commentText: string;
}

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
		<div className="App min-h-[600px]">
			<Layout>
				<main>
					<Hero />
          <Features />
				</main>
			</Layout>
		</div>
	);
}
