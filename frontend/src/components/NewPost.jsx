import { useState } from "react"
import classes from "./NewPost.module.css"

function NewPost({ onAdd }) {
	const [enteredText, setEnteredText] = useState("")
	const [enteredName, setEnteredName] = useState("")

	const bodyHandler = (event) => {
		setEnteredText(event.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		onAdd({
			body: enteredText,
			author: enteredName,
			id: Math.random().toString(36).substr(2, 9),
		})
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={bodyHandler} />
			</p>
			<p>
				<label htmlFor="name">Your name</label>
				<input
					type="text"
					id="name"
					onChange={(e) => setEnteredName(e.target.value)}
					required
				/>
			</p>
		</form>
	)
}

export default NewPost
