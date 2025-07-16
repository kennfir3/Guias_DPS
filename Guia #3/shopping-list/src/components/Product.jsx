import React from "react";
import styles from "../app/page.module.css";

const Product = ({ product, index, deleteProduct }) => {
  const { nombre, marca, cantidad, precio } = product;

  return (
    <div className={styles.st}>
      <h3 className={styles.Titulo3}>
        {nombre} - {marca} - {cantidad} × ${precio.toFixed(2)}
      </h3>
      <button className={styles.btn_delete} onClick={() => deleteProduct(index)}>
        X
      </button>
    </div>
  );
};

export default Product;
