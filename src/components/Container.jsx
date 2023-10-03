const Container = ({ children, className }) => {
  return (
    <div className={`w-full flex h-screen justify-center items-center ${className}`}>
      {children}
    </div>
  );
};

export default Container;
