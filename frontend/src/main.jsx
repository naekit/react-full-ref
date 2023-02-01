import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Posts from "./routes/Posts"
import NewPost from "./routes/NewPost"
import "./index.css"
import RootLayout from "./routes/RootLayout"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Posts /> },
			{ path: "/create-post", element: <NewPost /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
