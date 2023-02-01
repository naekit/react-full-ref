import React from "react"
import styles from "./Modal.module.css"

const Modal = ({ children, hideHandler }) => {
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
