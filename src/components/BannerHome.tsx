import styled from 'styled-components';

// Styled component for the container
const Container = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 33.333333%; /* equivalent to 4/12 */
  }
  padding: 1rem; /* equivalent to px-4 */
  margin-right: auto;
  margin-left: auto;
  
`;

// Styled component for the card
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  margin-bottom: 1.5rem; /* equivalent to mb-6 */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem; /* equivalent to rounded-lg */
  background-color: #4A5568;
`;

// Styled component for the image
const CardImage = styled.img`
  width: 100%;
  align-self: center; /* equivalent to align-middle */
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem; /* equivalent to rounded-t-lg */
`;

// Styled component for the blockquote
const BlockQuote = styled.blockquote`
  position: relative;
  padding: 2rem; /* equivalent to p-8 */
  margin-bottom: 1rem; /* equivalent to mb-4 */
`;

// Styled component for the svg
const SvgTriangle = styled.svg`
  position: absolute;
  left: 0;
  width: 100%;
  height: 95px;
  top: -94px;
`;

// Styled component for the heading
const Heading = styled.h4`
  font-size: 1.25rem; /* equivalent to text-xl */
  font-weight: bold; /* equivalent to font-bold */
  color: #ffffff;
`;

// Styled component for the paragraph
const Paragraph = styled.p`
  font-size: 1rem; /* equivalent to text-md */
  font-weight: light; /* equivalent to font-light */
  margin-top: 0.5rem; /* equivalent to mt-2 */
  color: #ffffff;
`;

function BannerHome() {
  return (
    <Container>
      <Card>
        <CardImage
          alt="..."
          src="https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?auto=format&fit=crop&q=80&w=3132&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <BlockQuote>
          <SvgTriangle preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95">
            <polygon points="-30,95 583,95 583,65" fill="#4A5568" />
          </SvgTriangle>
          <Heading>Top Notch Cover Letter</Heading>
          <Paragraph>
            "Thanks to levely I have all the tools needed to boost my career"
          </Paragraph>
        </BlockQuote>
      </Card>
    </Container>
  );
}

export default BannerHome;
