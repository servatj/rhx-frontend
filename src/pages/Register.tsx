import Container from "../components/Container";
import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
	return (
			<Layout>
				<Container className="bg-slate-700">
					<RegisterForm />
				</Container>
			</Layout>
	);
}
