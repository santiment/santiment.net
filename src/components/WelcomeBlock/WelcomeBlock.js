import React from 'react'
import cx from 'classnames'
import { Mutation } from 'react-apollo'
import { EMAIL_LOGIN_MUTATION } from '../../gql/user'
import { NotificationsContext } from '../Notifications/Notifications'
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm'
import topSpot from './top-spot.svg'
import bottomSpot from './bottom-spot.svg'
import Eth from './eth.svg'
import Bitcoin from './bitcoin.svg'
import Zcash from './zcash.svg'
import Ripple from './ripple.svg'
import Litecoin from './litecoin.svg'
import Dash from './dash.svg'
import styles from './WelcomeBlock.module.scss'

const WelcomeBlock = () => (
  <section className={styles.wrapper}>
      <img src={topSpot} className={styles.topSpot} alt="" />
      <img src={bottomSpot} className={styles.bottomSpot} alt="" />
      <img src={Dash} className={cx(styles.dash, styles.coin, styles.coinLeft)} alt="dash" />
      <img src={Litecoin} className={cx(styles.litecoin, styles.coin, styles.coinLeft)} alt="litecoin" />
      <img src={Bitcoin} className={cx(styles.bitcoin, styles.coin, styles.coinLeft)} alt="bitcoin" />
      <img src={Ripple} className={cx(styles.ripple, styles.coin, styles.coinRight)} alt="ripple" />
      <img src={Eth} className={cx(styles.eth, styles.coin, styles.coinRight)} alt="eth" />
      <img src={Zcash} className={cx(styles.zcash, styles.coin, styles.coinRight)} alt="zcash" />
    <h1 className={styles.title}>
        On-chain, social & fundamental insights on 1500+ cryptocurrencies
    </h1>
    <NotificationsContext.Consumer>
      {({ add }) => (
        <Mutation mutation={EMAIL_LOGIN_MUTATION}>
          {(sendConfirmationEmail, { loading }) => (
            <SubscriptionForm loading={loading} send={sendConfirmationEmail} add={add} classes={styles} />
          )}
        </Mutation>
      )}
    </NotificationsContext.Consumer>
  </section>
)

export default WelcomeBlock
