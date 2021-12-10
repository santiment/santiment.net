import React from 'react'

import Email from './Email'
import Github from './Github'
import Twitter from './Twitter'
import LinkedIn from './LinkedIn'
import Medium from './Medium'
import Sanbase from './Sanbase'
import Facebook from './Facebook'
import Telegram from './Telegram'

export const SocialIcon = ({ type, href, className }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {type === 'linkedin' && <LinkedIn className={className} />}
      {type === 'email' && <Email className={className} />}
      {type === 'medium' && <Medium className={className} />}
      {type === 'twitter' && <Twitter className={className} />}
      {type === 'github' && <Github className={className} />}
      {type === 'sanbase' && <Sanbase className={className} />}
      {type === 'facebook' && <Facebook className={className} />}
      {type === 'telegram' && <Telegram className={className} />}
    </a>
  )
}
