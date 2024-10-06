import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";

const Bar = () => {
  return (
    <div className={styles.bar}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search users"
          className={styles.searchInput}
        />
      </div>
      <button className={styles.sortButton}>
        <FontAwesomeIcon icon={faArrowDownAZ} />
      </button>
    </div>
  );
};

export default Bar;
