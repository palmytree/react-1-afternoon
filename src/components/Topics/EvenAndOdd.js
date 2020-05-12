import React, { Component } from 'react';

class EvenAndOdd extends Component {
	constructor() {
		super();
		this.state = {
			evenArray: [],
			oddArray: [],
			userInput: '',
		};
	}
	updateInput(value) {
		this.setState({
			userInput: value,
		});
	}
	solve() {
		const { userInput } = this.state;
		const toProcess = userInput.split(',').map(n => Number(n));
		const odds = toProcess.filter(n => n % 2 !== 0 && n);
		const evens = toProcess.filter(n => n % 2 === 0);
		this.setState({
			evenArray: evens
				.sort((a, b) => a - b)
				.map((n, i) => (i < evens.length - 1 ? `${n}, ` : `${n}`)),
			oddArray: odds
				.sort((a, b) => a - b)
				.map((n, i) => (i < odds.length - 1 ? `${n}, ` : `${n}`)),
			userInput: '',
		});
	}
	render() {
		return (
			<div className='puzzleBox evenAndOddPB'>
				<h4>Evens and Odds</h4>
				<input
					type='text'
					placeholder='Enter numbers 1, 2, 3, etc...'
					className='inputLine'
					onChange={e => this.updateInput(e.target.value)}
					value={this.state.userInput}
				/>
				<button className='confirmationButton' onClick={() => this.solve()}>
					Solve
				</button>
				<span className='resultsBox'>Evens: [{this.state.evenArray}]</span>
				<span className='resultsBox'>Odds: [{this.state.oddArray}]</span>
			</div>
		);
	}
}

export default EvenAndOdd;
