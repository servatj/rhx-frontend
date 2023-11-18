import Container from "../components/Container";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

export default function Login() {
	return (
		<div className="App min-w-[600px]">
			<Layout>
				<section>
					<Container>
						<LoginForm />
					</Container>
				</section>
			</Layout>
		</div>
	);
}
