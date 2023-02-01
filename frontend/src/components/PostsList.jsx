import { useEffect, useState } from "react"
import Modal from "./Modal"
import NewPost from "./NewPost"
import Post from "./Post"
import styles from "./PostsList.module.css"

const PostsList = ({ isVisible, onStopPost }) => {
	const [posts, setPosts] = useState([])

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
			const res = await fetch("http://localhost:8080/posts")
			const data = await res.json()
			setPosts(data.posts)
		}
		return () => {
			fetchPosts()
		}
	}, [])

	return (
		<>
			{isVisible && (
				<Modal hideHandler={onStopPost}>
					<NewPost onAdd={addPost} onCancel={onStopPost} />
				</Modal>
			)}
			{posts.length === 0 ? (
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
