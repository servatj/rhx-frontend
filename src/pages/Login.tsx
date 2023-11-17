import Container from "../components/Container";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

export default function Login() {
	return (
		<div className="App min-w-[600px]">
			<Layout>
				<section className="relative w-full h-full py-40 min-h-screen bg-blueGray-700">
					<Container className="bg-blueGray-700 h-2">
						<div className="flex p-10 justify-center">
							<LoginForm />
						</div>
					</Container>
				</section>
			</Layout>
		</div>
	);
}
