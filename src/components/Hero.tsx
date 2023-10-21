const Hero = () => {
	return (
		<div className="bg-hero-image text-white py-20">
			<div className="container mx-auto text-center">
				<h1 className="text-3xl leading-relaxed font-semibold text-center text-transparent mr-auto md:mx-auto bg-clip-text bg-gradient-to-r text-white">
					{" "}
					RHX{" "}
				</h1>
				<h2 className="relative text-5xl md:text-6xl md:leading-tight font-bold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r text-white mt-2 mb-8">
					Empower your career with us
				</h2>
				<h3 className="text-xl md:text-2xl leading-relaxed text-gray-400 text-left md:text-center w-full max-w-[49rem]">
					{" "}
					Discover a new way to connect with potential companies.
					<span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
						That will boost you career
					</span>
					, Fast, easy, and intuitive.
				</h3>
			</div>
		</div>
	);
};

export default Hero;
