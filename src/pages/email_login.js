import React from 'react'
import Layout from '../components/layout'

const EmailPage = ({ location: { search } }) => {
	window.location.href=`https://app.santiment.net/email_login${search}`
	return null
}

export default EmailPage
