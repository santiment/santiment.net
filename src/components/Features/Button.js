import React from 'react'
import Button from '@santiment-network/ui/Button'
import Icon from '@santiment-network/ui/Icon'
import { tr } from '../../utils/translate'
import styles from './Button.module.scss'

const TryButton = () => (
  <Button
    className={styles.btn}
    variant='fill'
    accent='positive'
    as='a'
    target='_blank'
    rel='noopener noreferrer'
    href='https://app.santiment.net/login'
  >
    {tr('try.btn', 'Try it yourself')}
    <Icon type='pointer-right' className={styles.icon} />
  </Button>
)

export default TryButton
