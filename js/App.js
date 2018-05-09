import React, {Component} from 'react';
import Button from './components/Button';
import ActiveUser from './components/ActiveUser'
import SearchBar from './components/SearchBar'
import Toolbar from './components/Toolbar'
import UserList from './components/UserList'


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			activeUser: null,
			inputValue: '',
			sortAge: null
			/*filters: {
				alphabetic: null,
				age: null
			}*/
		};

		this.types = [null, 'asc', 'des']

		fetch('/data.json')
			.then(response => response.json())
			.then(response => this.setState({users: response}))
			.catch(error => console.info(error));
	}

	filteredUsers() {
		const {users, inputValue} = this.state
		const regexp = new RegExp(inputValue, 'i');

		// filter by input
		const filtered = users.filter((item) => {
			return item.name.match(regexp)
		})
		// todo filter by sort

		return filtered
	}

	render() {
		return (
			<div className="container app">

				<SearchBar inputValue={this.state.inputValue} handleInput={this.handleInput}/>
				<Toolbar handleSortAlpha={this.handleSortAlpha} handleSortAge={this.handleSortAge}/>

				<div className='row mt-4'>
					<div className="col-8">
						<UserList users={this.filteredUsers()} handleActiveUser={this.handleActiveUser}/>
					</div>
					<div className="col-4">
						<ActiveUser user={this.state.activeUser}/>
					</div>
				</div>
			</div>
		);
	}

	handleInput = (ev) => {
		const {value} = ev.target

		this.setState({inputValue: value})
	}

	handleActiveUser = (id) => {
		const {users} = this.state;
		const activeUser = users.find((user) => user.id === id)

		this.setState({activeUser: activeUser})
	}

	handleSortAlpha = () => {
		console.log("---", 'handle sort alpha')
	}

	handleSortAge = () => {
		//asc - возрастание
		//des - убывание
		const types = [null, 'asc', 'des']
		const typesLength = types.length - 1
		const currentIndex = types.indexOf(this.state.sortAge)
		const nextIndex = currentIndex >= typesLength ? 0 : currentIndex + 1
		
		console.log("---", types[nextIndex])

		this.setState({sortAge: types[nextIndex]})

		/*if (!this.state.sortAge) {
			this.setState({sortAge: types[0]})
		}*/

		/*let nextState = currentState === types.length - 1 ? 0 : ++currentState
		this.setState({filters: {...this.state.filters, age: types[nextState]}})*/
	}
}

export default App