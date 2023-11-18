import styled from 'styled-components';

const FeatureContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-break: break-word;
  background-color: white;
  width: 100%;
  margin-bottom: 2rem; /* This is equivalent to mb-8 */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Tailwind shadow-lg */
  border-radius: 0.5rem; /* This is equivalent to rounded-lg */
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.25);
  }
`;

const Content = styled.div`
  padding: 1rem; /* This is equivalent to px-4 and py-5 */
  flex: 1;
`;

const Title = styled.h6`
  font-size: 1.25rem; /* This is equivalent to text-xl */
  font-weight: 600; /* This is equivalent to font-semibold */
`;

const Description = styled.p`
  margin-top: 0.5rem; /* This is equivalent to mt-2 */
  margin-bottom: 1rem; /* This is equivalent to mb-4 */
  color: #718096; /* This is the color for text-blueGray-500 */
`;

interface FeatureBoxProps {
  title: string;
  description: string;
}

const FeatureBox = ({ title, description }: FeatureBoxProps) => {
  return (
    <FeatureContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </FeatureContainer>
  );
};

export default FeatureBox;
