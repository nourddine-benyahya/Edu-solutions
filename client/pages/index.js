import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/layout/header'
import { publicFetch } from '../util/fetcher'
import styles from './Home.module.css'


import Layout from '../components/layout'
import QuestionWrapper from '../components/question/question-wrapper'
import QuestionStats from '../components/question/question-stats'
import QuestionSummary from '../components/question/question-summary'
import PageTitle from '../components/page-title'
import ButtonGroup from '../components/button-group'
import { Spinner } from '../components/icons'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  const router = useRouter()

  const [questions, setQuestions] = useState(null)
  const [sortType, setSortType] = useState('Votes')

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data } = await publicFetch.get('/question')
      setQuestions(data)
    }

    const fetchQuestionByTag = async () => {
      const { data } = await publicFetch.get(`/questions/${router.query.tag}`)
      setQuestions(data)
    }

    if (router.query.tag) {
      fetchQuestionByTag()
    } else {
      fetchQuestion()
    }
  }, [router.query.tag])

  const handleSorting = () => {
    switch (sortType) {
      case 'Votes':
        return (a, b) => b.score - a.score
      case 'Views':
        return (a, b) => b.views - a.views
      case 'Newest':
        return (a, b) => new Date(b.created) - new Date(a.created)
      case 'Oldest':
        return (a, b) => new Date(a.created) - new Date(b.created)
      default:
        break 
    }
  }
  const [pageNr,setpageNr] = useState(false)
  return (
    <>
    {pageNr ? (
    <Layout>
      <Head>
        <title>
          {router.query.tag ? router.query.tag : 'Questions'} - EduSolutions
        </title>
      </Head>

      <PageTitle title={router.query.tag ? `Questions tagged [${router.query.tag}]` : 'All Questions'} button borderBottom={false} />

      <ButtonGroup
        borderBottom
        buttons={['Votes', 'Views', 'Newest', 'Oldest']}
        selected={sortType}
        setSelected={setSortType}
      />

      {!questions && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {questions
        ?.sort(handleSorting())
        .map(
          ({
            id,
            votes,
            answers,
            views,
            title,
            text,
            tags,
            author,
            created
          }) => (
            <QuestionWrapper key={id}>
              <QuestionStats
                voteCount={votes.length}
                answerCount={answers.length}
                view={views}
              />
              <QuestionSummary
                id={id}
                title={title}
                tags={tags}
                author={author}
                createdTime={created}
              >
                {text}
              </QuestionSummary>
            </QuestionWrapper>
          )
        )}
    </Layout>) : (
      <>
      <Header/> 
      <div className={styles.gridParent} >
      <div className={styles.gridchild0} >
        <div className={styles.bigtitle}>Welcome to Edu-Solution</div>
        <div className={styles.subtitle}>Join the Community of Questioners and Knowledgable Ones: Where Knowledge Meets Conversation</div>
        <div className={styles.text}>the ultimate platform for all your questions and answers. Here, you can connect with a community of experts and enthusiasts in various subjects such as programming, math, physics, English, medicine, and many more. Whether you have a question or a wealth of knowledge to share, join us and be part of the conversation. Let's build a world of knowledge, together
        </div>
        <button className={styles.homeBtn} onClick={(e)=>(setpageNr(true))} >Let’s Started</button>
      </div>
      <div>
      <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1675593625~exp=1675594225~hmac=12c817c8dbb687e77f5d86557d35e5ae0b515335f3323f1d6e7f3446682936d4" alt="" className={styles.image} />
      </div>
    </div>
    <Footer />
         
    </>

    )}
    </>
  )
}

export default HomePage
