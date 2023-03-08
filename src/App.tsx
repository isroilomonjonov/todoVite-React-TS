import { ChangeEvent, useState } from "react";
import styles from "./home.module.css";
import { data } from "./constants";
import { IData } from "./interface";
const App = (): JSX.Element => {


  const [title, setTitle] = useState<string>("");
  const [arr, setArr] = useState<IData[]>(data);
  const changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };
  const submitHandler = (): void => {
    if (!title.length) return;
    const newData={
      id:new Date().getTime(),
      title:title,
      description:"Description"
    }
    console.log(newData);
    setArr([...arr, newData]);
    setTitle("");
  };
  const deleteHandler = (id:number): void => {
   const newData=arr.filter(c=>c.id !== id);
   setArr(newData);
  }
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>APP Todo</h1>
      <input
        type="text"
        placeholder="Enter Todo"
        value={title}
        onChange={changeHandler}
        className={styles.input}
      />
      <button onClick={submitHandler} className={styles.button}>
        Add Todo
      </button>
      <div className={styles.card}>
        {arr.map((c) => (
          <div key={c.id} className={styles.cardItem}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={()=>deleteHandler(c.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
