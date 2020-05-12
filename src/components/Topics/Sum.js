import React, { Component } from 'react';

class Sum extends Component {
	constructor() {
		super();
		this.state = {
			number1: 0,
			number2: 0,
			sum: null,
		};
	}
	updateNum(value, num) {
		num === 1
			? this.setState({ number1: Number(value) })
			: this.setState({ number2: Number(value) });
	}
	solve() {
		const { number1, number2 } = this.state;
		this.setState({
			sum: `${number1} + ${number2} = ${number1 + number2}`,
			number1: 0,
			number2: 0,
		});
	}
	render() {
		return (
			<div className='puzzleBox sumPB'>
				<h4>Sum</h4>
				<input
					type='number'
					placeholder='First num to add'
					className='inputLine'
					onChange={e => this.updateNum(e.target.value, 1)}
					value={this.state.number1}
				/>
				<input
					type='number'
					placeholder='Second num to add'
					className='inputLine'
					onChange={e => this.updateNum(e.target.value, 2)}
					value={this.state.number2}
				/>
				<button className='confirmationButton' onClick={() => this.solve()}>
					Calculate
				</button>
				<span className='resultsBox'>{this.state.sum}</span>
			</div>
		);
	}
}

export default Sum;
