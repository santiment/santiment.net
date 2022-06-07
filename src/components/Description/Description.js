import React from "react";
import cx from "classnames";
import img from "./images/img.png";
import backGreen from "./images/back-green.svg";
import backYellow from "./images/back-yellow.svg";
import backGrey from "./images/back-grey.svg";
import styles from "./Description.module.scss";

const Description = () => (
  <div className={cx(styles.wrapper, "row hv-center")}>
    <div className={cx(styles.content, "row v-center")}>
      <img src={img} alt="img" className={styles.img} />
      <div className="column">
        <div className={cx(styles.title, "body-2 txt-b mrg--b mrg-xs")}>
          All-in-one platform
        </div>
        <div className={cx(styles.addTitle, "h2 txt-b mrg--b mrg-xl")}>
          Crypto intelligence tools
        </div>
        <div className={cx(styles.description, "body-1")}>
          We bring together everything that you can use to make your next
          action. Datasets,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://app.santiment.net/screener/new"
            className={styles.asset}
          >
            screeners
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://app.santiment.net/watchlists"
            className={styles.asset}
          >
            watchlists
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://app.santiment.net/alerts"
            className={styles.asset}
          >
            alerts
          </a>
          , flexible{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://app.santiment.net/charts"
            className={styles.asset}
          >
            chart layouts
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://app.santiment.net/dashboards"
            className={styles.asset}
          >
            dashboards
          </a>
          ,{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://insights.santiment.net/"
            className={styles.asset}
          >
            insights
          </a>{" "}
          from the community and the San analytics team.
        </div>
        <div className={cx(styles.description, "body-1")}>
          Since 2016, Santiment has produced a platform to research crypto data
          intelligence tools for hedge fund managers, retail investors, crypto
          project owners, and NFT creators.
        </div>
        <div className={cx(styles.block, "row hv-center")}>
          <div className="column hv-center relative">
            <img src={backGreen} alt="img" className={styles.assetImg} />
            <div className={cx(styles.subtitle, "h4")}>Financial</div>
            <div className={cx(styles.subdescription, "body-2")}>datasets</div>
          </div>
          <div className="column hv-center relative">
            <img src={backYellow} alt="img" className={styles.assetImg} />
            <div className={cx(styles.subtitle, "h4")}>On-chain</div>
            <div className={cx(styles.subdescription, "body-2")}>datasets</div>
          </div>
          <div className="column hv-center relative">
            <img src={backGrey} alt="img" className={styles.assetImg} />
            <div className={cx(styles.subtitle, "h4")}>Social</div>
            <div className={cx(styles.subdescription, "body-2")}>datasets</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Description;
