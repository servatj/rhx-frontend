import Container from "../components/Container";
import Pricing from "../components/Princing";
import Layout from "../components/Layout";

const PricingPage: React.FC = () => {
  return (
    <Layout>
      <Container className="bg-slate-700">
        <div className={`flex m-8 justify-center items-center `}>
					<Pricing />
				</div>
      </Container>
    </Layout>
  );
}

export default PricingPage;
