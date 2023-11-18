import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { supabase } from "../utils/supabaseClient";
import { useAuth } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Button from "./shared/Button";

interface Message {
	type: "error" | "success" | null;
	text: string | null;
}

const Container = styled.div`
	max-width: md;
	width: full;
	space-y: 8;
	padding: 20px;
	background-color: black;
	color: white;
	width: 50%;
	display: flex;
	justify-content: center;
	radius: 0.5rem;
`;

const Alert = styled.div`
	background-color: ${(props) =>
		props.type === "error"
			? "red"
			: "green"}; // Replace with your actual colors for alert-error and alert-success
	// Add more styles here
`;

const FormCard = styled.div`
  relative;
  flex;
  flex-col;
  min-w-0;
  break-words;
  w-full;
  mb-6;
  shadow-lg;
  rounded-lg;
  bg-black;
  border-0;
`;

const Form = styled.form`
  mt-8;
  space-y-6;
  flex;
  flex-col;
`;

const Title = styled.div`
  text-blueGray-400;
  text-center;
  mb-3;
  font-bold;
`;

const Input = styled.input`
	// Add shared input styles here
	color : black;
`;

const Label = styled.label`
  bg-white;
`;

const InputContainer = styled.div`
  rounded-md;
  shadow-sm;
  -space-y-px;
`;

const ButtonContainer = styled.div`
  flex;
  justify-between;
`;

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
		<Container>
			{message && <Alert type={message.type}>{message.text}</Alert>}
			<FormCard>
				<Form onSubmit={handleLogin}>
					<Title>
						<small>Sign in with credentials</small>
					</Title>
					<input type="hidden" name="remember" value="true" />
					<InputContainer>
						<div>
							<Label htmlFor="email-address">
								<h6>Email</h6>
							</Label>
							<Input
								id="email-address"
								name="email"
								type="email"
								required
								placeholder="Email address"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<Label htmlFor="password">
								<h6>Password</h6>
							</Label>
							<Input
								id="password"
								name="password"
								type="password"
								required
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</InputContainer>
					<ButtonContainer>
						<Link to="/forgot"><small>reset</small></Link>
						<Link to="/register"><small>Create new account</small></Link>
					</ButtonContainer>
					<ButtonContainer>
						<Button description={loading ? "Signing in..." : "Sign in"} handleSubmit={handleLogin}>
						</Button>
					</ButtonContainer>
				</Form>
			</FormCard>
		</Container>
	);
};

export default LoginForm;
