
import React from "react"
import styles from "./about.module.css"
import Layout from '../../components/layout'

class Card extends React.Component {
    render() {
      return(
          <div className={styles.card}>
            <img className={styles.img} src={this.props.img} />
            <div className={styles.cardbody}>
              <h2 className={styles.h2} >{this.props.title}</h2>
              <p styles={styles.p} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <h5 className={styles.h5} >{this.props.author}</h5>
            </div>
          </div>
      )
    }
  }
  
  class Cardd extends React.Component {
    render() {
      return (
        <Layout extra={false}>
         <div className={styles.header}>
           <h1 className={styles.h1}>About Us</h1>
           <h3 className={styles.h3} >A simple and responsive card component in React with clean hover effects. Copy and customise.</h3>
         </div>
        
         <div className={styles.cards}>
        
           <Card
            img='https://avatars.githubusercontent.com/u/112900657?v=4'
            title='ayoub aarab'
            author='fill stack devloper' />
            <Card
            img='https://avatars.githubusercontent.com/u/113578197?v=4'
            title='ilyass elghazi'
            author='fill stack devloper' />
            <Card
            img='https://avatars.githubusercontent.com/u/95044177?v=4'
            title='ikhlas elmorabet'
            author='fill stack devloper' />
            <Card
            img='https://avatars.githubusercontent.com/u/95361652?v=4'
            title='nourddine benyahya'
            author='fill stack devloper' />
        </div>  
        </Layout>
      )
    }
  }

  export default Cardd