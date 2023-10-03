import CoverLetterForm from "../components/CoverLetterForm"
import Header from "../components/Header";
import Container from "../components/Container";

export default function Home() {
	return (
		<>
			<Header />
			<Container className="bg-slate-700">
				<CoverLetterForm />
			</Container>
		</>
	);
}
