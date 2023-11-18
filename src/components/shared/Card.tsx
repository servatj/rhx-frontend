import styled from "styled-components";
import Button from "../shared/Button";

const Card = styled.div`
	background: ${(props) => props.color};
	border-radius: 20px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	color: white;
	padding: 20px;
	width: 300px;
	font-family: "Arial", sans-serif;
	margin: 0 10px;
`;

const Title = styled.h2`
	font-size: 24px;
	margin-bottom: 20px;
	align-items: center;
	justify-content: center;
	display: flex;
`;

const Price = styled.div`
	font-size: 32px;
	margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9b59b6;
`;

const FeatureList = styled.ul`
	list-style: none;
	padding: 0;
`;

const Feature = styled.li`
	margin-bottom: 10px;
	&:before {
		content: "✔";
		margin-right: 10px;
	}
`;

const ButtonWrapper = styled.div`
  display: flex;
	margin-top: 20px;
  justify-content: center;
`;

const PricingCard = ({ title, price, features }) => (
	<Card color="black">
		<Title>{title}</Title>
		<Price>${price}/month</Price>
		<FeatureList>
			{features.map((feature: string) => (
				<Feature>{feature}</Feature>
			))}
		</FeatureList>
		<ButtonWrapper>
			<Button description="subscribe" handleSubmit={() => {}} />
		</ButtonWrapper>
	</Card>
);

export default PricingCard;
