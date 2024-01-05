import React, { Component } from "react";
import AddOn from "../AddOn/AddOn";

export default class AddOns extends Component {
	constructor(props) {
		super(props);
		this.state = {
			AvailableAddOns: [
				{
					tagName: "onlineService",
					name: "Online Service",
					description: "Access to multiplayer games",
					monthlyPrice: "+$1/mo",
					yearlyPrice: "+10/yr",
				},
				{
					tagName: "largerStorage",
					name: "Larger Storage",
					description: "Extra 1TB of cloud save",
					monthlyPrice: "+$2/mo",
					yearlyPrice: "+20/yr",
				},
				{
					tagName: "customizable",
					name: "Customizable Profile",
					description: "Custom theme on your profile",
					monthlyPrice: "+$2/mo",
					yearlyPrice: "+20/yr",
				},
			],
		};
	}
	render() {
		return (
			<nav>
				{this.state.AvailableAddOns.map((addOn, index) => (
					<AddOn
						key={index}
						addOn={addOn}
						state={this.props.state}
						setState={this.props.setState.bind(this)}
					/>
				))}
			</nav>
		);
	}
}
