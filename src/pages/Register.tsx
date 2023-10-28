import Container from "../components/Container";
import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
	return (
			<Layout>
				<Container className="bg-blueGray-700 h-2">
					<div className="flex p-10 justify-center">
						<RegisterForm />
					</div>
				</Container>
			</Layout>
	);
}
