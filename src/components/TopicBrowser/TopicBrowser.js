import React, { Component } from 'react';
import {
	EvenAndOdd,
	FilterObject,
	FilterString,
	Palindrome,
	Sum,
} from '../Topics/index';

class TopicBrowser extends Component {
	state = {};
	render() {
		return (
			<div>
				<EvenAndOdd />
				<FilterObject />
				<FilterString />
				<Palindrome />
				<Sum />
			</div>
		);
	}
}

export default TopicBrowser;
