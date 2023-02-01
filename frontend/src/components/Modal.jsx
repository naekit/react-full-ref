import React from "react"
import styles from "./Modal.module.css"

const Modal = ({ children }) => {
	return (
		<>
			<div className={styles.backdrop} />
			<dialog className={styles.modal}>{children}</dialog>
		</>
	)
}

export default Modal
