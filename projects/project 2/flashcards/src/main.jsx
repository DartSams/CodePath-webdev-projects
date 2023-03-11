import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Card from "./components/Card"
import Title from "./components/Title"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Title title="Guess the language" subtext="Test you knowledge of languages."/>
    <Card />
  </React.StrictMode>,
)
