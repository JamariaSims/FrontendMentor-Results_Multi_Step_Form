import React, { Component } from "react";

export default class Plan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPlan: this.props.state.currentPlan,
			planPrice:
				this.props.state.subscription === 0
					? this.props.plan.price1
					: this.props.plan.price2,
		};
	}
	togglePlan(selectedPlan) {
		this.props.setState({ currentPlan: selectedPlan });
		this.props.setState({ summary: this.state });
	}
	render() {
		return (
			<>
				{this.props.state.currentPlan === this.props.plan.name ? (
					<div
						data-testid="Selected-Plan"
						name={this.props.plan.name}
						className={"Selected-Plan"}
						onClick={this.togglePlan.bind(this, this.props.plan.name)}
					>
						<img src={this.props.plan.img} alt="" width={"40px"} />
						<section>
							<h2>{this.props.plan.name}</h2>
							<p id="PlanPrice">
								{!this.props.state.subscription
									? this.props.plan.price1
									: this.props.plan.price2}
							</p>
							{!this.props.state.subscription ? null : (
								<p id="Promo">2 months free</p>
							)}
						</section>
					</div>
				) : (
					<div
						data-testid="Plan"
						name={this.props.plan.name}
						className={"Plan"}
						onClick={this.togglePlan.bind(this, this.props.plan.name)}
					>
						<img src={this.props.plan.img} alt="" width={"40px"} />
						<section>
							<h2>{this.props.plan.name}</h2>
							<p id="PlanPrice">
								{!this.props.state.subscription
									? this.props.plan.price1
									: this.props.plan.price2}
							</p>
							{!this.props.state.subscription ? null : (
								<p id="Promo">2 months free</p>
							)}
						</section>
					</div>
				)}
			</>
		);
	}
}
