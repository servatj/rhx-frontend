import Container from "../components/Container";
import FeaturesProfile from "../components/FeaturesProfile";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthProvider";

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <h1>Welcome Back 👋</h1>
      <Container className="bg-slate-700">
        <div className={`flex m-8 justify-center items-center `}>
					<FeaturesProfile />
				</div>
      </Container>
    </Layout>
  );
}

export default ProfilePage;
