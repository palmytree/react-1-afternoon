import React, { Component } from 'react';

class FilterStrings extends Component {
	constructor() {
		super();
		this.state = {
			unFilteredArray: [
				'commodities',
				'universal',
				'difficult',
				'announces',
				'norwegian',
				'hydrocodone',
				'participate',
				'negotiation',
				'principle',
				'thereafter',
			],
			userInput: '',
			filteredArray: [],
		};
	}
	updateInput(value) {
		this.setState({
			userInput: value,
		});
	}
	solve() {
		const { unFilteredArray, userInput } = this.state;
		const output = unFilteredArray.filter(word => word.includes(userInput));
		this.setState({
			filteredArray: output,
			userInput: '',
		});
	}
	render() {
		return (
			<div className='puzzleBox filterStringPB'>
				<h4>Filter String</h4>
				<span className='puzzleText'>
					Unfiltered: <br/>
					{this.state.unFilteredArray.map((w, i) =>
						i < this.state.unFilteredArray.length - 1 ? `${w}, ` : `${w}`
					)}
				</span>
				<input
					placeholder='String to filter...'
					value={this.state.userInput}
					type='text'
					className='inputLine'
					onChange={e => this.updateInput(e.target.value)}
				/>
				<button className='confirmationButton' onClick={() => this.solve()}>
					Filter
				</button>
				<span className='resultsBox filterStringRB'>
					Filtered: <br/>
					{this.state.filteredArray.map((w, i) =>
						i < this.state.filteredArray.length - 1 ? `${w}, ` : `${w}`
					)}
				</span>
			</div>
		);
	}
}

export default FilterStrings;
