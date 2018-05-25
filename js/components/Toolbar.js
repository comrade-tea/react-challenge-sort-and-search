import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Toolbar extends Component {
	render() {
		const {sort, sortType, handleSort} = this.props

		return (
			<div className='toolbar bg-grey mt-3 py-3 px-4'>
				<button onClick={handleSort('name')} className='btn btn-info'>Sort in alphabet order{this.getSortType('name')}</button>
				<button onClick={handleSort('age')} className="btn btn-warning ml-3">Sort by age{this.getSortType('age')}</button>
			</div>
		);
	}

	getSortType(sortName) {
		const {sort, sortType} = this.props
		if (sortName === sort && sortType) return `: ${sortType}`
	}
}

Toolbar.propTypes = {};

export default Toolbar;
