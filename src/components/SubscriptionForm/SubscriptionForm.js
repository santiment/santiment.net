import React from 'react'
import cx from 'classnames'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import Icon from '@santiment-network/ui/Icon'
import styles from './SubscriptionForm.module.scss'

const SubscriptionForm = ({
  cta = 'Get started',
  placeholder = 'Enter your email',
  loading,
  send,
  add,
  classes = {}
}) => (
  <form
    className={cx(styles.form, classes.form)}
    onSubmit={e => {
      e.preventDefault()
      send({
        variables: {
          email: e.currentTarget.email.value
        }
      }).then(() => {
        add({
          type: 'success',
          title: 'Verification email was sent to the provided email!'
        })
      })
    }}
  >
    <Input
      className={cx(styles.input, classes.input)}
      type='email'
      required
      placeholder={placeholder}
      name='email'
    />
    <Button
      className={cx(styles.btn, classes.button)}
      variant='fill'
      accent='positive'
      isLoading={loading}
    >
      {cta}
      <Icon type='pointer-right' className={styles.arrow} />
    </Button>
  </form>
)

export default SubscriptionForm
