import React from 'react'
import Icon from '@santiment-network/ui/Icon'
import Tooltip from '@santiment-network/ui/Tooltip'
import Panel from '@santiment-network/ui/Panel/Panel'
import { tr } from '../../utils/translate'
import styles from './TokensTooltip.module.scss'

const TokensTooltip = () => (
	 <div className={styles.sanTokens}>
	  <Tooltip
	    trigger={
	      <div className={styles.tooltipTrigger}>
	        <span>{tr('pricing.discount', 'Holding 1000 SAN tokens will result in a 20% discount on all plans')}</span>
	        <Icon type='question-round' className={styles.icon} />
	      </div>
	    }
	  >
	    <Panel padding className={styles.tooltip}>
	      <p className={styles.text}>
	        <b>{tr('pricing.discount', 'Here’s how to claim the SAN holding discount:')}</b>
	      </p>
	      <ul className={styles.list}>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.buy', 'Buy 1000 or more SAN tokens ')}(
	          <a
	            rel='noopener noreferrer'
	            target='_blank'
	            href='https://academy.santiment.net/san-tokens/how-to-buy-san'
	          >
	            {tr('pricing.discount.step.buy.link', "here's how")}
	          </a>
	          )
	        </li>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.login.left', "Log in to Sanbase ")}(
	          <a
	            rel='noopener noreferrer'
	            target='_blank'
	            href='https://app.santiment.net/'
	          >
	            https://app.santiment.net/
	          </a>
	          ). {tr('pricing.discount.step.login.right', "If you don’t have a Sanbase account, you can create one with email or MetaMask")}{' '}
	        </li>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.settings.left', "After logging in to Sanbase, head to ")}
	          <a
	            rel='noopener noreferrer'
	            target='_blank'
	            href='https://app.santiment.net/account'
	          >
	            {tr('pricing.discount.step.settings.link', "Account Settings")}
	          </a>
	          {tr('pricing.discount.step.settings.right', " and connect your account with your MetaMask wallet")}
	        </li>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.refresh', "Refresh this page and proceed with your purchase")}
	        </li>
	        <li className={styles.item}>
	          - {tr('pricing.discount.step.system', "Our system checks your Sanbase account for 1000+ SAN during the checkout, and automatically applies a 20% discount")}{' '}
	        </li>
	      </ul>
	      <p className={styles.text}>
	        <b>{tr('pricing.discount.note', "Note")}: </b>
	        {tr('pricing.discount.note.text', "To claim the 20% discount, you just need to hold/HODL enough SAN. The tokens still belong to you - our system simply checks if you have them in your wallet")}
	      </p>
	    </Panel>
	  </Tooltip>
	</div>
)

export default TokensTooltip
