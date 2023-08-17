import './index.scss'
import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import About from './components/About/About'
import CurrentOpenings from './components/CurrentOpenings/CurrentOpenings'
import AllOpenings from './components/AllOpenings/AllOpenings'
import Footer from './components/Footer/Footer'
import { useRef } from 'react'

function App() {

  const allOpeningsRef = useRef(null);

  const scrollToAllOpenings = () => {
    allOpeningsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Header />
      <Hero scrollToAllOpenings={scrollToAllOpenings} />
      <About />
      <div ref={allOpeningsRef}>
        <AllOpenings />
      </div>
      <CurrentOpenings />
      <Footer />
    </>
  )
}

export default App
