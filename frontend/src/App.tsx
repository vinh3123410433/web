// @ts-nocheck
import React, { useState } from "react";
// Icons
import { FiMenu, FiX, FiGithub, FiTwitter, FiLinkedin, FiFacebook } from "react-icons/fi";
import { 
  AiOutlineHome,
  AiOutlineInfoCircle, 
  AiOutlineCustomerService, 
  AiOutlineContacts 
} from "react-icons/ai";
// const [biến, hàmCậpNhật] = useState(giáTrịKhởiTạo);
const App = () => {
  // các state có thể change trong quá trình sử dụng web
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  // một mảng object hiển thị list các feature của web
  const features = [
    {
      title: "Innovative Solutions",
      description: "Cutting-edge technology solutions for modern businesses",
      icon: <AiOutlineCustomerService className="w-8 h-8" />
    },
    {
      title: "Expert Support",
      description: "24/7 dedicated support from our experienced team",
      icon: <AiOutlineContacts className="w-8 h-8" />
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security for your peace of mind",
      icon: <AiOutlineInfoCircle className="w-8 h-8" />
    }
  ];
 
//   // 1. Khai báo component dưới dạng hàm
// const TênComponent = () => {
//   // (nếu cần: khai báo biến, useState, useEffect,...)

//   // 2. Trả về giao diện (JSX)
//   return (
//     <div>...</div>
//   );
// };

// // 3. (nếu cần) export để dùng nơi khác
// export default TênComponent;

  const LoginForm = () => {
   // lưu giá trị đơn
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
      // fixed inset-0: phủ kín màn hình
      // bg-black bg-opacity-50: nền đen mờ
      // flex items-center justify-center: canh giữa modal
      // z-50: ưu tiên hiển thị modal phía trên
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        {/*  bg-white dark:bg-gray-800: màu nền sáng/tối tùy chế độ
         p-8: padding
         rounded-lg: bo góc
         w-full max-w-md: chiều rộng tối đa */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold dark:text-white">Login</h2>
            {/* FiX là icon dấu "X" (nút đóng) từ thư viện react-icons/fi (Feather Icons). 
            khi người dùng ấn vào icon này sẽ gọi userState để đổi giá trị hiện tại thành false và đóng thanh login*/}
            <button onClick={() => setShowLogin(false)}>
              <FiX className="w-6 h-6" /> 
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // cập nhật lại state
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  const RegisterForm = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold dark:text-white">Register</h2>
            <button onClick={() => setShowRegister(false)}>
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Full Name</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                className="mr-2"
              />
              <label className="text-sm dark:text-white">I agree to the Terms and Conditions</label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 transition-colors duration-300">
        {/* Navigation Header */}
        <nav className="bg-white dark:bg-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
                  alt="Logo"
                  className="h-8 w-8 rounded-full"
                />
                <div className="hidden md:flex items-center space-x-8 ml-10">
                  <a className="flex items-center text-gray-700 dark:text-white hover:text-blue-600">
                    <AiOutlineHome className="mr-1" /> Home
                  </a>
                  <a className="flex items-center text-gray-700 dark:text-white hover:text-blue-600">
                    <AiOutlineInfoCircle className="mr-1" /> About
                  </a>
                  <a className="flex items-center text-gray-700 dark:text-white hover:text-blue-600">
                    <AiOutlineCustomerService className="mr-1" /> Services
                  </a>
                  <a className="flex items-center text-gray-700 dark:text-white hover:text-blue-600">
                    <AiOutlineContacts className="mr-1" /> Contact
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
                >
                  {darkMode ? "🌞" : "🌙"}
                </button>
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowRegister(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Register
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden"
                >
                  {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our Platform</h1>
            <p className="text-xl md:text-2xl mb-8">Transform your business with our innovative solutions</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Features</h2>
              <p className="text-gray-600 dark:text-gray-300">Discover what makes us different</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Preview */}
        <div className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Team"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">About Us</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We are a team of passionate individuals dedicated to providing innovative solutions
                  for businesses worldwide. Our mission is to transform the way companies operate
                  through cutting-edge technology and exceptional service.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-400">Email: info@example.com</p>
                <p className="text-gray-400">Phone: (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a className="text-gray-400 hover:text-white">About Us</a></li>
                  <li><a className="text-gray-400 hover:text-white">Services</a></li>
                  <li><a className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a className="text-gray-400 hover:text-white"><FiTwitter className="w-6 h-6" /></a>
                  <a className="text-gray-400 hover:text-white"><FiFacebook className="w-6 h-6" /></a>
                  <a className="text-gray-400 hover:text-white"><FiLinkedin className="w-6 h-6" /></a>
                  <a className="text-gray-400 hover:text-white"><FiGithub className="w-6 h-6" /></a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-900"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">© 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {showLogin && <LoginForm />}
        {showRegister && <RegisterForm />}
      </div>
    </div>
  );
};

export default App;