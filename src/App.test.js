import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Step2 from "./Views/Step2/Step2";

describe("App", () => {
	test("renders app", () => {
		render(<App />);
	});
	test("renders navigation", () => {
		render(<App />);
		const linkElement = screen.queryByTestId("Navigation");
		expect(linkElement).toBeInTheDocument();
	});
	test("renders walled garden", () => {
		render(<App />);
		const linkElement = screen.queryByTestId("WalledGarden");
		expect(linkElement).toBeInTheDocument();
	});
	test("renders next button", () => {
		render(<App />);
		const linkElement = screen.getByText("Next Step");
		expect(linkElement).toBeInTheDocument();
	});
});
describe("Step 1", () => {
	test("renders correct heading for step 1", () => {
		render(<App />);
		const linkElement = screen.getByText("Personal Info");
		expect(linkElement).toBeInTheDocument();
	});
	test("renders three errors if no field have data", () => {
		render(<App />);
		const linkElement = screen.getByText("Next Step");
		fireEvent.click(linkElement);
		const errorElement = screen.getAllByText("This field is required");
		for (let i = 0; i < errorElement.length; i++) {
			expect(errorElement[i]).toBeInTheDocument();
		}
	});
	test("renders name correctly to state", async () => {
		render(<App />);
		const linkElement = screen.getByPlaceholderText(/e.g. Stephen King/i);
		fireEvent.change(linkElement, { target: { value: "Jamaria Sims" } });
		expect(linkElement).toHaveValue("Jamaria Sims");
	});
	test("renders email correctly to state", async () => {
		render(<App />);
		const linkElement = screen.getByPlaceholderText(
			/e.g. stephenking@lorem.com/i
		);
		fireEvent.change(linkElement, {
			target: { value: "Jamariaxsims@gmail.com" },
		});
		expect(linkElement).toHaveValue("Jamariaxsims@gmail.com");
	});
	test("renders phone number correctly to state", async () => {
		render(<App />);
		const linkElement = screen.getByPlaceholderText("e.g. +1 234 567 890");
		fireEvent.change(linkElement, {
			target: { value: "1234567890" },
		});
		expect(linkElement).toHaveValue("1234567890");
	});
});
describe("Step 2", () => {
	test("renders correct heading for step 2", () => {
		render(<App />);
		const name = screen.getByPlaceholderText(/e.g. Stephen King/i);
		fireEvent.change(name, {
			target: { value: "Jamaria Sims" },
		});
		const email = screen.getByPlaceholderText(/e.g. stephenking@lorem.com/i);
		fireEvent.change(email, {
			target: { value: "JamariaxSims@gmail.com" },
		});
		const phone = screen.getByPlaceholderText("e.g. +1 234 567 890");
		fireEvent.change(phone, {
			target: { value: "1234567890" },
		});
		const button = screen.getByText("Next Step");
		fireEvent.click(button);

		const linkElement = screen.getByText("Select your plan");
		expect(linkElement).toBeInTheDocument();
	});
	test("renders 3 plans", async () => {
		render(<App />);
		const name = screen.getByPlaceholderText(/e.g. Stephen King/i);
		fireEvent.change(name, {
			target: { value: "Jamaria Sims" },
		});
		const email = screen.getByPlaceholderText(/e.g. stephenking@lorem.com/i);
		fireEvent.change(email, {
			target: { value: "JamariaxSims@gmail.com" },
		});
		const phone = screen.getByPlaceholderText("e.g. +1 234 567 890");
		fireEvent.change(phone, {
			target: { value: "1234567890" },
		});
		const button = screen.getByText("Next Step");
		fireEvent.click(button);

		const linkElements = screen.getAllByTestId("Plan");
		linkElements.forEach((linkElement) =>
			expect(linkElement).toBeInTheDocument()
		);
	});
	test("renders an selected  plan", async () => {
		render(<App />);
		const name = screen.getByPlaceholderText(/e.g. Stephen King/i);
		fireEvent.change(name, {
			target: { value: "Jamaria Sims" },
		});
		const email = screen.getByPlaceholderText(/e.g. stephenking@lorem.com/i);
		fireEvent.change(email, {
			target: { value: "JamariaxSims@gmail.com" },
		});
		const phone = screen.getByPlaceholderText("e.g. +1 234 567 890");
		fireEvent.change(phone, {
			target: { value: "1234567890" },
		});
		const button = screen.getByText("Next Step");
		fireEvent.click(button);
		const linkElement = screen.getByTestId("Selected-Plan");
		expect(linkElement).toBeInTheDocument();
	});
	test("renders correct subscription to state", async () => {
		render(<App />);
		const name = screen.getByPlaceholderText(/e.g. Stephen King/i);
		fireEvent.change(name, {
			target: { value: "Jamaria Sims" },
		});
		const email = screen.getByPlaceholderText(/e.g. stephenking@lorem.com/i);
		fireEvent.change(email, {
			target: { value: "JamariaxSims@gmail.com" },
		});
		const phone = screen.getByPlaceholderText("e.g. +1 234 567 890");
		fireEvent.change(phone, {
			target: { value: "1234567890" },
		});
		const button = screen.getByText("Next Step");
		fireEvent.click(button);

		const linkElement = screen.getByTestId("slider");
		const targetElement = screen.getByTestId("Selected-Subscription");
		expect(linkElement.value).toBe("0");
		expect(targetElement).toHaveTextContent("Monthly");
	});
});
describe("Step 3", () => {});
describe("Step 4", () => {});
describe("Step 5", () => {});
