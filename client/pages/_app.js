import React, { useState } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import styles from './Home.module.css'


import useComponentVisible from '../hooks/useComponentVisible'
import ModalContext from '../store/modal'
import { AuthProvider } from '../store/auth'
import { FetchProvider } from '../store/fetch'
import { TagProvider } from '../store/tag'

import Modal from '../components/modal'
import AuthForms from '../components/auth-forms'

import '../styles/variables.css'
import '../styles/nprogress.css'
import 'react-tagsinput/react-tagsinput.css'
import '../styles/app.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)
  const [authScreen, setAuthScreen] = useState(null)
  const handleComponentVisible = (componentVisible, authScreen) => {
    setIsComponentVisible(componentVisible)
    setAuthScreen(authScreen)
  }
  const [page,setpage]=useState(true)
  return (
    <>
    {!page ? (
      <ModalContext.Provider
      value={{ ref, handleComponentVisible, setIsComponentVisible }}>
      <AuthProvider>
        <FetchProvider>
          <TagProvider>
            <Component {...pageProps} />
            {isComponentVisible && (
              <Modal>
                <AuthForms screen={authScreen} />
              </Modal>
            )}
          </TagProvider>
        </FetchProvider>
      </AuthProvider>
    </ModalContext.Provider>

    ) : (

      <div className={styles.gridParent} >
      <div className={styles.gridchild0} >
        <div className={styles.bigtitle}>Welcome to Edu-Solution</div>
        <div className={styles.subtitle}>Join the Community of Questioners and Knowledgable Ones: Where Knowledge Meets Conversation</div>
        <div className={styles.text}>the ultimate platform for all your questions and answers. Here, you can connect with a community of experts and enthusiasts in various subjects such as programming, math, physics, English, medicine, and many more. Whether you have a question or a wealth of knowledge to share, join us and be part of the conversation. Let's build a world of knowledge, together
        </div>
        <button className={styles.homeBtn} onClick={(e)=>(setpage(false))} >Let’s Started</button>
      </div>
      <div>
      <img src="" alt="" className={styles.image} />
      </div>
    </div>


    )}




</>
    
  )
}

export default MyApp
