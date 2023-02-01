import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Posts, { postsLoader } from "./routes/Posts"
import NewPost, { postAction } from "./routes/NewPost"
import "./index.css"
import RootLayout from "./routes/RootLayout"

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Posts />,
				loader: postsLoader,
				children: [
					{
						path: "/create-post",
						element: <NewPost />,
						action: postAction,
					},
				],
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
