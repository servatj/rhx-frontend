interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex justify-center items-center ${className} min-h-screen`}>
      {children}
    </div>
  );
};

export default Container;
