import { FC } from "react";
import { User } from "./types";
import UserCard from "./UserCard";
import styles from "./styles.module.scss";

type userListPropsType = {
  userList: User[];
};

const UserList: FC<userListPropsType> = ({ userList }) => {
  return (
    <div className={styles.userListContainer}>
      {userList.length
        ? userList.map((user, index) => (
            <UserCard key={index} {...user}></UserCard>
          ))
        : "No data"}
    </div>
  );
};

export default UserList;
