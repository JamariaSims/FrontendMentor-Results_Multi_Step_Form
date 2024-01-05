import React, { Component } from "react";
import "./Step1.css";
export default class Step1 extends Component {
	onInputChange(event) {
		const userInfo = { ...this.props.state.userInfo };
		userInfo[event.target.name] = event.target.value;
		this.props.setState({
			userInfo: userInfo,
		});
	}
	render() {
		return (
			<div className="CreateAccount -Container-">
				<form>
					<div>
						<label htmlFor="name">Name</label>
						<span className="hide Span-name">This field is required</span>
					</div>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="e.g. Stephen King"
						onChange={this.onInputChange.bind(this)}
						value={this.props.state.userInfo.name}
					/>
					<div>
						<label htmlFor="email">Email Address</label>
						<span className="hide Span-email">This field is required</span>
					</div>

					<input
						type="email"
						id="email"
						name="email"
						placeholder="e.g. stephenking@lorem.com"
						onChange={this.onInputChange.bind(this)}
						value={this.props.state.userInfo.email}
					/>
					<div>
						<label htmlFor="phone">Phone Number</label>
						<span className="hide Span-phone">This field is required</span>
					</div>

					<input
						type="tel"
						id="phone"
						name="phone"
						placeholder="e.g. +1 234 567 890"
						onChange={this.onInputChange.bind(this)}
						value={this.props.state.userInfo.phone}
					/>
				</form>
			</div>
		);
	}
}
