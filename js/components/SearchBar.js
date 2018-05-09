import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
	render() {
		const {handleInput, inputValue} = this.props

		return (
			<div className="searchbar p-4">
				<input className='form-control' onChange={handleInput}
					type="text" placeholder={'Search in here...'} value={inputValue}/>
			</div>
		);
	}


}

SearchBar.propTypes = {};

export default SearchBar;
