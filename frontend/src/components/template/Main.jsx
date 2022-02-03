import React from 'react'
import Header from './Header'

import './Main.css'

const Main = (props) => {
    return (
        <React.Fragment>    
            <Header {...props}/>
            <main className="content">
                Conteúdo
            </main>
        </React.Fragment>
    )
}

export default Main