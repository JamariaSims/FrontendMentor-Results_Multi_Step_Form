import React, { Component } from "react";
import "./Navigation.css";
export default class Navigation extends Component {
	render() {
		return (
			<section className="Navigation" data-testid="Navigation">
				<div className="Container">
					<div className="Plan">
						<p id="Step1" className="Step Select-Step">
							1
						</p>
						<section>
							<p className="StepName">STEP 1</p>
							<h2>YOUR INFO</h2>
						</section>
					</div>
					<div className="Plan">
						<p id="Step2" className="Step">
							2
						</p>
						<section>
							<p className="StepName">STEP 2</p>
							<h2>SELECT PLAN</h2>
						</section>
					</div>
					<div className="Plan">
						<p id="Step3" className="Step">
							3
						</p>
						<section>
							<p className="StepName">STEP 3</p>
							<h2>ADD-ONS</h2>
						</section>
					</div>
					<div className="Plan">
						<p id="Step4" className="Step">
							4
						</p>
						<section>
							<p className="StepName">STEP 4</p>
							<h2>SUMMARY</h2>
						</section>
					</div>
				</div>
			</section>
		);
	}
}
