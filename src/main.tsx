import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Card from './components/cards.tsx'
import { Form } from './components/form.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Form/>
  </React.StrictMode>,
)
