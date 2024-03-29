import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import Svg from 'webkit/ui/Svg/react'
import ProductsDropdown from 'webkit/ui/Products/react'
import SvelteProductList from 'webkit/ui/Products/Products.svelte'
import { useIsMobile } from '../../hooks/responsive'
import styles from './Products.module.scss'

const MobileProducts = () => {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return
    const svelte = new SvelteProductList({
      target: ref.current,
      props: {
        class: styles.products,
        isColumn: true
      }
    })

    return () => svelte.$destroy()
  }, [ref])

  return <div ref={ref} />
}

const Products = () => {
  const { isMobile } = useIsMobile()

  if (isMobile) return <MobileProducts />

  return (
    <ProductsDropdown
      activeClassName={styles.active}
      trigger={
        <div className='row v-center'>
          Products
          <div className={cx(styles.arrow, 'row hv-center mrg-xs mrg--l')}>
            <Svg id='arrow' w='8' h='5' className={styles.arrow__icon} />
          </div>
        </div>
      }
    />
  )
}

export default Products
