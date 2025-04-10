import { AuthProvider } from './context/AuthContext'; 
import { Navigate, Route, Routes } from 'react-router';
import Home  from './pages/Home/Home'
import Login from './pages/Login/Login';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';
import About from './pages/About/About';
import Layout from './routes/Layout';
import Tasks from './pages/Tasks/Tasks';
import DepartmentPage from './pages/Departments/DepartmentPage';
import Documents from './pages/Documents/Documents';
import DepartmentsList from './pages/Departments/DepartmentsList';

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
          <Route element={<Layout />}>
            <Route path='/about' element={<About />} />
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/departments'>
              <Route index element={<DepartmentsList />} />
              <Route element={<ProtectedRoute departmentCheck />}>
                <Route path=':departmentId' element={<DepartmentPage />} />
              </Route>
            </Route>
            <Route path='/documents' element={<Documents />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
