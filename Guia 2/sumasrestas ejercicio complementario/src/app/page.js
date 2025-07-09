"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const limpiar = () => {
    setNumero1("");
    setNumero2("");
    setResultado("");
  };

  const mostrarError = (mensaje) => {
    setResultado(`⚠️ ${mensaje}`);
  };

  const calcular = (operacion) => {
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);

    if (isNaN(n1) || (isNaN(n2) && operacion !== "√")) {
      mostrarError("Por favor, introduce números válidos.");
      return;
    }

    switch (operacion) {
      case "+":
        setResultado(`Resultado: ${n1 + n2}`);
        break;
      case "-":
        setResultado(`Resultado: ${n1 - n2}`);
        break;
      case "*":
        setResultado(`Resultado: ${n1 * n2}`);
        break;
      case "/":
        if (n2 === 0) {
          mostrarError("No se puede dividir entre cero.");
        } else {
          setResultado(`Resultado: ${n1 / n2}`);
        }
        break;
      case "^":
        setResultado(`Resultado: ${Math.pow(n1, n2)}`);
        break;
      case "√":
        if (n1 < 0) {
          mostrarError("No se puede calcular raíz cuadrada de un número negativo.");
        } else {
          setResultado(`Resultado: ${Math.sqrt(n1)}`);
        }
        break;
      default:
        mostrarError("Operación no válida.");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <h2 className={styles.title}>Calculadora Avanzada</h2>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Número 1:</label>
          <input
            className={styles.input}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Número 2:</label>
          <input
            className={styles.input}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
        </div>

        <div className={styles.buttons}>
          <button onClick={() => calcular("+")}>➕ Sumar</button>
          <button onClick={() => calcular("-")}>➖ Restar</button>
          <button onClick={() => calcular("*")}>✖️ Multiplicar</button>
          <button onClick={() => calcular("/")}>➗ Dividir</button>
          <button onClick={() => calcular("^")}>⏫ Potencia</button>
          <button onClick={() => calcular("√")}>√ Raíz</button>
          <button className={styles.reset} onClick={limpiar}>🔁 Limpiar</button>
        </div>

        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}
