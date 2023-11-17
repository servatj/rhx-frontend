import { useEffect, useState } from "react";
import Container from "../components/Container";
import FeaturesProfile from "../components/FeaturesProfile";
import Layout from "../components/Layout";

const ProfilePage: React.FC = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<Layout>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        
      </div>
			<section className="pb-20 bg-blueGray-200 -mt-24">
				{isVisible && (
					<h1 className="transition-opacity duration-500 pl-2">
						Welcome Back 👋
					</h1>
				)}

				<div className={`flex justify-center items-center`}>
					<FeaturesProfile />
				</div>
			</section>
		</Layout>
	);
};

export default ProfilePage;
