import React, { Component } from "react";
import "./Step4.css";
export default class Step4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totalPrice: 0,
		};
	}

	componentDidMount() {
		const planPrice = document.getElementById("Price-Plan");
		const addOn1Price = document.getElementById("Price-addOn1");
		const addOn2Price = document.getElementById("Price-addOn2");
		const addOn3Price = document.getElementById("Price-addOn3");
		let total = 0;
		if (this.props.state.currentPlan === "Arcade") {
			if (this.props.state.subscription === 0) {
				planPrice.innerHTML = "$9/mo";
				total += 9;
			} else {
				planPrice.innerHTML = "$99/yr";
				total += 99;
			}
		}
		if (this.props.state.currentPlan === "Advance") {
			if (this.props.state.subscription === 0) {
				planPrice.innerHTML = "$12/mo";
				total += 12;
			} else {
				planPrice.innerHTML = "$120/yr";
				total += 120;
			}
		}
		if (this.props.state.currentPlan === "Pro") {
			if (this.props.state.subscription === 0) {
				planPrice.innerHTML = "$15/mo";
				total += 15;
			} else {
				planPrice.innerHTML = "$150/yr";
				total += 150;
			}
		}
		if (this.props.state.addOns.onlineService) {
			if (this.props.state.subscription === 0) {
				addOn1Price.innerHTML = "+$1/mo";
				total += 1;
			} else {
				addOn1Price.innerHTML = "+$10/yr";
				total += 10;
			}
		}
		if (this.props.state.addOns.largerStorage) {
			if (this.props.state.subscription === 0) {
				addOn2Price.innerHTML = "+$2/mo";
				total += 2;
			} else {
				addOn2Price.innerHTML = "+$20/yr";
				total += 20;
			}
		}
		if (this.props.state.addOns.customizable) {
			if (this.props.state.subscription === 0) {
				addOn3Price.innerHTML = "+$2/mo";
				total += 2;
			} else {
				addOn3Price.innerHTML = "+$20/yr";
				total += 20;
			}
		}
		this.setState({ totalPrice: total });
	}
	changePlan() {
		this.props.setState({
			currentStep: 2,
		});
	}
	render() {
		return (
			<div className="Summary -Container-">
				<div className="SummaryContainer">
					<header>
						<section>
							<h2>
								{this.props.state.currentPlan}(
								{this.props.state.subscription !== 0 ? "Yearly" : "Monthly"})
							</h2>
							<p onClick={this.changePlan.bind(this)}>Change</p>
						</section>
						<p className="Price" id="Price-Plan">
							$9/mo
						</p>
					</header>
					<hr />
					<ol>
						{Object.keys(this.props.state.addOns).map((key, index) => {
							if (this.props.state.addOns[key]) {
								if (key === "onlineService") {
									return (
										<li key={index}>
											<p>Online service</p>
											<span id="Price-addOn1">+$1/mo</span>
										</li>
									);
								}
								if (key === "largerStorage") {
									return (
										<li key={index}>
											<p>Larger storage</p>
											<span id="Price-addOn2">+$2/mo</span>
										</li>
									);
								}
								if (key === "customizable") {
									return (
										<li key={index}>
											<p>Customizable profile</p>
											<span id="Price-addOn3">+$2/mo</span>
										</li>
									);
								}
							}
							return null;
						})}
					</ol>
				</div>
				<div className="Total">
					<p>Total (per month)</p>
					{this.props.state.subscription === 0 ? (
						<h3 id="Price-Total">{"+$" + this.state.totalPrice + "/mo"}</h3>
					) : (
						<h3 id="Price-Total">{"+$" + this.state.totalPrice + "/yr"}</h3>
					)}
				</div>
			</div>
		);
	}
}
