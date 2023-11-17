import CoverLetterForm from "../components/CoverLetterForm";
import Container from "../components/Container";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<>
			<Layout>
				<section className="relative w-full h-full py-40 min-h-screen bg-blueGray-700">
					<Container className="bg-blueGray-700 h-2">
						<div className="flex p-10 justify-center">
							<CoverLetterForm />
						</div>
					</Container>
				</section>
			</Layout>
		</>
	);
}
