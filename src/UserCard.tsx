import React, { FC } from "react";
import styles from "./styles.module.scss";

import { User as UserTypeProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faMapLocationDot,
  faNetworkWired,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const UserCard: FC<UserTypeProps> = ({
  name,
  email,
  phone,
  website,
  address,
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.userName}>{name}</h3>
      <p className={styles.userEmail}>
        <FontAwesomeIcon className={styles.icon} icon={faAt} />
        {email}
      </p>
      <p className={styles.userPhone}>
        <FontAwesomeIcon className={styles.icon} icon={faPhone} />
        {phone}
      </p>
      <a
        href={`http://${website}`}
        className={styles.userWebsite}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className={styles.icon} icon={faNetworkWired} />
        {website}
      </a>
      <p className={styles.userAddress}>
        <FontAwesomeIcon className={styles.icon} icon={faMapLocationDot} />
        {`${address.city}, ${address.street}, ${address.suite}`}
      </p>
    </div>
  );
};

export default UserCard;
