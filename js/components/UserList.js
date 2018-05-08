import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserData from "./UserData";

class UserList extends Component {
	render() {
		const {users} = this.props
		const userList = users.map(user => <li key={user.id}><UserData user={user}/></li>)

		return (
			<div className="bg-grey p-4">
				<ul>{userList}</ul>
			</div>
		);
	}
}

UserList.propTypes = {};

export default UserList;
