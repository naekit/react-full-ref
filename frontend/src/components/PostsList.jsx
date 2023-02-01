import { useLoaderData } from "react-router-dom"
import Post from "./Post"
import styles from "./PostsList.module.css"

const PostsList = () => {
	const posts = useLoaderData()
	return (
		<>
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
