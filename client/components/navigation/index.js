import React from 'react'
import { useRouter } from 'next/router'
import { BiCategory } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';

import NavItem from './nav-item'
import { World } from '../icons'

import styles from './navigation.module.css'

const Navigation = () => {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <NavItem
        href="/"
        selected={
          router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
        }
      >
        <World />
        <span>Q&A</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
      <BiCategory /><span>Categories</span>
      </NavItem>

      <NavItem
        href="/users"
        selected={router.pathname.split('/')[1] == 'users'}
      >
        <FiUsers /><span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
