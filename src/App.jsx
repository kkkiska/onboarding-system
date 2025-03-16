import { AuthProvider } from './context/AuthContext'; 
import { Navigate, Route, Routes } from 'react-router';
import Home  from './pages/Home'
import Login from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './routes/ProtectedRoute';
import RootRedirect from './routes/RootRedirect';
import PublicRoute from './routes/PublicRoute';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<RootRedirect />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </AuthProvider>
  )
}

export default App
