const FeatureBox = ({ title, description}) => {
	return (
    <>    
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg transform hover:scale-125">
        <div className="px-4 py-5 flex-auto">
          <h6 className="text-xl font-semibold">{title}</h6>
          <p className="mt-2 mb-4 text-blueGray-500">
            {description}
          </p>
        </div>
      </div>
    </>
	);
};

export default FeatureBox;
