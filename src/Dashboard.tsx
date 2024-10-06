import React from "react";
import Header from "./Header";
import UserList from "./UserList";
import Bar from "./SearchBar";
import styles from "./styles.module.scss";
import { testUserList } from "./mock";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Bar></Bar>
      <UserList userList={testUserList} />
    </div>
  );
};

export default Dashboard;
