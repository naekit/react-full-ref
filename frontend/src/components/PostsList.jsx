import { useState } from "react"
import Modal from "./Modal"
import NewPost from "./NewPost"
import Post from "./Post"
import styles from "./PostsList.module.css"

const PostsList = () => {
	const [posts, setPosts] = useState([
		{ id: 4, author: "Ikaros", body: "Vite is easy!" },
		{ id: 5, author: "Ikaros", body: "Vite is easy!" },
	])

	const addPost = (post) => {
		setPosts([post, ...posts])
	}

	return (
		<>
			<Modal>
				<NewPost onAdd={addPost} />
			</Modal>
			<ul className={styles.posts}>
				{posts.map((post) => (
					<Post key={post.id} {...post} />
				))}
			</ul>
		</>
	)
}

export default PostsList
