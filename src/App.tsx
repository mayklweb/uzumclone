import { Footer, Header } from "./components"
import Home from "./pages/home/Home"

function App() {
  
  return (
    <div className="flex flex-col">
    <Header/>
    <main className="">
      <Home/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
