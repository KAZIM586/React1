import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Custom App hai !</h1>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const AnotherElement = (
<a href="https://google.com" target="_blank">Visit the google </a>
)
const anotherUser = 'chai aur react'

const reacElement = React.createElement(
  'a',
  {href:'https://facebook.com'},
  'Click me to visit facebook',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
    //  <App /> 
    // <MyApp />
    // ReactElement 
    // AnotherElement 
    reacElement
    }


  </React.StrictMode>,
)
