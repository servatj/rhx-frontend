import Container from "../components/Container";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthProvider";

const ProfilePage: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Layout>
      <Container className="bg-slate-700">
        <h1>Profile Page</h1>
        <p>You are logged as User: {user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </Container>
    </Layout>
  );
}

export default ProfilePage;
