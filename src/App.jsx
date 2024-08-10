import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import styles from "./App.module.sass";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Todo App</h1>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Todo form</h2>
          <TodoForm />
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Filters</h2>
          <TodoFilters />
        </section>
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Todo list</h2>
          <TodoList />
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

export default App;
