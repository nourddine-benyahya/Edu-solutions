import React from 'react'
import style from './futures.module.css'
import {BsCartCheck, BsStarHalf} from 'react-icons/bs'
import { IoStatsChartOutline } from 'react-icons/io5'
import { BiStore } from 'react-icons/bi'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { AiOutlineComment } from 'react-icons/ai'
import { GoRequestChanges } from 'react-icons/go'
import Layout from '../../components/layout'
export default function Features() {
  return (
    
    <Layout extra={false}>
        <div className={style.content}>
          <div>
            <h1>Features</h1>
            <p>Tons of free tools, features, and services to set you up for success</p>
          </div>
          <div>
            <div>
                <BsCartCheck className={style.icon}/>

                <h2>Lorem, ipsum dolor.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum, voluptates?Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div>
                <BsCartCheck className={style.icon} />
                <h2>Lorem, ipsum dolor.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum, voluptates?Lorem ipsum dolor sit amet.
                </p>
            </div>
           
            <div>
                <BsCartCheck className={style.icon} /> 
                <h2>Lorem, ipsum dolor.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum, voluptates?Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div>
                <BsCartCheck className={style.icon} /> 
                <h2>Lorem, ipsum dolor.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum, voluptates?Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div>
                <BsCartCheck className={style.icon} /> 
                <h2>Lorem, ipsum dolor.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum, voluptates?Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div>
                <BsCartCheck className={style.icon} /> 
                <h2>Lorem, ipsum dolor.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolorum, voluptates?Lorem ipsum dolor sit amet.
                </p>
            </div> 
            <div>
                <BsCartCheck className={style.icon} /> 
                <h2>Products Reviews</h2>
                <p>
                Increase your store's conversion by 
                up to 50% by adding real reviews from your happy past customers.
                </p>
            </div>
            <div>
                <BsCartCheck className={style.icon} />
                <h2>Products Reviews</h2>
                <p>
                Increase your store's conversion by 
                up to 50% by adding real reviews from your happy past customers.
                </p>
            </div>
            
          </div>  
        </div>
    </Layout>
  )
}
