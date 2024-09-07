import React from "react";
import mongodb from "../../assets/charan mongodbcert (1).pdf";
import reactCert from "../../assets/share-certificate.png";
import styles from "./Certificates.styles.module.css";

const Certificates = () => {
  return (
    <div className={styles.container}>
      <h1>Certificates</h1>
      <ul className={styles.items}>
        <li className={styles.mycert}>
          <h4>React and Redux Certificate</h4>
          <p className={styles.certData}>
            Aug 2024{" "}
            <a href={reactCert} download className={styles.credential}>
              Credentials
            </a>
          </p>
        </li>
        <li className={styles.mycert}>
          <h4>MongoDb</h4>
          <p className={styles.certData}>
            March 2024{" "}
            <a href={mongodb} download className={styles.credential}>
              Credentials
            </a>
          </p>
        </li>
        <li className={styles.mycert}>
          <h4>Nptel Dbms and Sql</h4>
          <p className={styles.certData}>
            Aug 2024
            <a
              href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS41S2422117203036389"
              className={styles.credential}
            >
              Credentials
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Certificates;
