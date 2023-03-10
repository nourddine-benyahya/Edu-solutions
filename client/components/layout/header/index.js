import React, { useEffect, useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import useComponentVisible from '../../../hooks/useComponentVisible'
import useWindowSize from '../../../hooks/useWindowSize'
import CONST from '../../../constants'
import ModalContext from '../../../store/modal'
import { AuthContext } from '../../../store/auth'

import Button from '../../button'
import NavigationDropdown from '../../navigation-dropdown'
import { Menu, Close, Logo } from '../../icons'
import {MdLogout} from 'react-icons/md'

import styles from './header.module.css'
import { useRouter } from 'next/router'
import NavItem from '../../navigation/nav-item'

const Header = ({ className, ...props }) => {
  const router = useRouter()
  const { handleComponentVisible } = useContext(ModalContext)
  const { isAuthenticated, authState, logout } = useContext(AuthContext)
  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > CONST.MOBILE_SIZE) {
      setIsComponentVisible(false)
    }
  }, [size])

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <div ref={toggleRef} className={styles.menuContainer}>
          <Button
            className={styles.menu}
            onClick={() => setIsComponentVisible((isOpen) => !isOpen)}
          >
            {isComponentVisible ? <Close /> : <Menu />}
          </Button>
        </div>
        <Button className={styles.logo} href="/">
          <Logo />
          <p>
            <span>Edu</span>-Solution
          </p>
        </Button>
        <div className={styles.headerNr} >
          <p>Home</p>
          <p>Services</p>
          <NavItem href="/about" selected={router.pathname == '/about'} >About us</NavItem>
          <NavItem
          href="/futures" selected={router.pathname == '/futures'}
         
      >
        Futures
      </NavItem>
          <NavItem
          href="/contact" selected={router.pathname == '/contact'}
      >
        Contact us
      </NavItem>

        </div>
        <div style={{ flex: 1 }}></div>

        {isAuthenticated() ? (
          <div className={styles.userInfo}>
            <p>
              Welcome{' '}
              <Link
                href="/users/[user]"
                as={`/users/${authState.userInfo.username}`}
              >
                <a>{authState.userInfo.username}!</a>
              </Link>
            </p>
            <a onClick={() => logout()}><MdLogout/></a>
          </div>
        ) : (
          <>
            <Button
              className={styles.auth}
              secondary
              onClick={() => handleComponentVisible(true, 'login')}
            >
              Log in
            </Button>
            <Button
              className={styles.auth}
              primary
              onClick={() => handleComponentVisible(true, 'signup')}
            >
              Sign up
            </Button>
          </>
        )}
      </div>

      <div ref={ref}>{isComponentVisible && <NavigationDropdown />}</div>
    </header>
  )
}

export default Header
