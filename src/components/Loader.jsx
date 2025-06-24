import React from "react";
import styles from "../styles/Loader.module.css";
export default function Loader() {
  return (
    <section className="flex items-center justify-center py-20 w-full h-full">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`${styles.dot}`}
          style={{ animationDelay: `${-0.3 + i * 0.2}s` }}
        />
      ))}
    </section>
  );
}
