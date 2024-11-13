// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';

// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="w-[800px] bg-white rounded-lg shadow-lg overflow-hidden flex">
//         {/* Left Side - Signup Form */}
//         <div className="w-1/2 p-8">
//           <h2 className="text-4xl font-semibold text-purple-600 mb-4">Register</h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
//             />
//             {/* <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
//             /> */}

//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-3 flex items-center text-gray-600"
//               >
//                 {showPassword ? '🙈' : '👁️'}
//               </button>
//             </div>
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required
//             />
//             <button type='submit' className="w-full px-4 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700">
//               Register
//             </button>
//           </form>
//         </div>

//         {/* Right Side - Image and Welcome Text */}
//         <div className="w-1/2 bg-purple-200 relative">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D"
//             alt="Signup"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black opacity-40"></div>
//           <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8 text-center">
//             <h2 className="text-3xl font-bold">Reconnect</h2>
//             <p className="mt-2">
//               Welcome back! Log in to continue your journey with us
//             </p>
//             <Link to="/login" className="mt-6 px-6 py-2 bg-white text-purple-600 rounded-md font-semibold hover:bg-gray-100">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = () => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!passwordPattern.test(password)) {
      alert('Password must be at least 8 characters long, contain at least one uppercase letter, one special character, and one number.');
      return false;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      // Handle successful validation here
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[800px] bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Side - Signup Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-4xl font-semibold text-purple-600 mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            {/* Password Input with Pattern Validation */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showConfirmPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded-md font-semibold hover:bg-purple-700">
              Register
            </button>
          </form>
        </div>

        {/* Right Side - Image and Welcome Text */}
        <div className="w-1/2 bg-purple-200 relative">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D"
            alt="Signup"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-8 text-center">
            <h2 className="text-3xl font-bold">Reconnect</h2>
            <p className="mt-2">
              Welcome back! Log in to continue your journey with us
            </p>
            <Link to="/login" className="mt-6 px-6 py-2 bg-white text-purple-600 rounded-md font-semibold hover:bg-gray-100">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
