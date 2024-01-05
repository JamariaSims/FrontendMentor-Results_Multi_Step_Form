import React, { Component } from "react";

export default class AddOn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentAddOn: this.props.addOn.tagName,
			currentStatus: this.props.state.addOns[this.props.addOn.tagName],
			currentPrice:
				this.props.state.subscription === 0
					? this.props.addOn.monthlyPrice
					: this.props.addOn.yearlyPrice,
		};
	}
	onPlanSelection(event) {
		const addOns = { ...this.props.state.addOns };
		addOns[event.target.name] = !addOns[event.target.name];
		this.props.setState({ addOns: addOns });
		this.setState({ currentStatus: addOns[event.target.name] });
	}
	render() {
		return (
			<>
				{this.state.currentStatus ? (
					<section id="Selected-AddOn">
						<input
							type="checkbox"
							name={this.props.addOn.tagName}
							checked={this.state.currentStatus}
							onChange={this.onPlanSelection.bind(this)}
						/>
						<div>
							<h2>{this.props.addOn.name}</h2>
							<p>{this.props.addOn.description}</p>
						</div>
						<p className="Price">{this.state.currentPrice}</p>
					</section>
				) : (
					<section>
						<input
							type="checkbox"
							name={this.props.addOn.tagName}
							checked={this.state.currentStatus}
							onChange={this.onPlanSelection.bind(this)}
						/>
						<div>
							<h2>{this.props.addOn.name}</h2>
							<p>{this.props.addOn.description}</p>
						</div>
						<p className="Price">{this.state.currentPrice}</p>
					</section>
				)}
			</>
		);
	}
}
