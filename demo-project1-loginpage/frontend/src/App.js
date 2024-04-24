import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/Login/Login';
import NavigationBar from './components/NavigationBar';
import ProfilePage from './components/ProfilePage';
import RegisterForm from './components/Register/Register';
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from 'react-toastify';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const handleLogin = (user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentUser(null);
    };

    return (
        <>
        <Router>
            <div>
                <NavigationBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
                    {/* Update the line below */}
                    <Route path="/profile" element={<ProfilePage currentUser={currentUser} onLogout={handleLogout} />} />
                </Routes>
            </div>
        </Router>
        <ToastContainer
            position="top-right" // vị trí hiển thị thông báo
            autoClose={5000} // thời gian hiển thị thông báo
            hideProgressBar={false} // thanh tiến trình
            newestOnTop={false}   // hiển thị thông báo mới nhất trên cùng
            closeOnClick // đóng thông báo khi click
            rtl={false} // hiển thị thông báo từ phải sang trái
            pauseOnFocusLoss // tạm dừng khi mất focus
            draggable // kéo thông báo
            pauseOnHover // tạm dừng khi di chuột
        />
        </>
    );
}

export default App;
