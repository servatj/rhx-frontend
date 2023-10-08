interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-7xl text-white">
      {children}
    </div>
  );
} 

export default Container;
