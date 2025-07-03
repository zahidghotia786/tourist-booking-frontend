
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import AdminPanel from './components/AdminPanel'
import Home from './Home'

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
