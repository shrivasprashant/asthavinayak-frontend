import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './routes/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminLayout from './routes/AdminLayout';
import Home from './pages/home/Home';
import ShopPage from './pages/ShopPage';
import ShopCategoryPage from './pages/ShopCategoryPage';
import SubCategoryProductsPage from './pages/SubCategoryProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './components/ContactForm';
import GalleryPage from './pages/GalleryPage';

const App = () => {
  return (
    <div className='bg-gradient-to-br from-[#f8f4e9] to-[#e8dfd1]'>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*User Protected routes */}
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ShopPage />} />
            <Route path="/services/category" element={<ShopCategoryPage />} />
            <Route path="/subcategory-products" element={<SubCategoryProductsPage />} />
            <Route path="/product" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Route>

          {/* Admin Protected routes */}
          <Route element={<ProtectedRoute adminOnly><AdminLayout /></ProtectedRoute>}>
            <Route path="/admin" element={<h1>Admin</h1>} />
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App