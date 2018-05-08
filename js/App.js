import React, {Component} from 'react';
import Button from './components/Button';
import ActiveUser from './components/ActiveUser'
import SearchBar from './components/SearchBar'
import Toolbar from './components/Toolbar'
import UserList from './components/UserList'


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phrase: 'Нажми на кнопку!',
			count: 0,
			users: []
		};

		const _this = this

		fetch('/data.json')
			.then(response => response.json())
			.then(response => this.setState({users: response}))
			.catch(error => console.info(error));
	}

	updateBtn() {
		const phrases = [
			'ЖМИ!', 'Не останавливайся!',
			'У тебя хорошо получается!', 'Красавчик!',
			'Вот это и есть React!', 'Продолжай!',
			'Пока ты тут нажимаешь кнопку другие работают!',
			'Всё хватит!', 'Ну и зачем ты нажал?',
			'В следующий раз тут будет полезный совет',
			'Чего ты ждешь от этой кнопки?',
			'Если дойдёшь до тысячи, то сразу научищься реакту',
			'ой, всё!', 'Ты нажал кнопку столько раз, что обязан на ней жениться',
			'У нас было 2 npm-пакета с реактом, 75 зависимостей от сторонних библиотек, '
			+ '5 npm-скриптов и целое множество плагинов галпа всех сортов и расцветок, '
			+ 'а также redux, jquery, mocha, пачка плагинов для eslint и ингерация с firebase. '
			+ 'Не то что бы это был необходимый набор для фронтенда. Но если начал собирать '
			+ 'вебпаком, становится трудно остановиться. Единственное, что вызывало у меня '
			+ 'опасения - это jquery. Нет ничего более беспомощного, безответственного и испорченного, '
			+ 'чем рядовой верстальщик без jquery. Я знал, что рано или поздно мы перейдем и на эту дрянь.',
			'coub про кота-джедая: http://coub.com/view/spxn',
			'Дальнобойщики на дороге ярости: http://coub.com/view/6h0dy',
			'Реакция коллег на ваш код: http://coub.com/view/5rjjw',
			'Енот ворует еду: http://coub.com/view/xi3cio',
			'Российский дизайн: http://coub.com/view/16adw5i0'
		];
		this.setState({
			count: this.state.count + 1,
			phrase: phrases[parseInt(Math.random() * phrases.length)]
		});
	}

	render() {
		return (
			<div className="container app">

				<SearchBar/>
				<Toolbar/>
				<div className='row mt-4'>
					<div className="col-8">
						<UserList users={this.state.users}/>
					</div>
					<div className="col-4">
						<ActiveUser/>
					</div>
				</div>
			</div>
		);
	}
}
