import React from 'react';

const SignUpForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="grid grid-cols-2 gap-0 md:flex-row max-w-5xl overflow-hidden">
        <div className="md:w-full z-0 rounded-lg relative p-8 bg-gradient-to-r from-[#14cbe3] to-white text-white flex items-center justify-center">
          <div className="absolute  inset-0 bg-[#14cbe3] opacity-50 backdrop-blur-sm"></div>
          <h2 className="relative text-3xl font-bold">Welcome to Resourcify</h2>
        </div>
        <div className="md:w-full -ml-14 rounded-xl bg-white z-10 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input type="text" placeholder="First Name" className="w-full p-2 border border-gray-300 rounded" />
              <input type="text" placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <input type="email" placeholder="Email Id" className="w-full p-2 border border-gray-300 rounded" />
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input type="tel" placeholder="+91 Phone Number" className="w-full p-2 border border-gray-300 rounded" />
            <input type="date" placeholder="DOB" className="w-full p-2 border border-gray-300 rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
            <input type="password" placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded" />
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">I've read and agree with <a href="#" className="text-blue-500">Terms of Service</a> and our <a href="#" className="text-blue-500">Privacy Policy</a></label>
            </div>
            <button type="submit" className="w-full bg-[#14cbe3] text-white p-2 rounded">Sign Up</button>
          </form>
          <p className="mt-4 text-center text-sm">Already have an account? <a href="#" className="text-blue-500">Sign In</a></p>
          <div className="flex space-x-4 mt-4">
            <button className="w-full flex items-center justify-center bg-white border border-gray-300 p-2 rounded shadow">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center bg-white border border-gray-300 p-2 rounded shadow">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="w-5 h-5 mr-2" />
              Sign up with Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
