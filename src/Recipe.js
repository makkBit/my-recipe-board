import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Recipe.css';


class Recipe extends Component {

	constructor(props){
		super(props);
		this.state = { editing: true, title: '', ingredients: '' };
		this.title = '';
		this.ingredients = '';

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleIngredientsChange = this.handleIngredientsChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	componentWillMount(){
	    this.style = {
	        right: this.randomBetween(100, window.innerWidth - 350) + 'px',
	        top: this.randomBetween(55, window.innerHeight - 250) + 'px',
	        transform: 'rotate(' + this.randomBetween(-15, 15) + 'deg)'
	    };
	}

	handleTitleChange(e){
		this.title = e.target.value;
		this.setState( {title: this.title} );
	}

	handleIngredientsChange(e){
		this.ingredients = e.target.value;
		this.setState( {ingredients: this.ingredients} );
	}

	handleSubmit(){
		this.setState( { editing:false, title: this.title, ingredients: this.ingredients });
	}

	handleDelete(){
		this.props.removeThisRecipe(this.props.id);
	}

	handleEdit(){
		this.setState( {editing:true, title: this.title, ingredients: this.ingredients});
	}

	randomBetween(min, max) {
	    return (min + Math.ceil(Math.random() * max));
	}

	renderForm(){
		return(
			<div>
				<Draggable>
					<div className="recipe" style={this.style}>
	                   <input placeholder="enter recipe name" 
	                   	type="text"
	                   	onChange={this.handleTitleChange} 
	                   	className="form-control"
	                   	value={this.state.title}/>

	                   <textarea placeholder="enter recipe ingredients here"
	                   	onChange={this.handleIngredientsChange}
	                   	className="form-control"
	                   	value={this.state.ingredients}>
	                   </textarea>

	                   <span type="submit" value="submit" 
	                   	className="glyphicon glyphicon-floppy-disk save"
	                   	onClick={this.handleSubmit}>
	                   </span>
					</div>	
				</Draggable>	
			</div>
		);
	}

	renderDisplay(){
		return(
			<div>
				<Draggable>
					<div className="recipe" style={this.style}>

						<h5>{this.state.title}</h5>
						<p className="form-control">{this.state.ingredients}</p>

						<span className="glyphicon glyphicon-remove delete"
							onClick={this.handleDelete}>
						</span>
						<span className="glyphicon glyphicon-pencil edit"
							onClick={this.handleEdit}>
						</span>
						
					</div>
				</Draggable>
			</div>
		);
	}

	render() {
		if(this.state.editing)
			return this.renderForm();
		else
			return this.renderDisplay();
	}
}


export default Recipe;


