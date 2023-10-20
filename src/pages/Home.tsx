import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Features from "../components/Features";

interface CommentCardProps {
	name: string;
	time: string;
	commentText: string;
}

const CommentCard = ({ name, time, commentText }: CommentCardProps) => {
	return (
		<div className="p-4 border rounded-md shadow-sm bg-white w-full max-w-md">
			<div className="flex items-center mb-3">
				<div className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-semibold">
					{name[0]}
				</div>
				<div className="ml-3">
					<h3 className="font-medium">{name}</h3>
					<span className="text-gray-500 text-sm">{time}</span>
				</div>
			</div>
			<p className="mb-3">{commentText}</p>
			<div className="flex items-center justify-between"></div>
		</div>
	);
};

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
				<div className={`flex m-8 justify-center items-center `}>
					<Features />
				</div>
				<Container className="bg-slate-700">
					<CommentCard
						name="John Doe"
						time="2 hours ago"
						commentText="Thanks to rhx I have all the tools needed to boost my career"
					/>
				</Container>
			</Layout>
		</div>
	);
}
