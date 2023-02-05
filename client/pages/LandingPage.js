import styles from './Home.module.css'
import Footer from '../components/Footer/Footer'
import Header from '../components/layout/header'

const LandingPage = (props) => {


    return (
        <div style={props.status ? { "display":"none" } : {}} >
            <Header />
            <div className={styles.gridParent} >
                <div className={styles.gridchild0} >
                    <div className={styles.bigtitle}>Welcome to Edu-Solution</div>
                    <div className={styles.subtitle}>Join The Community of Questioners and Knowledgable Ones: Where Knowledge Meets Conversation</div>
                    <div className={styles.text}>the ultimate platform for all your questions and answers. Here, you can connect with a community of experts and enthusiasts in various subjects such as programming, math, physics, English, medicine, and many more. Whether you have a question or a wealth of knowledge to share, join us and be part of the conversation. Let's build a world of knowledge, together
                    </div>
                    <button className={styles.homeBtn} onClick={props.handleClick} >Let’s Started</button>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=740&t=st=1675593625~exp=1675594225~hmac=12c817c8dbb687e77f5d86557d35e5ae0b515335f3323f1d6e7f3446682936d4" alt="" className={styles.image} />
                </div>
            </div>
            <Footer />
        </div>
    )

}

export default LandingPage