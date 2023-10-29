import { Link } from "react-router-dom";
import documentation from "../assets/img/documentation.png";

const Hero = () => {
	return (
		<div className="relative pt-16 pb-32 flex items-center justify-center min-h-screen-75">
			<div className="absolute top-0 w-full h-full bg-cover">
				<span
					id="blackOverlay"
					className="w-full h-full absolute opacity-100 bg-blueGray-700"
				></span>
			</div>
			<div className="container relative mx-auto">
				<div className="flex flex-wrap items-center justify-center">
					<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
						<div className="container mx-auto">
							<h2 className="relative text-5xl md:text-6xl md:leading-tight font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r text-white mt-2 mb-8">
								Empower your career <br /> with us
							</h2>
							<h3 className="text-xl md:text-2xl leading-relaxed text-center w-full text-white max-w-[49rem]">
								Discover a new way to connect with potential companies.
								<span className="text-transparent font-semibold bg-clip-text">
									That will boost you career
								</span>
								, Fast, easy, and intuitive.
							</h3>
							<div className="text-center mt-8">
								<Link to="/register"
									className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"								   
								>
									Register
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full md:w-6/12 px-4 pt-24 md:pt-0 lg:block">
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
