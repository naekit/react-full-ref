import PostsList from "./components/PostsList"

function App() {
	const posts = [
		{ id: 1, author: "Niko", body: "React is easy!" },
		{ id: 3, author: "Ikaros", body: "Vite is easy!" },
		{ id: 4, author: "Ikaros", body: "Vite is easy!" },
		{ id: 5, author: "Ikaros", body: "Vite is easy!" },
		{ id: 6, author: "Ikaros", body: "Vite is easy!" },
		{ id: 9, author: "Ikaros", body: "Vite is easy!" },
		{ id: 8, author: "Ikaros", body: "Vite is easy!" },
		{ id: 2, author: "Ikaros", body: "Vite is easy!" },
	]

	return (
		<main>
			<PostsList posts={posts} />
		</main>
	)
}

export default App
