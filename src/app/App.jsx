import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../page/Home/Home';
import Admin from '../page/Admin/Admin';
import Products from '../page/Products/Products';
import Contact from '../page/Contact/Contact';
import Category from '../components/Category/Category';
import Header from '../page/Header/Header';
import Footer from '../page/Footer/Footer';
import RegistrationModal from '../components/RegistrationModal/RegistrationModal';

const App = () => {
    const [showRegistrationModal, setShowRegistrationModal] = useState(false);
    const [registeredUserName, setRegisteredUserName] = useState('');

    const handleContactClick = () => {
        const isUserRegistered = localStorage.getItem('isUserRegistered') === 'true';

        if (!isUserRegistered) {
            setShowRegistrationModal(true);
        }
    };

    const handleCloseModal = () => {
        setShowRegistrationModal(false);

        const storedName = localStorage.getItem('registeredName');
        if (storedName) {
            setRegisteredUserName(storedName);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('registeredEmail');
        localStorage.removeItem('registeredName');
        localStorage.removeItem('isUserRegistered');
        setRegisteredUserName('');
    };

    useEffect(() => {
        const storedName = localStorage.getItem('registeredName');
        const isUserRegistered = localStorage.getItem('isUserRegistered');

        if (storedName && isUserRegistered === 'true') {
            setRegisteredUserName(storedName);
            setShowRegistrationModal(false); 
        }
    }, []);

    return (
        <>
            <Header
                onContactClick={handleContactClick}
                registeredUserName={registeredUserName}
                onLogout={handleLogout}
            />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path="/products/:categoryId" element={<Products />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/category' element={<Category />} />
            </Routes>
            <Footer />
            {showRegistrationModal && <RegistrationModal onClose={handleCloseModal} />}
        </>
    );
};

export default App;
