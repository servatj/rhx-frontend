import styled from 'styled-components';

// Styled button component
const NotifyButton = styled.button`
  background-color: #2D3748; /* bg-blueGray-700 */
  color: white;
  font-weight: bold;
  border-radius: 0.375rem;
  outline: none;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.15s ease-linear;
  padding: 0.75rem 1.5rem;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  &:active {
    background-color: #4A5568; /* bg-blueGray-600 */
  }

  &:focus {
    outline: none;
  }
`;

// Usage example in a component
const Button = ({ description, handleSubmit}: { description: string, handleSubmit: (e: React.FormEvent<HTMLButtonElement>) => Promise<void>}) => {
  return (
    <NotifyButton onClick={handleSubmit}>
      {description}
    </NotifyButton>
  );
};

export default Button;
5
