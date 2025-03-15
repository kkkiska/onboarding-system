import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, Route, Routes } from 'react-router';
import Home  from './pages/Home'
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [message, setMessage] = useState('');
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/hello`)
            .then(response => {
                setMessage(response.data.message);
            })
            .catch(error => {
                setMessage(error.message)
                console.error('Ошибка при запросе:', error);
            });
    }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  )
}

export default App
