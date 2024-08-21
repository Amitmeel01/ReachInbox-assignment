import { useState, useEffect } from 'react'; // Removed React import
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AppBar from '../components/AppBar';
import google from '../assets/google.svg';
import Footer from '../components/Footer';

interface UserProfile {
  id: string;
  email: string;
  name: string;
  picture: string;
}

function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Function to extract token from URL
  const getTokenFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('token');
  };

  // Check for token in URL and store it in localStorage
  useEffect(() => {
    const urlToken = getTokenFromUrl();
    if (urlToken) {
      localStorage.setItem('token', urlToken);
      navigate('/'); // Redirect to homepage or desired route after storing the token
    }
  }, [navigate]);

  useEffect(() => {
    if (token) {
      axios
        .get('https://hiring.reachinbox.xyz/api/v1/user-profile', {
          headers: {
            Authorization: `${token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          // setProfile(res.data); // Removed unused profile state
          navigate('/'); // Redirect to profile page
        })
        .catch((err) => console.log(err));
    }
  }, [token, navigate]);

  const handleGoogleLogin = () => {
    // Redirect user to the company's Google login API
    window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/';
  };

  return (
    <div>
      <AppBar />
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">Create a new account</div>
            <div
              className="mt-6 border-white/40 border px-20 py-2 text-sm flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
              onClick={handleGoogleLogin}
            >
              <img src={google} alt="google" className="w-4 mr-3" />
              Sign Up with Google
            </div>
          </div>
          <div className="">
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{' '}
              <Link to="/login" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
