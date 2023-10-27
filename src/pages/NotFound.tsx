import React from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
//import NotFoundImage from 'src/assets/notfound.jpg'; // Replace with your image path

const NotFound: React.FC = () => {
	return (
		<Layout>
			<Container className="bg-blueGray-700">
				<div className="flex flex-col items-center justify-center h-screen bg-gray-200">
					<img
						src={"/notfound.png"}
						alt="404 Not Found"
						className="w-1/2 md:w-1/3 lg:w-1/4"
					/>
					<p className="mt-4 text-xl font-semibold text-gray-700">
						Sorry, the page you're looking for doesn't exist.
					</p>
					<a
						href="/"
						className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
					>
						Go Home
					</a>
				</div>
			</Container>
		</Layout>
	);
};

export default NotFound;
