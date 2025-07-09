import styles from "./page.module.css";
import Form from "@/components/Form";  // Importé Form

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <p>Aquí haremos nuestro TO-DO list</p>
          <Form />  
        </div>
      </div>
    </main>
  );
}
