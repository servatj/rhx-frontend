import Container from "../components/Container";
import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
	return (
			<Layout>
				<section className="relative w-full h-full py-40 min-h-screen bg-blueGray-700">
					<Container className="bg-blueGray-700 h-2">
						<div className="flex p-10 justify-center">
							<RegisterForm />
						</div>
					</Container>
				</section>
			</Layout>
	);
}
