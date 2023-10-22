import { useEffect, useState } from "react";
import Container from "../components/Container";
import FeaturesProfile from "../components/FeaturesProfile";
import Layout from "../components/Layout";

const ProfilePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <Layout>
      {isVisible && <h1 className="transition-opacity duration-500 pl-2">Welcome Back 👋</h1>}
      <Container className="bg-slate-700">
        <div className={`flex m-8 justify-center items-center `}>
					<FeaturesProfile />
				</div>
      </Container>
    </Layout>
  );
}

export default ProfilePage;
