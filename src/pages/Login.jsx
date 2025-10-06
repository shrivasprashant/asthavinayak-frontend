import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Lock } from "lucide-react"; // Changed from Mail to Phone icon
import AuthLayout from "../components/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
// import Logo from "../assets/img/logo-solar.png";
import { saveUser } from "../utils/auth"; 

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });
  
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for mobile number input
    if (name === "mobile") {
      // Remove all non-digit characters
      let digits = value.replace(/\D/g, '');
      
      // Format as +91XXXXXXXXXX if 10 digits entered
      if (digits.length === 10) {
        digits = `+91${digits}`;
      }
      // Keep as is if already in +91XXXXXXXXXX format
      else if (digits.startsWith('91') && digits.length === 12) {
        digits = `+${digits}`;
      }
      
      setFormData({
        ...formData,
        [name]: digits
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // In your login page or authSlice
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let formattedMobile = formData.mobile;
    if (!formattedMobile.startsWith('+91') && formattedMobile.length === 10) {
      formattedMobile = `+91${formattedMobile}`;
    }

    const result = await dispatch(loginUser({
      mobile: formattedMobile,
      password: formData.password
    }));
    
    if (loginUser.fulfilled.match(result)) {
      // Save user data including role and token
      saveUser({
        ...result.payload.user,
        token: result.payload.token
      });
      
      // Redirect based on role
      if (result.payload.user.role === 'admin') {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    }
  } catch (err) {
    console.error("Login error:", err);
  }
};
  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          {/* <img src={Logo} alt="Logo" className="h-12 w-auto object-contain" /> */}
        </div>

        <h2 className="text-xl font-bold mb-6 text-center">LOGIN</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Mobile Number</label>
            <div className="flex items-center border rounded-md p-2 bg-white">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your 10-digit mobile number"
                className="flex-1 outline-none"
                value={formData.mobile}
                onChange={handleChange}
                pattern="^(\+91[\d]{10}|[\d]{10})$"
                maxLength="13"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <div className="flex items-center border rounded-md p-2 bg-white">
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="flex-1 outline-none"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-end mt-2">
              <a href="/forgot-password" className="text-orange-500 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md mt-4 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login Now"}
          </button>

          <p className="text-center text-sm mt-4">
            Not a member?{" "}
            <a href="/register" className="text-orange-500 font-semibold hover:underline">
              Sign up
            </a>
          </p>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-400 text-sm">OR Continue With</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button type="button" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg">
              <img src="https://img.icons8.com/color/512/google-logo.png" alt="Google" className="h-6 w-6" />
            </button>
            <button type="button" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg">
              <img src="https://i.pinimg.com/736x/5b/83/69/5b83693bae2828e7c357855f276520b0.jpg" alt="Apple" className="h-6 w-6" />
            </button>
            <button type="button" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg">
              <img src="https://img.freepik.com/premium-psd/facebook-social-media-icon-3d_466778-4384.jpg?semt=ais_hybrid&w=740" alt="Facebook" className="h-6 w-6" />
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;