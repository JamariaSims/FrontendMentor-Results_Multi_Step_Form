import React, { Component } from "react";
import "./Step5.css";

export default class Step5 extends Component {
	render() {
		return (
			<div className="ThankYou -Container-">
				<div className="Info">
					<img src={require("../../Assets/Icon4.png")} alt="Thank you" />
					<h1>Thank you!</h1>
					<p>
						Thanks for confirming your subscription! We hope you have fun using
						our platform. If you ever need support, please feel free to email us
						at support@loremgaming.com.
					</p>
				</div>
			</div>
		);
	}
}
