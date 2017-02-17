import React, { Component } from 'react';
import Recipe from './Recipe.js';
import './Board.css';

class Board extends Component {

	constructor(props){
		super(props);
		this.state = { recipes : [] };

		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
	}

	add(){
		let n = Math.floor(Math.random()*100);
		this.state.recipes.push(<Recipe id={n} key={n} removeThisRecipe={this.remove}/>);
		this.setState({});
	}

	remove(i){
		let newState = this.state.recipes.filter( function(recipe){
			let no = Number(i);
			return recipe.props.id !== no;
		});
		this.setState({ recipes : newState});
	}

	render() {
		return (
			<div className="board">
				
				<span className="glyphicon glyphicon-plus-sign plus" 
					aria-hidden="true"
					onClick={this.add}
				>
				</span>

				{this.state.recipes}
			</div>
		);
	}

}


export default Board;