import { Stack } from "@chakra-ui/react"
import { useState, useRef } from "react"
import { About } from "./components/About"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Mainmint } from "./components/Mainmint"


function App() {

  const[accounts, setAccounts] = useState([])

  const aboutSection = useRef(null)

  return (
    <>
      <Stack
        width='100%'
        height='202vh'
        bg='gray'
        >
        <Header account={accounts} setAccount={setAccounts} aboutSection={aboutSection} />
        <Mainmint account={accounts}/>
        <About aboutSection={aboutSection} />
        <Footer />
      </Stack>
    </>
  )
}

export default App
