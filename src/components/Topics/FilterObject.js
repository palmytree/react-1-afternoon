import React, { Component } from 'react';

class FilterObject extends Component {
	constructor() {
		super();
		this.state = {
			unFilteredArray: [
				{
					first: 'Sage',
					last: 'Bauer',
					birthday: '10/18/1895',
					email: '',
					phone: '532-715-4030',
				},
				{
					first: 'Kyra',
					last: 'Huynh',
					birthday: '',
					email: '',
					phone: '216-928-9665',
				},
				{
					first: 'Erick',
					last: 'Davila',
					birthday: '',
					email: 'Erick.Davila@completion.com',
					phone: '781-255-8533',
				},
				{
					first: 'Maliyah',
					last: 'Kirby',
					birthday: '10/24/1948',
					email: 'Maliyah.Kirby@undertake.com',
					phone: '880-254-6018',
				},
				{
					first: 'Jakob',
					last: 'Esquivel',
					birthday: '',
					email: 'Jakob.Esquivel@connectivity.com',
					phone: '561-111-1326',
				},
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
		const { userInput, unFilteredArray } = this.state;
		this.setState({
			filteredArray: unFilteredArray
				.filter(e => e[userInput])
				.map((e, i) => {
					let output = [];
					for (let key in e) {
						output = [
							...output,
							<li key={`obj-${i}-${key}`}>
								{key}: {e[key]}
							</li>,
						];
					}
					return <ul key={`obj-${i}`}>{output}</ul>;
				}),
			userInput: '',
		});
	}
	render() {
		return (
			<div className='puzzleBox puzzleText'>
				<h4>Filter Object</h4>
				<span className='puzzleText'>
					Unfiltered:
					{this.state.unFilteredArray.map((e, i) => {
						let output = []; 
						for (let key in e) {
							output = [
								...output,
								<li key={`obj-${i}-${key}`}>
									{key}: {e[key]}
								</li>,
							];
						}
						return <ul key={`obj-${i}`}>{output}</ul>;
					})}
				</span>
				<input
					type='text'
					placeholder='Property to filter...'
					className='inputLine'
					onChange={e => this.updateInput(e.target.value)}
					value={this.state.userInput}
				/>
				<button className='confirmationButton' onClick={() => this.solve()}>
					Filter
				</button>
				<span className='resultsBox filterObjectRB'>
					Filtered: {this.state.filteredArray}
				</span>
			</div>
		);
	} 
}

export default FilterObject;
