interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex h-screen justify-center items-center ${className}`}>
      {children}
    </div>
  );
};

export default Container;
