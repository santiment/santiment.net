import React from "react";
import Heading from "../Heading/Heading";
import BloomberImg from "./bloomberg.png";
import ForbesImg from "./forbes.png";
import CoindeskImg from "./coindesk.png";
import CoinTelegraphImg from "./cointelegraph.png";
import CryptoBrImg from "./cb.png";
import BitcoinImg from "./bitcoin.png";
import Newyorker from "./new-yorker.png";
import styles from "./Companies.module.scss";

const Companies = () => {
  return (
    <div className={styles.container}>
      <Heading className={styles.header}>
        As referenced in major publications
      </Heading>
      <div className={styles.list}>
        <div className={styles.row}>
          <img alt="bloomberg" src={BloomberImg} width="260" />
          <img alt="forbes" src={ForbesImg} width="176" />
          <img alt="coindesk" src={CoindeskImg} width="226" />
        </div>
        <div className={styles.row}>
          <img alt="cointelegraph" src={CoinTelegraphImg} width="258" />
          <img alt="cryptobriefing" src={CryptoBrImg} width="163" />
          <img alt="newyorker" src={Newyorker} width="195" />
          <img alt="bitcoin" src={BitcoinImg} width="255" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
