import documentation from "../assets/img/documentation.png";

const Hero = () => {
	return (
		<div className="relative pt-16 pb-32 flex items-center justify-left min-h-screen-75">
			<div className="absolute top-0 w-full h-full bg-cover">
				<span
					id="blackOverlay"
					className="w-full h-full absolute opacity-100 bg-blueGray-700"
				></span>
			</div>
				<div className="container relative mx-auto">
					<div className="flex flex-wrap">
						<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto">
							<div className="container mx-auto">
								<h1 className="text-3xl leading-relaxed font-semibold text-center text-transparent mr-auto md:mx-auto bg-clip-text bg-gradient-to-r text-white">
									{" "}
								</h1>
								<h2 className="relative text-5xl md:text-6xl md:leading-tight font-bold md:text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r text-white mt-2 mb-8">
									Empower your career <br/> with us
								</h2>
								<h3 className="text-xl md:text-2xl leading-relaxed text-left md:text-center w-full text-white max-w-[49rem]">
									Discover a new way to connect with potential companies.
									<span className="text-transparent font-semibold bg-clip-text">
										That will boost you career
									</span>
									, Fast, easy, and intuitive.
								</h3>
								<div className="text-left mt-8">
									<a
										href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
										target="_blank"
										className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
									>
										Register 
									</a>
								</div>
							</div>
						</div>
            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 hidden lg:block">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={documentation}
              />
            </div>
					</div>
				</div>
			</div>
	);
};

export default Hero;
