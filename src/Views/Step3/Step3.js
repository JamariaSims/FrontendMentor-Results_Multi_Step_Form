import React, { Component } from "react";
import "./Step3.css";
import AddOns from "../../Components/AddOns/AddOns";
export default class Step3 extends Component {
	render() {
		return (
			<div className="Addons -Container-">
				<AddOns
					state={this.props.state}
					setState={this.props.setState.bind(this)}
				/>
			</div>
		);
	}
}
