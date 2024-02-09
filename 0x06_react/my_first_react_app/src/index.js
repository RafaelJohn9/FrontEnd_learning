import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Footer from './Footer.js'
import './index.css'

function Page() {
  return(
    <div>
      <Header />
      <ol>
        <li>Apple</li>
        <li>Tomato</li>
        <li>Mango</li>
        <li>Orange</li>
      </ol>
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"));