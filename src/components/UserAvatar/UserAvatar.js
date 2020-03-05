import React from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import Button from '@santiment-network/ui/Button'
import styles from './UserAvatar.module.scss'

const UserAvatar = ({
  avatarUrl = '',
  id,
}) => {
  const picUrl = avatarUrl
  const linkTo = 'https://app.santiment.net/profile/' + id

  return (
    <Button
      as='a'
      target='_blank'
      rel='noopener noreferrer'
      href={linkTo}
      className={cx(
        styles.avatar,
        !picUrl && styles.avatarEmpty
      )}
      style={{
        backgroundImage: `url("${picUrl}"`
      }}
    >
      {!picUrl && <Icon type='profile' className={styles.avatarIcon} />}
    </Button>
  )
}

export default UserAvatar
