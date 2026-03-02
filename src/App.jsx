import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-12 h-12 border-2 border-blue-400/10 rounded-lg rotate-12 floating opacity-50"></div>
        <div className="absolute bottom-1/4 right-20 w-16 h-16 bg-purple-500/5 rounded-full floating opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-8 h-8 border-2 border-cyan-400/10 rounded-full floating opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ContactModal />
    </div>
  )
}

export default App
