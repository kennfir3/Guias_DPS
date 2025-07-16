"use client"
import React from "react"
import styles from "./LenguajeCard.module.css"

const LenguajeCard = ({ lenguaje, onShow }) => {
  return (
    <div className={styles.card}>
      <img src={lenguaje.logo} alt={lenguaje.nombre} className={styles.logo}/>
      <h3>{lenguaje.nombre}</h3>
      <button className={styles.boton} onClick={() => onShow(lenguaje)}>Ver más</button>
    </div>
  )
}

export default LenguajeCard
