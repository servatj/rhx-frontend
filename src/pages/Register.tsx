import Container from "../components/Container";
import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
	return (
		<Layout>
			<section>
				<div>
					<Container>
						<RegisterForm />
					</Container>
				</div>
			</section>
		</Layout>
	);
}
