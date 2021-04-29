import React from 'react'
import Button from '@santiment-network/ui/Button'
import Icon from '@santiment-network/ui/Icon'
import { tr } from '../../utils/translate'
import styles from './Button.module.scss'

const TryButton = ({href = 'https://app.santiment.net/login'}) => (
  <Button
    className={styles.btn}
    variant='fill'
    accent='positive'
    as='a'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {tr('try.btn', 'Try it yourself')}
    <Icon type='pointer-right-small' className={styles.icon} />
  </Button>
)

export default TryButton
