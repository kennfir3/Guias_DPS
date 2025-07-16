"use client"
import React, { useEffect, useState } from "react"
import Modal from "@/components/Modal"
import LenguajeCard from "@/components/LenguajeCard"
import styles from "./page.module.css"

export default function Home() {
  const [lenguajes, setLenguajes] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    fetch("/lenguajes.json")
      .then(res => res.json())
      .then(data => setLenguajes(data))
  }, [])

  const showModal = (lenguaje) => {
    setSelected(lenguaje)
    setModalOpen(true)
  }

  return (
    <main className={styles.main}>
      <h1>Lenguajes de Programación</h1>
      <div className={styles.grid}>
        {lenguajes.map((item, idx) => (
          <LenguajeCard key={idx} lenguaje={item} onShow={showModal} />
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} content={selected || {}} />
    </main>
  )
}
