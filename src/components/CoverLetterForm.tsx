import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehype from "rehype-raw";
import documentation from "../assets/img/documentation.png";
import Input from "./shared/Input";
import Button from "./shared/Button";
import TextArea from "./shared/TextArea";
import styled from "styled-components";
import { useAuth } from "../context/AuthProvider";
import { apiFetch } from "../lib/api";

const supabase = createClient(
	"https://fcglhscwklxxhveqgaef.supabase.co",
	"edcca5f5ed07b2898336a315d493a9dbe69a675fb40ec5fc35e5a837ad69e2b3"
);

const Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: black;
	padding: 1.25rem;
	border-radius: 0.5rem;
	width: 80%;
`;

// Styled components
const LoadingContainer = styled.div`
	width: 100%;
	padding-top: 24px;
	@media (min-width: 768px) {
		width: 50%;
		padding-top: 0;
	}
`;

const StyledImage = styled.img`
	max-width: 100%;
	border-radius: 0.5rem;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
	transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg)
		rotate(2deg);
`;

const LoadingSpinner = styled.div`
	width: 4rem;
	height: 4rem;
	border-top: 4px solid #3182ce; // This is the tailwindcss blue-500 color
	border-radius: 100%;
	animation: spin 1s linear infinite;
`;

const CoverLetterContainer = styled.div`
	background-color: white;
	padding: 1.25rem;
	border-radius: 0.5rem;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	z-index: 10;
	width: 80%;
`;

const CoverLetterTitle = styled.h2`
	font-size: 1.25rem; // Equivalent to text-1xl in TailwindCSS
	font-weight: bold;
	margin-bottom: 1rem;
	color: black;
`;

const H1 = styled.h1`
	font-size: 1.25rem; // Equivalent to text-1xl in TailwindCSS
	font-weight: bold;
	margin-bottom: 1rem;
	color: white;
`;

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

	const { session }: any = useAuth();

	const [submissionStatus, setSubmissionStatus] = useState("none");

	const handleSubmit = async (e: React.ChangeEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!validate()) return;

		console.log("Submitting form data...");
		setIsCoverLetterLoading(true);
		setIsFormSubmitted(true);
		try {
			console.log(session);

			const response = await apiFetch(
				"http://localhost:5001/api/cover-letter",
				"POST",
				formData,
				{
					"x-auth-token": session.access_token,
				}
			);

			console.log(response);

			if (response.status !== 200) {
				console.error("Failed to submit form data", response?.statusText);
				setSubmissionStatus("failure");
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			setCoverLetter(response.message);
			console.log("Form data submitted successfully");
			setIsCoverLetterLoading(false);
			setSubmissionStatus("success");
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

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(coverLetter);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	const nextStage = () => setStage(stage + 1);
	const prevStage = () => setStage(stage - 1);

	const prevStageCoverLetter = () => {
		setIsFormSubmitted(false);
		setStage(1);
	};

	const CoverLetter = ({ text }) => {
		return <div style={{ whiteSpace: "pre-line" }}>{text}</div>;
	};

	const renderCoverLetter = () => {
		return isCoverLetterLoading ? (
			<>
				<LoadingContainer>
					<StyledImage alt="..." src={documentation} />
				</LoadingContainer>
				<LoadingSpinner />
			</>
		) : (
			<CoverLetterContainer>
				<CoverLetterTitle> Cover Letter </CoverLetterTitle>
				<CoverLetter text={coverLetter} />
				<Button handleSubmit={prevStageCoverLetter} description="Back" />
				<Button handleSubmit={copyToClipboard} description="Copy" />
			</CoverLetterContainer>
		);
	};

	return isFormSubmitted ? (
		renderCoverLetter()
	) : (
		<Form>
			<H1>Create Cover Letter</H1>
			{stage === 1 && (
				<div>
					<h2 className="text-1xl font-bold mb-4 text-white">
						{" "}
						Stage 1 - Personal Details{" "}
					</h2>
					<Input
						type="text"
						name="name"
						label="Full Name"
						value={formData.name}
						onChange={handleInputChange}
						error={errors}
					/>
					<Input
						type="text"
						name="address"
						value={formData.address}
						label={"Address"}
						onChange={handleInputChange}
						error={errors}
					/>
					<Input
						type="text"
						name="phone"
						value={formData.phone}
						label={"Phone"}
						onChange={handleInputChange}
						error={errors}
					/>
					<Input
						type="text"
						name="email"
						value={formData.email}
						label={"Email"}
						onChange={handleInputChange}
						error={errors}
					/>
					<Input
						type="text"
						name="linkedin"
						label={"Linkedin"}
						value={formData.linkedin}
						onChange={handleInputChange}
						error={errors}
					/>
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
					<Input
						type="text"
						name="strongPoints"
						value={formData.strongPoints}
						onChange={handleInputChange}
						label={"Strong Points"}
						error={errors}
					/>
					<label className="block mb-2 text-white">Paste CV</label>
					<TextArea
						name="pasteCV"
						value={formData.pasteCV}
						onChange={handleInputChange}
					/>
					<Button handleSubmit={prevStage} description="back" />
					<Button handleSubmit={nextStage} description="next" />
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
					<Button handleSubmit={prevStage} description="back" />
					<Button handleSubmit={handleSubmit} description="submit" />
				</div>
			)}
		</Form>
	);
};

export default CoverLetterForm;
