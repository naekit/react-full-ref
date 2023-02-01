import { Outlet } from "react-router-dom"
import PostsList from "../components/PostsList"

function Posts() {
	return (
		<>
			<Outlet />
			<main>
				<PostsList />
			</main>
		</>
	)
}

export default Posts

export const postsLoader = async () => {
	const res = await fetch("http://localhost:8080/posts")
	const data = await res.json()

	return data.posts
}
