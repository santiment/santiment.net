import React from 'react'

import Email from './Email'
import Github from './Github'
import Twitter from './Twitter'
import LinkedIn from './LinkedIn'
import Medium from './Medium'

export const SocialIcon = ({ type, href, className }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {type === 'linkedin' && <LinkedIn className={className} />}
      {type === 'email' && <Email className={className} />}
      {type === 'medium' && <Medium className={className} />}
      {type === 'twitter' && <Twitter className={className} />}
      {type === 'github' && <Github className={className} />}
    </a>
  )
}
