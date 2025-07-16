"use client"
import React from "react"
import styles from "./Modal.module.css"

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.close}>X</button>
        <h2>{content.nombre}</h2>
        <img src={content.logo} alt={content.nombre} className={styles.image}/>
        <p>{content.descripcion}</p>
      </div>
    </div>
  )
}

export default Modal
