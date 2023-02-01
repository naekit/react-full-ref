import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./Modal.module.css"

const Modal = ({ children }) => {
	const navigate = useNavigate()

	const hideHandler = () => {
		navigate("..")
	}

	return (
		<>
			<div className={styles.backdrop} onClick={hideHandler} />
			<dialog open className={styles.modal}>
				{children}
			</dialog>
		</>
	)
}

export default Modal
