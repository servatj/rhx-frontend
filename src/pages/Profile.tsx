import { useEffect, useState } from "react";
import styled from 'styled-components';
import FeaturesProfile from "../components/FeaturesProfile";
import Layout from "../components/Layout";

const HeroSection = styled.div`
  position: relative;
  padding-top: 4rem; /* pt-16 */
  padding-bottom: 8rem; /* pb-32 */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh; /* min-h-screen-75 */
`;

const Section = styled.section`
  padding-bottom: 5rem; /* pb-20 */
  background-color: #F7FAFC; /* bg-blueGray-200 */
  margin-top: -6rem; /* -mt-24 */
`;

const WelcomeMessage = styled.h1`
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.5s;
  padding-left: 0.5rem; /* pl-2 */
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfilePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Layout>
      <HeroSection>
        {/* Content here */}
      </HeroSection>
      <Section>
        <WelcomeMessage isVisible={isVisible}>
          Welcome Back 👋
        </WelcomeMessage>

        <CenteredContent>
          <FeaturesProfile />
        </CenteredContent>
      </Section>
    </Layout>
  );
};

export default ProfilePage;
