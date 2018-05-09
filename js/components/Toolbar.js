import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Toolbar extends Component {
	render() {
		const {handleSortAlpha, handleSortAge} = this.props

		return (
			<div className='toolbar bg-grey mt-3 py-3 px-4'>
				<button onClick={handleSortAlpha} className='btn btn-info'>Sort in alphabet order</button>
				<button onClick={handleSortAge} className='btn btn-secondary ml-3'>Sort by age</button>
			</div>
		);
	}
}

Toolbar.propTypes = {};

export default Toolbar;
