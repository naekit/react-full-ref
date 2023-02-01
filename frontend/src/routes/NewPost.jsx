import { useState } from "react"
import Modal from "../components/Modal"
import classes from "./NewPost.module.css"

function NewPost({ onAdd, onCancel }) {
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
		onCancel()
	}

	return (
		<Modal>
			<form onSubmit={submitHandler} className={classes.form}>
				<p>
					<label htmlFor="body">Text</label>
					<textarea
						id="body"
						required
						rows={3}
						onChange={bodyHandler}
					/>
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
				<p className={classes.actions}>
					<button type="button" onClick={onCancel}>
						Cancel
					</button>
					<button type="submit">Submit</button>
				</p>
			</form>
		</Modal>
	)
}

export default NewPost
