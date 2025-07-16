import styles from "./page.module.css";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>🛒 Lista de Compras</h1>
      <Form />
    </main>
  );
}
