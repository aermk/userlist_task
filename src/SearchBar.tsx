import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownAZ,
  faArrowDownZA,
} from "@fortawesome/free-solid-svg-icons";

type BarPropsType = {
  onSearch: (query: string) => void;
  onSort: () => void;
  sortOrder: "asc" | "desc";
};

const Bar: React.FC<BarPropsType> = ({ onSearch, onSort, sortOrder }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search users"
          className={styles.searchInput}
          onChange={handleInputChange}
        />
      </div>
      <button className={styles.sortButton} onClick={onSort}>
        {sortOrder === "asc" ? (
          <FontAwesomeIcon icon={faArrowDownAZ} />
        ) : (
          <FontAwesomeIcon icon={faArrowDownZA} />
        )}
      </button>
    </div>
  );
};

export default Bar;
