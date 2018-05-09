import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ActiveUser extends Component {
	render() {

		return (
			<div className="bg-grey p-4">
				{this.getContent()}
			</div>
		);
	}

	getContent() {
		const {user} = this.props;

		if (!user) return <em>There is no active user!</em>

		return (
			<div className="usercard">
				<div className="usercard__img-w">
					<img src={`./images/${user.image}.svg`} alt=""/>
				</div>
				<h4 className="usercard__name">{user.name}</h4>
				<div className="usercard__phone">{user.phone}</div>
				<div className="usercard__phrase"><b>Любимая фраза:</b> {user.phrase}</div>
			</div>
		)
	}
}

ActiveUser.propTypes = {};

export default ActiveUser;
