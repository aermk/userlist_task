import { FC, useEffect, useState } from "react";
import Header from "./Header";
import UserList from "./UserList";
import Bar from "./SearchBar";
import { User } from "./types";
import styles from "./styles.module.scss";

const Dashboard: FC = () => {
  const [userList, setuserList] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`Failed loading data: ${response.statusText}`);
        }
        const data = await response.json();
        setuserList(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedUsers = [...userList].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const filteredUsers = sortedUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className={styles.container}>
      <Header />
      <Bar
        onSearch={setSearchQuery}
        onSort={toggleSortOrder}
        sortOrder={sortOrder}
      ></Bar>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <UserList userList={filteredUsers} />}
    </div>
  );
};

export default Dashboard;
