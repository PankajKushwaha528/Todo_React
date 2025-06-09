
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import Wraper from './Wraper.jsx'

createRoot(document.getElementById('root')).render(
   <Wraper>
         <App />
        <ToastContainer/>

   </Wraper>
)
