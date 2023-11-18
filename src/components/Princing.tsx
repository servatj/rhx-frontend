import Card from "./shared/Card";

function PricingPlans() {
	return (
		<div className="bg-gray-900 text-white p-10">
			<h1 className="text-4xl mb-10">
				Find a plan to power your personal brand
			</h1>

			<div className="flex justify-between">
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
			</div>
		</div>
	);
}

export default PricingPlans;
