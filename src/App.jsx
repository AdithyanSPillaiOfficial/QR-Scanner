import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './widgets/Header/Header'
import ScannerObj from './widgets/Scanner/ScannerObj'

function App() {
  const [url, setUrl] = useState("http://google.com");
  return (
    <div>
      <Header />
      <ScannerObj setUrl={setUrl} />
      <iframe
        src={url}
        title="Example Site"
        width="100%"
        height="400"
        style={{ border: "1px solid black"}}
      ></iframe>

    </div>
  )
}

export default App
