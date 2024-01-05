import React, { Component } from "react";
import "./Step2.css";
import Plans from "../../Components/Plans/Plans";

export default class Step2 extends Component {
	togglePlan(selectedPlan) {
		this.props.setState({ currentPlan: selectedPlan });
	}
	toggleSubscription() {
		if (this.props.state.subscription === 0) {
			this.props.setState({ subscription: 1 });
		} else {
			this.props.setState({ subscription: 0 });
		}
	}
	render() {
		return (
			<div className="SelectPlan -Container-">
				<nav>
					<Plans
						state={this.props.state}
						setState={this.props.setState.bind(this)}
					/>
				</nav>
				<section className="SliderContainer">
					{this.props.state.subscription === 0 ? (
						<label
							htmlFor="SubscriptionSlider"
							id="Selected-Subscription"
							data-testid="Selected-Subscription"
						>
							Monthly
						</label>
					) : (
						<label htmlFor="SubscriptionSlider">Monthly</label>
					)}

					<input
						id="SubscriptionSlider"
						data-testid="slider"
						type="range"
						onChange={this.toggleSubscription.bind(this)}
						min={0}
						max={1}
						value={this.props.state.subscription}
					/>
					{this.props.state.subscription === 1 ? (
						<label
							htmlFor="SubscriptionSlider"
							id="Selected-Subscription"
							data-testid="Selected-Subscription"
						>
							Yearly
						</label>
					) : (
						<label htmlFor="SubscriptionSlider">Yearly</label>
					)}
				</section>
			</div>
		);
	}
}
