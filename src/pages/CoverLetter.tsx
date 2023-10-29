import CoverLetterForm from "../components/CoverLetterForm";
import Container from "../components/Container";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<>
			<Layout>
				<Container className="bg-blueGray-700">
					<CoverLetterForm />
				</Container>
			</Layout>
		</>
	);
}
