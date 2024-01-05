import React, { Component } from "react";
import WalledGarden from "./Components/WalledGarden/WalledGarden";
import Navigation from "./Components/Navigation/Navigation";
import "./App.css";

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			currentStep: 1,
			userInfo: { name: "", email: "", phone: "" },
			currentPlan: "Arcade",
			subscription: 0,
			prices: {},
			addOns: { onlineService: true, largerStorage: true, customizable: false },
			toggleStep(step) {
				const steps = document.querySelectorAll(".Step");
				steps.forEach((step) => {
					step.classList.remove("Select-Step");
				});
				document.getElementById(step).classList.add("Select-Step");
			},
		};
	}

	render() {
		return (
			<div className="App" data-testid="App">
				<Navigation state={this.state} setState={this.setState.bind(this)} />
				<WalledGarden state={this.state} setState={this.setState.bind(this)} />
			</div>
		);
	}
}
