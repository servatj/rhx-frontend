import Container from "../components/Container";
import Layout from "../components/Layout";

const TestCotainer = () => {
  const [state, setState] = useState({ count: 0 });

  const onClick = () => {
    setState({ count: state.count + 1 });
  };

  return (
    <Layout>
      <Container className="bg-blueGray-700 h-2">
        <div className="flex p-10 justify-center">
          <h1>Hello</h1> 
        </div>
      </Container>
    </Layout>
  );
} 

export default TestCotainer;
