import CoverLetterForm from "../components/CoverLetterForm";
import Container from "../components/Container";
import Layout from "../components/Layout";

export default function CvEnhancer() {
	return (
		<>
			<Layout>
				<main>
					<Container>
							<CoverLetterForm />
					</Container>
				</main>
			</Layout>
		</>
	);
}
