import { Link } from "react-router-dom";

const Features = () => {
	return (
		<section className="pb-20 bg-blueGray-200 -mt-20">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap">
					<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
							<div className="px-4 py-5 flex-auto">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
									<i className="fas fa-award"></i>
								</div>
								<h6 className="text-xl font-semibold">AI Cover Letter</h6>
								<p className="mt-2 mb-4 text-blueGray-500">
                  Create a cover letter with our AI and get the job you want.
                  High quality cover letters in minutes.
								</p>
							</div>
						</div>
					</div>

					<div className="w-full md:w-4/12 px-4 text-center">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
							<div className="px-4 py-5 flex-auto">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
									<i className="fas fa-retweet"></i>
								</div>
								<h6 className="text-xl font-semibold">CV Enhancer</h6>
								<p className="mt-2 mb-4 text-blueGray-500">
                  Increase your odds of getting hired with our CV enhancer.
                  Get a perfect CV in minutes.
								</p>
							</div>
						</div>
					</div>

					<div className="pt-6 w-full md:w-4/12 px-4 text-center">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
							<div className="px-4 py-5 flex-auto">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
									<i className="fas fa-fingerprint"></i>
								</div>
								<h6 className="text-xl font-semibold">Profile Generated Picture</h6>
								<p className="mt-2 mb-4 text-blueGray-500">
                  Get a perfect profile picture for your CV and LinkedIn.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap items-center mt-32">
					<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
						<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
							<i className="fas fa-user-friends text-xl"></i>
						</div>
						<h3 className="text-3xl mb-2 font-semibold leading-normal">
						  More features are coming soon!
						</h3>
						<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
							Our mission is to help you get the job you want. We are working
              hard to make create tools that will help you not just to get a job now but
              help you with your career path.
						</p>
						<p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
							We are really excited to share with you our new features. Stay tuned!
						</p>
            <input type="email" placeholder="Enter your email" className="border-2 border-gray-300 rounded-lg p-2 w-full" />
            <button className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 mt-4">Notify me</button>
					</div>

					<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
							<img
								alt="..."
								src="https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?auto=format&fit=crop&q=80&w=3132&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								className="w-full align-middle rounded-t-lg"
							/>
							<blockquote className="relative p-8 mb-4">
								<svg
									preserveAspectRatio="none"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 583 95"
									className="absolute left-0 w-full block h-95-px -top-94-px"
								>
									<polygon
										points="-30,95 583,95 583,65"
										className="text-lightBlue-500 fill-current"
									></polygon>
								</svg>
								<h4 className="text-xl font-bold text-white">
									Top Notch Cover Letter
								</h4>
								<p className="text-md font-light mt-2 text-white">
                  "Thanks to levely I have all the tools needed to boost my career"
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
