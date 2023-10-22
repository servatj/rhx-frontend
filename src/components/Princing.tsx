import React from 'react';

function PricingPlans() {
    return (
        <div className="bg-gray-900 text-white p-10">
            <h1 className="text-4xl mb-10">Find a plan to power your personal brand</h1>

            <div className="flex justify-between">

                {/* Hobby Plan */}
                <div className="flex flex-col items-center p-8 bg-gray-800 border rounded-lg">
                    <h2 className="text-2xl mb-4">Free for life</h2>
                    <p className="text-3xl mb-4">$0</p>
                    <p className="mb-6">Start your personal brand the right way</p>
                    <ul className="mb-6">
                        <li>10 cover letters per month</li>
                        <li>5 exact match recomendatiosn</li>
                        {/* ... other features ... */}
                    </ul>
                    <button className="bg-blue-500 px-6 py-2 rounded-full">Start deploying</button>
                </div>

                {/* Pro Plan */}
                <div className="flex flex-col items-center p-8 bg-gray-700 border-2 border-blue-500 rounded-lg">
                    <h2 className="text-2xl mb-4">Pro</h2>
                    <p className="text-3xl mb-4">$20 per user / month</p>
                    <p className="mb-6">Everything in Free For live, plus higher limits and team features</p>
                    <ul className="mb-6">
                        <li>Use any premium feature first</li>
                        <li>More Functions (Serverless, Edge)</li>
                        {/* ... other features ... */}
                    </ul>
                    <button className="bg-blue-500 px-6 py-2 rounded-full">Upgrade now</button>
                </div>

                {/* Enterprise Plan */}
                <div className="flex flex-col items-center p-8 bg-gray-800 border rounded-lg">
                    <h2 className="text-2xl mb-4">Coach Plan</h2>
                    <p className="text-3xl mb-4">Custom</p>
                    <p className="mb-6">For teams with more security, support, and performance needs.</p>
                    <ul className="mb-6">
                        <li>Manage people careers</li>
                        <li>more</li>
                        {/* ... other features ... */}
                    </ul>
                    <button className="bg-blue-500 px-6 py-2 rounded-full">Contact Sales</button>
                </div>
            </div>
        </div>
    );
}

export default PricingPlans;
