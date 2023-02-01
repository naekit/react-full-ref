import { Form, Link, redirect } from "react-router-dom"
import Modal from "../components/Modal"
import classes from "./NewPost.module.css"

function NewPost() {
	return (
		<Modal>
			<Form method="post" className={classes.form}>
				<p>
					<label htmlFor="body">Text</label>
					<textarea id="body" required rows={3} name="body" />
				</p>
				<p>
					<label htmlFor="author">Your name</label>
					<input type="text" id="author" required name="author" />
				</p>
				<p className={classes.actions}>
					<Link to="/">Cancel</Link>
					<button type="submit">Submit</button>
				</p>
			</Form>
		</Modal>
	)
}

export default NewPost

export const postAction = async ({ request }) => {
	const formData = await request.formData()

	const data = {
		body: formData.get("body"),
		author: formData.get("author"),
	}

	const res = await fetch("http://localhost:8080/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
	const post = await res.json()

	return redirect("/")
}
