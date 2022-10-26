import React from 'react'
import "./Home.css"

const Home = ({title,subtitle,icon}) => {
  return (
    <header className="header d-none d-sm-flex flex-column">
        <h1 className='mt-3'>
           {icon}{title}
        </h1>
        <p className="lead text-muted">{subtitle}</p>

    </header>
  )
}

export default Home