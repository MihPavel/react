import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component{
	constructor(props){
		super(props)

		this.state = {
			isOpen: false
		}
	}
	render(){
		const {isOpen} = this.state;
		return (
			<div>
				<button onClick={this.toggleOpen}>{ isOpen ? "Закрыть комментарии" : "Открыть комментарии"}</button>
				{this.getBody()}
			</div>
		)
	}
	getBody(){
		if(!this.state.isOpen) return null;

		const {comments} = this.props;
		const commentList = comments.map( (comment) => <li key={comment.id}><Comment comment={comment} /></li>);
		return commentList;
	}
	toggleOpen = () =>{
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	
}