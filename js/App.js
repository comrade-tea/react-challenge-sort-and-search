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
			sort: null,
			sortType: null
		};

		this.sorts = {
			asc: (a, b) => {
				const {sort} = this.state
				if (a[sort] > b[sort]) return 1
				if (a[sort] < b[sort]) return -1
			},
			des: (a, b) => {
				const {sort} = this.state
				if (a[sort] > b[sort]) return -1
				if (a[sort] < b[sort]) return 1
			}
		}

		fetch('/data.json')
			.then(response => response.json())
			.then(response => this.setState({users: response}))
			.catch(error => console.info(error));
	}

	filteredUsers() {
		const {users, inputValue} = this.state
		const regexp = new RegExp(inputValue, 'i');

		// filter by input
		let filtered = users.filter((item) => {
			return item.name.match(regexp)
		})

		// todo sort by sort
		if (this.state.sortType) {
			console.log("----", this.state);
			filtered = filtered.sort(this.sorts[this.state.sortType])
		}

		return filtered
	}

	render() {
		return (
			<div className="container app">

				<SearchBar inputValue={this.state.inputValue} handleInput={this.handleInput}/>
				<Toolbar sort={this.state.sort} sortType={this.state.sortType} handleSort={this.handleSort}/>

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

	handleSort = newSort => () => {
		//asc - возрастание
		//des - убывание
		let {sort, sortType} = this.state
		if (sort !== newSort) {
			sortType = null
		}

		const types = [null, 'asc', 'des']
		const typesLength = types.length - 1
		const currentIndex = types.indexOf(sortType)
		const nextIndex = currentIndex >= typesLength ? 0 : currentIndex + 1

		this.setState({sort: newSort, sortType: types[nextIndex]})
	}
}

export default App