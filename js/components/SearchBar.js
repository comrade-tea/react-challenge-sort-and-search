import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
	state = {
		inputText: ''
	}

	render() {
		return (
			<div className="searchbar p-4">
				<input className='form-control' type="text" placeholder={'Search in here...'}/>
			</div>
		);
	}
}

SearchBar.propTypes = {};

export default SearchBar;
