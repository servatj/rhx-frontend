import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import BannerHome from "./BannerHome";
import styled from "styled-components";
import Button from "./shared/Button";

const size = {
  mobile: '768px' // example breakpoint for mobile devices
}

const Section = styled.section`
	padding-bottom: 5rem; /* 20px */
	background-color: #f8fafc; /* bg-blueGray-200 */
	margin-top: -5rem; /* -mt-20 */
`;

const Container = styled.div`
	max-width: 1200px; /* Adjust this value as required */
	padding-right: 1rem;
	padding-left: 1rem;
	margin-right: auto;
	margin-left: auto;
`;

const FlexWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const FeatureWrapper = styled.div`
	padding-top: 1.5rem; /* pt-6 */
	padding-top: 3rem; /* lg:pt-12 */
	padding: 1rem; /* px-4 */
	text-align: center;
	display: flex;
	padding: 2rem;
	flex-direction: column;

	@media (min-width: ${size.mobile}) {
    flex-direction: row; // Line up cards horizontally on desktop
    justify-content: space-between; // This spreads out the cards evenly
  }
`;

const FeatureCard = styled.div`
	position: relative;
	flex-direction: column;
	min-width: 0;
	background-color: #ffffff; /* bg-white */
	width: 100%;
	margin: 1rem;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	border-radius: 0.5rem; /* rounded-lg */

	@media (min-width: ${size.mobile}) {
    flex-direction: row; // Line up cards horizontally on desktop
    justify-content: space-between; // This spreads out the cards evenly
  }
`;

const CardContent = styled.div`
	padding: 1rem; /* px-4 */
	padding-top: 1.25rem; /* py-5 */
	flex: 1; /* flex-auto */
`;

const IconCircle = styled.div`
	color: white; /* text-white */
	padding: 0.75rem; /* p-3 */
	text-align: center;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 3rem; /* w-12 */
	height: 3rem; /* h-12 */
	margin-bottom: 1.25rem; /* mb-5 */
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	border-radius: 9999px; /* rounded-full */
	background-color: #f87171; /* bg-red-400 */
`;

const IconCircle2 = styled.div`
	color: white; /* text-white */
	padding: 0.75rem; /* p-3 */
	text-align: center;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 3rem; /* w-12 */
	height: 3rem; /* h-12 */
	margin-bottom: 1.25rem; /* mb-5 */
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	border-radius: 9999px; /* rounded-full */
	background-color: #007bff; /* bg-red-400 */
`;

const IconCircle3 = styled.div`
	color: white; /* text-white */
	padding: 0.75rem; /* p-3 */
	text-align: center;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 3rem; /* w-12 */
	height: 3rem; /* h-12 */
	margin-bottom: 1.25rem; /* mb-5 */
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	border-radius: 9999px; /* rounded-full */
	background-color: rgb(52 211 153); /* bg-red-400 */
`;

const Title = styled.h6`
	font-size: 1.25rem; /* text-xl */
	font-weight: 600; /* font-semibold */
`;

const Description = styled.p`
	margin-top: 0.5rem; /* mt-2 */
	margin-bottom: 1rem; /* mb-4 */
	color: #6b7280; /* text-blueGray-500 */
`;

const Features = () => {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleEmailInputChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { error } = await supabase.from("subscribers").insert({ email });

		if (error) {
			console.error("There was an error inserting the email", error);
		} else {
			console.log("Email inserted");
			setEmail("");
			setSubmitted(true);
		}
	};

	return (
		<Section>
			<Container>
				<FlexWrapper>
					<FeatureWrapper>
						<FeatureCard>
							<CardContent>
								<IconCircle>
									<i className="fas fa-award"></i>
								</IconCircle>
								<Title>AI Cover Letter</Title>
								<Description>
									Create a cover letter with our AI and get the job you want.
									High-quality cover letters.
								</Description>
							</CardContent>
						</FeatureCard>
						<FeatureCard>
							<CardContent>
								<IconCircle2>
									<i className="fas fa-retweet"></i>
								</IconCircle2>
								<Title>CV Enhancer</Title>
								<Description>
									Increase your odds of getting hired with our CV enhancer. Get
									a perfect CV in minutes.
								</Description>
							</CardContent>
						</FeatureCard>
						<FeatureCard>
							<CardContent>
								<IconCircle3>
									<i className="fas fa-award"></i>
								</IconCircle3>
								<Title>Profile Generated Picture</Title>
								<Description>
									Profile Generated Picture Get a perfect profile picture for
									your CV and LinkedIn.
								</Description>
							</CardContent>
						</FeatureCard>
					</FeatureWrapper>
				</FlexWrapper>

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
							hard to make create tools that will help you not just to get a job
							now but help you with your career path.
						</p>
						<p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
							We are really excited to share with you our new features. Stay
							tuned!
						</p>
						{submitted ? (
							<div className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
								Thank you for subscribing!
							</div>
						) : (
							<>
								<input
									onChange={handleEmailInputChange}
									type="email"
									placeholder="Enter your email"
									className="border-2 border-gray-300 rounded-lg p-2 w-full"
								/>
								<Button
								  description="Notify me"
									onClick={handleSubmit}
								>
								</Button>
							</>
						)}
					</div>

					<BannerHome />
				</div>
			</Container>
		</Section>
	);
};

export default Features;
