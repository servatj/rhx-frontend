import styled from 'styled-components';

// Styled components
const Container = styled.div`
  // Add styles for the container div here
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 2px;
  color: white;
  // Add more styles for the label here
`;

const StyledInput = styled.input`
  padding: 2px;
  border: 1px solid; // Customize the border color if needed
  border-radius: 4px;
  margin-bottom: 4px;
  width: 100%;
  // Add more styles for the input here
`;

const ErrorText = styled.p`
  color: #f56565; // This is the tailwindcss red-500 color
  // Add more styles for the error text here
`;

interface InputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: any;
}

export default function Input({ label, name, type, value, onChange, error } : InputProps) {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <ErrorText>{error[name]}</ErrorText>}
    </Container>
  );
}
