import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserData extends Component {
	render() {
		const {user, handleActiveUser} = this.props
		const imgPath = `./images/${user.image}.svg`

		return (
			<div className="UserData" onClick={() => handleActiveUser(user.id)}>
				<div className="row">
					<div className="col-3"><img src={imgPath} alt=""/></div>
					<div className="col-3">{user.name}</div>
					<div className="col-3">{user.age}</div>
					<div className="col-3">{user.phone}</div>
				</div>
			</div>
		);
	}

}

UserData.propTypes = {};

export default UserData;
