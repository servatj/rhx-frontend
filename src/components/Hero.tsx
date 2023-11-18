import { Link as RouterLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import documentation from '../assets/img/documentation.png';
import Button from '../components/shared/Button'

// Styled components
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  padding: 4rem 0;
  background-color: #4A5568;
  padding-left: 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 640px) { // This is typically the breakpoint for 'sm' in TailwindCSS
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  max-width: 600px; /* Half of Container's max-width */
  text-align: left;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  color: white;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  color: white;
  font-weight: normal;
`;

const RegisterLink = styled(RouterLink)`
  /* Your RegisterLink styles */
`;

const Image = styled.img`
  max-width: 50%;
  /* Your Image styles */
`;

// Hero component
const Hero = () => {
  
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    console.log('clicked')
    navigate('/register');
  }
  

  return (
    <HeroContainer>
      <Container>
        <TextContainer>
          <Title>Empower your career with us</Title>
          <Subtitle>
            Discover a new way to connect with potential companies.
            <span className="font-semibold">
              That will boost your career
            </span>
            , Fast, easy, and intuitive.
          </Subtitle>
          <Button description={'register'} handleSubmit={handleSubmit} />
        </TextContainer>
        <Image alt="Documentation" src={documentation} />
      </Container>
    </HeroContainer>
  );
};

export default Hero;
