import Container from "../components/Container";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";

export default function Login() {
	return (
		<div className="App min-w-[600px]">
			<Layout>
				<Container className="bg-blueGray-700 h-2">
          <div className="flex p-10 justify-center">
             <LoginForm />            
          </div>
				</Container>
			</Layout>
		</div>
	);
}
