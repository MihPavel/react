import React from 'react'

export default function Comment({comment}){
	return (
		<div>
			<div>Пользователь {comment.user}</div>
			<div>{comment.text}</div>
		</div>
	)
	
}