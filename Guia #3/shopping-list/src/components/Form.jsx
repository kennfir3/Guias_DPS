"use client";
import React, { useState } from "react";
import Product from "./Product";
import styles from "../app/page.module.css";

const Form = () => {
  const [product, setProduct] = useState({
    nombre: "",
    marca: "",
    cantidad: "",
    precio: "",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleClick = (e) => {
    e.preventDefault();
    if (
      !product.nombre.trim() ||
      !product.marca.trim() ||
      isNaN(product.cantidad) ||
      isNaN(product.precio)
    ) {
      alert("Todos los campos deben estar completos y ser válidos.");
      return;
    }

    const newProduct = {
      ...product,
      cantidad: parseInt(product.cantidad),
      precio: parseFloat(product.precio),
    };

    setProducts([...products, newProduct]);
    setProduct({ nombre: "", marca: "", cantidad: "", precio: "" });
  };

  const deleteProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  const getTotal = () =>
    products.reduce((acc, item) => acc + item.cantidad * item.precio, 0);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.form_input}
          type="text"
          placeholder="Nombre del producto"
          name="nombre"
          value={product.nombre}
          onChange={handleChange}
        />
        <input
          className={styles.form_input}
          type="text"
          placeholder="Marca"
          name="marca"
          value={product.marca}
          onChange={handleChange}
        />
        <input
          className={styles.form_input}
          type="number"
          placeholder="Cantidad"
          name="cantidad"
          value={product.cantidad}
          onChange={handleChange}
        />
        <input
          className={styles.form_input}
          type="number"
          placeholder="Precio (USD)"
          step="0.01"
          name="precio"
          value={product.precio}
          onChange={handleChange}
        />

        <button className={styles.form_button} onClick={handleClick}>
          Agregar producto
        </button>
      </form>

      <h2>Total: ${getTotal().toFixed(2)}</h2>

      {products.map((item, index) => (
        <Product
          key={index}
          index={index}
          product={item}
          deleteProduct={deleteProduct}
        />
      ))}
    </>
  );
};

export default Form;
