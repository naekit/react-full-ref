import NewPost from "./NewPost"
import Post from "./Post"
import styles from "./PostsList.module.css"

const PostsList = ({ posts }) => {
	return (
		<>
			<NewPost />
			<ul className={styles.posts}>
				{posts.map((post) => (
					<Post key={post.id} {...post} />
				))}
			</ul>
		</>
	)
}

export default PostsList
