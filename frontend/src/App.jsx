import { useState } from "react"
import MainHeader from "./components/MainHeader"
import PostsList from "./components/PostsList"

function App() {
	const [showModal, setShowModal] = useState(true)

	const toggleHandler = () => {
		setShowModal((prevState) => !prevState)
	}

	return (
		<>
			<MainHeader onCreatePost={toggleHandler} />
			<main>
				<PostsList isVisible={showModal} onStopPost={toggleHandler} />
			</main>
		</>
	)
}

export default App
