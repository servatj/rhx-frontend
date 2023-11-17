import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link } from "react-router-dom";
import styled from "styled-components";
interface Message {
	type: "error" | "success" | null;
	text: string | null;
}

const FormContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-break: break-word;
	width: 100%;
	margin-bottom: 1.5rem;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem;
	background-color: #000;
	border: 0;
`;

const FormHeader = styled.div`
	border-top-radius: 0.5rem;
	padding: 1.5rem 3rem;
`;

const FormBody = styled.div`
	max-width: 28rem;
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Alert = styled.div`
	background-color: ${(props) =>
		props.type === "error" ? "#F56565" : "#68D391"};
	// ... More styles for your alert
`;

const StyledForm = styled.form`
	margin-top: 2rem;
	gap: 1.5rem;
	display: flex;
	flex-direction: column;
`;

const FormTitle = styled.div`
	color: #a0aec0;
	text-align: center;
	margin-bottom: 0.75rem;
	font-weight: bold;
`;

const InputGroup = styled.div`
	border-radius: 0.375rem;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	// ... More styles for your input group
`;

const StyledInput = styled.input`
	appearance: none;
	display: block;
	width: 100%;
	padding: 0.5rem 0.75rem;
	border: 1px solid #d2d6dc;
	color: #4a5568;
	border-radius: 0.375rem;
	// ... More focus styles
`;

const Label = styled.label`
	// ... Label styles
`;

const StyledLink = styled(Link)`
	color: #a0aec0;
`;

const SubmitButton = styled.button`
  text-white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  display: flex;
  justify-content: center;
  border-radius: 0.375rem;
  background-color: #4a5568;
  text-transform: uppercase;
  font-size: 0.875rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  transition: all 0.15s ease-linear;
  // ... More active and hover styles

  &:disabled {
    opacity: 0.5;
  }
`;

const RegisterForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<Message>({ type: null, text: null });
	const [user, setUser] = useState(null);
	const [session, setSession] = useState(false);

	const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setMessage(null);

		const { data, error } = await supabase.auth.signUp({ email, password });
		const { user, session } = data;
		console.log(user, session);
		setLoading(false);

		if (error) {
			setMessage({ type: "error", text: error.message });
		} else {
			setMessage({
				type: "success",
				text: "Registration successful! Please check your email to verify your account.",
			});
		}
	};

	return (
		<FormContainer>
			<FormHeader>
				<FormBody>
					{message && <Alert type={message.type}>{message.text}</Alert>}
					<StyledForm onSubmit={handleRegister}>
						<FormTitle>
							<small>Register new account</small>
						</FormTitle>
						<input type="hidden" name="remember" value="true" />
						<InputGroup>
							<Label htmlFor="email-address">
								<h6>Email</h6>
							</Label>
							<StyledInput
								id="email-address"
								type="email"
								required
								placeholder="Email address"
							/>
						</InputGroup>
						<InputGroup>
							<Label htmlFor="password">
								<h6>Password </h6>
							</Label>
							<StyledInput
								id="password"
								type="password"
								required
								placeholder="Password"
							/>
						</InputGroup>
						<StyledLink to="/login">
							<small>Already have an account?</small>
						</StyledLink>
						<SubmitButton type="submit" disabled={loading}>
							{loading ? "Registering..." : "Register"}
						</SubmitButton>
					</StyledForm>
				</FormBody>
			</FormHeader>
		</FormContainer>
	);
};

export default RegisterForm;
