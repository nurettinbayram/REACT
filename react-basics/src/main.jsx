import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>{/*bu kisim string moddta calistirildigi icin hata denetiminden dolayi iki kere consol a yazdiriliyoe */}
    <App/>
  </StrictMode>,
)



