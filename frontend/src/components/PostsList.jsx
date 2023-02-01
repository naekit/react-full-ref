import { useEffect, useState } from "react"
import Post from "./Post"
import styles from "./PostsList.module.css"

const PostsList = () => {
	const [posts, setPosts] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	const addPost = (post) => {
		fetch("http://localhost:8080/posts", {
			method: "POST",
			body: JSON.stringify(post),
			headers: {
				"Content-Type": "application/json",
			},
		})
		setPosts((prevState) => [post, ...prevState])
	}

	useEffect(() => {
		const fetchPosts = async () => {
			setIsLoading(true)
			const res = await fetch("http://localhost:8080/posts")
			const data = await res.json()
			setPosts(data.posts)
			setIsLoading(false)
		}
		return () => {
			fetchPosts()
		}
	}, [])

	return (
		<>
			{isLoading ? (
				<p className={styles.posts}>...Loading</p>
			) : posts.length === 0 ? (
				<p className={styles.posts}>No posts yet! Try adding some :)</p>
			) : (
				<ul className={styles.posts}>
					{posts.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</ul>
			)}
		</>
	)
}

export default PostsList
