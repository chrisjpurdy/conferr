import styles from "./counter/Counter.module.css";
import React, {useState} from "react";

export function Counter2() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
        setCount((prevCount) => prevCount - 1);
    }

    return <div className={styles.row}>
        <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => decrement()}
        >
            -
        </button>
        <span className={styles.value}>
          {count}
        </span>
        <button
            className={styles.button}
            aria-label="Increment value"
            onClick={() => increment()}
        >
            +
        </button>
    </div>
}