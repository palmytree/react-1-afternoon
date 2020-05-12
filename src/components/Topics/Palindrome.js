import React, { Component } from 'react';

class Palindrome extends Component {
	constructor() {
		super();
		this.state = {
			userInput: '',
			palindrome: '',
		};
	}
	updateInput(value) {
		this.setState({
			userInput: value,
		});
	}
	solve() {
		if (this.state.userInput === this.state.userInput.split('').reverse().join('')) {
			this.setState({
				palindrome: `Yes, ${this.state.userInput} is a palindrome`,
				userInput: '',
            });
		} else {
            this.setState({
                palindrome: `I'm sorry, ${this.state.userInput} is NOT a palindrome`,
                userInput: ''
            })
        }
	}
	render() {
		return (
			<div className='puzzleBox filterStringPB'>
				<h4>Palindrome</h4>
				<input
					type='text'
					className='inputLine'
					placeholder='Word to check'
					onChange={e => this.updateInput(e.target.value)}
					value={this.state.userInput}
				/>
				<button className='confirmationButton' onClick={() => this.solve()}>
					Check palindrome
				</button>
				<span className='resultsBox'>
					{this.state.palindrome}
				</span>
			</div>
		);
	}
}

export default Palindrome;
