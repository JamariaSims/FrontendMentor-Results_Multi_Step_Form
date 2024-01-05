import React, { Component } from "react";
import "./WalledGarden.css";
import Step1 from "../../Views/Step1/Step1";
import Step2 from "../../Views/Step2/Step2";
import Step3 from "../../Views/Step3/Step3";
import Step4 from "../../Views/Step4/Step4";
import Step5 from "../../Views/Step5/Step5";
import Header from "../Header/Header";
import DisplayButtons from "../DisplayButtons/DisplayButtons";

export default class WalledGarden extends Component {
	render() {
		return (
			<div className="MainContainer" data-testid="WalledGarden">
				<Header state={this.props.state} />
				{this.props.state.currentStep === 1 ? (
					<Step1
						state={this.props.state}
						setState={this.props.setState.bind(this)}
					/>
				) : this.props.state.currentStep === 2 ? (
					<Step2
						state={this.props.state}
						setState={this.props.setState.bind(this)}
					/>
				) : this.props.state.currentStep === 3 ? (
					<Step3
						state={this.props.state}
						setState={this.props.setState.bind(this)}
					/>
				) : this.props.state.currentStep === 4 ? (
					<Step4
						state={this.props.state}
						setState={this.props.setState.bind(this)}
					/>
				) : (
					<Step5 />
				)}
				<DisplayButtons
					state={this.props.state}
					setState={this.props.setState.bind(this)}
				/>
			</div>
		);
	}
}
