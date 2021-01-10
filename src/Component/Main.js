import React from 'react'
import '../App.scss';
import Card from './Card'
import Data from './data/data.json'


const Nav = () => {
    return (
        <div className="main">
            {
          Data.map(post => {
            return (
              <Card url={post.url} Name={post.Name}></Card>
            )
          }
          )
        }
        </div>
    )
}

export default Nav;
