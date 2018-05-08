import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Toolbar extends Component {
	render() {
		return (
			<div className='toolbar bg-grey mt-3 py-3 px-4'>
				<button className='btn btn-info'>Sort in alphabet order</button>
				<button className='btn btn-dark ml-3'>Sort by age</button>
			</div>
		);
	}
}

Toolbar.propTypes = {};

export default Toolbar;
