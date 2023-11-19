import Card from "./shared/Card";
import styled from "styled-components";

const Top = styled.div`
    display: flex;  
    height: 100px;
    width: 100%;
    justify-content: center;
    font-size: 32px;
    color: white;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

function PricingPlans() {
	return (
		<div>
            <Top>
                <h1>
                    Find a plan to power your personal brand
                </h1>
            </Top>
			<CardContainer>
				<Card
					title="Free for life"
					features={[
						"10 cover letters per month",
						"5 exact match recomendatiosn",
					]}
                    price={0}
				/>
                <Card
                    title="Pro"
                    features={[
                        "Everything in Free For live, plus higher limits and team features",
                        "Use any premium feature first",
                        "More Functions (Serverless, Edge)",
                    ]}
                    price={20}
                />
                <Card
                    title={"Enterprise"}
                    features={[
                        "Everything in Pro, plus custom onboarding and support",
                        "Dedicated account manager",
                        "Custom SLAs",
                    ]}
                    price={50}
                />
			</CardContainer>
		</div>
	);
}

export default PricingPlans;
