import React, { Component } from "react";
import "./DisplayButtons.css";
export default class DisplayButtons extends Component {
	onPevStep() {
		this.props.setState({
			currentStep: this.props.state.currentStep - 1,
		});
		this.props.state.toggleStep(`Step${this.props.state.currentStep - 1}`);
	}
	onNextStep() {
		if (this.props.state.currentStep !== 1) {
			this.props.setState({
				currentStep: this.props.state.currentStep + 1,
			});
			if (this.props.state.currentStep === 4) {
				return;
			}
			this.props.state.toggleStep(`Step${this.props.state.currentStep + 1}`);
			return;
		}
		if (
			this.props.state.userInfo.name === "" ||
			this.props.state.userInfo.email === "" ||
			this.props.state.userInfo.phone === ""
		) {
			document.querySelectorAll("input").forEach((input) => {
				if (input.value === "") {
					input.classList.add("error");
					document
						.querySelector(`.Span-${input.name}`)
						.classList.remove("hide");
				}
			});
		} else {
			this.props.setState({
				currentStep: this.props.state.currentStep + 1,
			});
			this.props.state.toggleStep(`Step${this.props.state.currentStep + 1}`);
		}
	}
	render() {
		return (
			<div className="ButtonContainer">
				{this.props.state.currentStep === 1 ? (
					<div className="ButtonGroup">
						<button id="BTN-Holder"></button>
						<button type="submit" onClick={this.onNextStep.bind(this)}>
							Next Step
						</button>
					</div>
				) : this.props.state.currentStep === 2 ? (
					<div className="ButtonGroup">
						<button id="BTN-GoBack" onClick={this.onPevStep.bind(this)}>
							Go Back
						</button>
						<button onClick={this.onNextStep.bind(this)}>Next Step</button>
					</div>
				) : this.props.state.currentStep === 3 ? (
					<div className="ButtonGroup">
						<button id="BTN-GoBack" onClick={this.onPevStep.bind(this)}>
							Go Back
						</button>
						<button onClick={this.onNextStep.bind(this)}>Next Step</button>
					</div>
				) : this.props.state.currentStep === 4 ? (
					<div className="ButtonGroup">
						<button id="BTN-GoBack" onClick={this.onPevStep.bind(this)}>
							Go Back
						</button>
						<button id="BTN-Confirm" onClick={this.onNextStep.bind(this)}>
							Confirm
						</button>
					</div>
				) : (
					<></>
				)}
			</div>
		);
	}
}
