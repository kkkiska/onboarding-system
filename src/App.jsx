import { AuthProvider } from './context/AuthContext'; 
import { Navigate, Route, Routes } from 'react-router';
import Home  from './pages/Home/Home'
import Login from './pages/Login/Login';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
import About from './pages/About/About';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
