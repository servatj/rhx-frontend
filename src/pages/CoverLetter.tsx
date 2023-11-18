import CoverLetterForm from "../components/CoverLetterForm";
import Container from "../components/Container";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<>
			<Layout>
				<main>
					<Container>
						<div className="flex p-10 justify-center">
							<CoverLetterForm />
						</div>
					</Container>
				</main>
			</Layout>
		</>
	);
}
