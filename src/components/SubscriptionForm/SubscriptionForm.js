import React, { useState } from 'react'
import cx from 'classnames'
import Button from '@santiment-network/ui/Button'
import Input from '@santiment-network/ui/Input'
import Label from '@santiment-network/ui/Label'
import Icon from '@santiment-network/ui/Icon'
import debounce from 'lodash.debounce'
import styles from './SubscriptionForm.module.scss'

const SubscriptionForm = ({
  cta = 'Get started',
  placeholder = 'Enter your email',
  loading,
  send,
  add,
  classes = {}
}) => {
  const [waiting, setWaiting] = useState(false)
  const [error, setError] = useState(false)
  const [email, setEmail] = useState()

  const onEmailChange = ({ currentTarget: { value } }) => {
    setEmail(value)
    checkEmail(value)
  }

  const checkEmail = debounce(email => {
    let error
    if (!email) {
      error = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      error = 'Invalid email address'
    }

    setError(error)
  })

  const buttonProps = email ? {
    type: 'submit'
  } : {
    as: 'a',
    targer: '_blank',
    rel: 'noopener noreferrer',
    href: 'https://app.santiment.net/sign-up',
    type: 'button'
  }

  return (
    <form
      className={cx(styles.form, classes.form)}
      onSubmit={e => {
        e.preventDefault()
        send({
          variables: { email }
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
        placeholder={placeholder}
        name='email'
        disabled={waiting}
        onChange={onEmailChange}
        isError={error}
      />
      {error && email && (
        <Label accent='persimmon' className={styles.formError}>
          {error}
        </Label>
      )}
      <Button
        {...buttonProps}
        className={cx(styles.btn, classes.button)}
        variant='fill'
        accent='positive'
        disabled={error && email}
        isLoading={waiting || loading}
      >
        {cta}
        <Icon type='pointer-right' className={styles.arrow} />
      </Button>
    </form>
  )
}

export default SubscriptionForm
