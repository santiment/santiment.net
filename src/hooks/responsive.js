import { useEffect, useState } from 'react'
import { IsMobile } from 'webkit/stores/responsive'

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    return IsMobile.subscribe(value => setIsMobile(value))
  }, [])

  return { isMobile }
}
