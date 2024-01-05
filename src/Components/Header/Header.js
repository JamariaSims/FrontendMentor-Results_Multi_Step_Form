import React, { Component } from "react";
import "./Header.css";
export default class Header extends Component {
	render() {
		return (
			<>
				{this.props.state.currentStep === 1 ? (
					<nav className="Header">
						<h1>Personal Info</h1>
						<p>Please provide your name, email address, and phone number.</p>
					</nav>
				) : this.props.state.currentStep === 2 ? (
					<nav className="Header">
						<h1>Select your plan</h1>
						<p>You have the option of monthly or yearly billing.</p>
					</nav>
				) : this.props.state.currentStep === 3 ? (
					<nav className="Header">
						<h1>Pick add-ons</h1>
						<p>Add-ons help enhance your gaming experience.</p>
					</nav>
				) : this.props.state.currentStep === 4 ? (
					<nav className="Header">
						<h1>Finishing up</h1>
						<p>Double-check everything looks OK before confirming.</p>
					</nav>
				) : (
					<></>
				)}
			</>
		);
	}
}
