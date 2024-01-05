import React, { Component } from "react";
import Plan from "../Plan/Plan";

export default class Plans extends Component {
	constructor(props) {
		super(props);
		this.state = {
			AvailablePlans: [
				{
					img: require("../../Assets/Icon1.png"),
					name: "Arcade",
					price1: "$9/mo",
					price2: "$90/yr",
				},
				{
					img: require("../../Assets/Icon2.png"),
					name: "Advance",
					price1: "$12/mo",
					price2: "$120/yr",
				},
				{
					img: require("../../Assets/Icon3.png"),
					name: "Pro",
					price1: "$15/mo",
					price2: "$150/yr",
				},
			],
		};
	}
	render() {
		return (
			<nav className="AddonsContainer">
				{this.state.AvailablePlans.map((plan, index) => (
					<Plan
						key={index}
						plan={plan}
						state={this.props.state}
						setState={this.props.setState.bind(this)}
					/>
				))}
			</nav>
		);
	}
}
