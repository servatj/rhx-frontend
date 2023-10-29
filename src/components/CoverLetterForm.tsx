import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehype from "rehype-raw";
import documentation from "../assets/img/documentation.png";

const supabase = createClient(
	"https://fcglhscwklxxhveqgaef.supabase.co",
	"edcca5f5ed07b2898336a315d493a9dbe69a675fb40ec5fc35e5a837ad69e2b3"
);

const CoverLetterForm = () => {
	const [stage, setStage] = useState(1);
	const [coverLetter, setCoverLetter] = useState("");
	const [isCoverLetterLoading, setIsCoverLetterLoading] = useState(true);
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState({
		name: "",
		address: "",
		phone: "",
		email: "",
		linkedin: "",
		strongPoints: "",
		pasteCV: "",
	});

	const [submissionStatus, setSubmissionStatus] = useState("none");

	const handleSubmit = async () => {
		if (!validate()) return;

		console.log("Submitting form data...");
		setIsCoverLetterLoading(true);
		setIsFormSubmitted(true);
		try {
			const response = await fetch("https://api.levely.pro/api/cover-letter", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: formData.name,
				}),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const responseData = await response.json();
			setCoverLetter(responseData.message);
			if (response && response.ok) {
				console.log("Form data submitted successfully");
				setIsCoverLetterLoading(false);
				setSubmissionStatus("success");
			} else {
				console.error("Failed to submit form data", response?.statusText);
				setSubmissionStatus("failure");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const validate = () => {
		const newErrors = {};

		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.address) newErrors.address = "Address is required";
		if (!formData.phone) newErrors.phone = "Phone is required";
		if (!formData.email) newErrors.email = "Email is required";
		if (!formData.linkedin) newErrors.linkedin = "Linkedin is required";
		if (!formData.strongPoints)
			newErrors.strongPoints = "Strong Points is required";
		if (!formData.pasteCV) newErrors.pasteCV = "CV is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0; // returns true if no errors
	};

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const nextStage = () => setStage(stage + 1);
	const prevStage = () => setStage(stage - 1);

	const CoverLetter = ({ text }) => {
		return <div style={{ whiteSpace: "pre-line" }}>{text}</div>;
	};

	const renderCoverLetter = () => {
		return isCoverLetterLoading ? (
			<>
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
				<div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
			</>
		) : (
			<div className="container mx-auto bg-white p-5 rounded shadow">
				<h2 className="text-1xl font-bold mb-4 text-black"> Cover Letter </h2>

				<CoverLetter text={coverLetter} />

				<button
					onClick={prevStage}
					className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
				>
					Back
				</button>
				<button
					onClick={() => handleSubmit()}
					className="bg-green-500 text-white mt-10 px-4 py-2 rounded"
				>
					Re - Submit
				</button>
			</div>
		);
	};

	return isFormSubmitted ? (
		renderCoverLetter()
	) : (
		<div className="container mx-auto bg-black p-8 rounded shadow">
			<h1 className="text-2xl font-bold mb-4 text-white">
				Create Cover Letter
			</h1>
			{stage === 1 && (
				<div>
					<h2 className="text-1xl font-bold mb-4 text-white">
						{" "}
						Stage 1 - Personal Details{" "}
					</h2>
					<label className="block mb-2 text-white">Full Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className="p-2 border rounded mb-4 w-full"
					/>
					{errors.name && <p className="text-red-500">{errors.name}</p>}
					<label className="block mb-2 text-white">Address</label>
					<input
						type="text"
						name="address"
						value={formData.address}
						onChange={handleInputChange}
						className="p-2 border rounded mb-4 w-full"
					/>
					{errors.address && <p className="text-red-500">{errors.address}</p>}
					<label className="block mb-2 text-white">Phone</label>
					<input
						type="text"
						name="phone"
						value={formData.phone}
						onChange={handleInputChange}
						className="p-2 border rounded mb-4 w-full"
					/>
					{errors.phone && <p className="text-red-500">{errors.phone}</p>}
					<label className="block mb-2 text-white">Email</label>
					<input
						type="text"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className="p-2 border rounded mb-4 w-full"
					/>
					{errors.email && <p className="text-red-500">{errors.email}</p>}
					<label className="block mb-2 text-white">Linkedin</label>
					<input
						type="text"
						name="linkedin"
						value={formData.linkedin}
						onChange={handleInputChange}
						className="p-2 border rounded mb-4 w-full"
					/>
					{errors.name && <p className="text-red-500">{errors.name}</p>}
					<button
						onClick={nextStage}
						className="bg-blueGray-700 active:bg-blueGray-600 text-white px-4 py-2 rounded"
					>
						Next
					</button>
				</div>
			)}

			{stage === 2 && (
				<div>
					<label className="block mb-2 text-white">Strong Points</label>
					<input
						type="text"
						name="strongPoints"
						value={formData.strongPoints}
						onChange={handleInputChange}
						className="p-2 border rounded mb-4 w-full"
					/>
					<label className="block mb-2 text-white">Paste CV</label>
					<textarea
						name="pasteCV"
						value={formData.pasteCV}
						onChange={handleInputChange}
						className="p-2 border rounded mb-4 w-full h-32"
					/>
					<button
						onClick={prevStage}
						className="bg-blueGray-700 active:bg-blueGray-600 text-white px-4 py-2 rounded mr-2"
					>
						Back
					</button>
					<button
						onClick={nextStage}
						className="bg-blueGray-700 active:bg-blueGray-600 text-white px-4 py-2 rounded"
					>
						Next
					</button>
				</div>
			)}

			{stage === 3 && (
				<div className="container mx-auto bg-white p-5 rounded shadow">
					<h2 className="text-1xl font-bold mb-4 text-black">
						{" "}
						Stage 3 - Submit{" "}
					</h2>
					<p className="text-black">
						Please review your details before submitting
					</p>
					<p className="text-black">Name: {formData.name}</p>
					<p className="text-black">Address: {formData.address}</p>
					<p className="text-black">Phone: {formData.phone}</p>
					<p className="text-black">Email: {formData.email}</p>
					<p className="text-black">Linkedin: {formData.linkedin}</p>
					<p className="text-black">Strong Points: {formData.strongPoints}</p>
					<p className="text-black">Paste CV: {formData.pasteCV}</p>
					<button
						onClick={prevStage}
						className="bg-blueGray-700 active:bg-blueGray-600 text-white px-4 py-2 rounded mr-2"
					>
						Back
					</button>
					<button
						onClick={() => handleSubmit()}
						className="bg-blueGray-700 active:bg-blueGray-600 text-white mt-10 px-4 py-2 rounded"
					>
						Submit
					</button>
				</div>
			)}
			{submissionStatus === "success" && (
				<div className="bg-green-500 text-white p-4 rounded mt-4">
					Form data submitted successfully!
				</div>
			)}

			{submissionStatus === "failure" && (
				<div className="bg-red-500 text-white p-4 rounded mt-4">
					There was an error submitting your data. Please try again.
				</div>
			)}
		</div>
	);
};

export default CoverLetterForm;
