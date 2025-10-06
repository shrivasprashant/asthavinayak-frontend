import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../components/AuthLayout";
import { registerUser, sendOtp, verifyOtp } from "../redux/slices/authSlice";
// import Logo from "../assets/img/logo-solar.png";

const Register = () => {
  const [step, setStep] = useState(1); // 1: Registration, 2: OTP Verification
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success, message } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // In your handleSendOtp function:
const handleSendOtp = async (e) => {
  e.preventDefault();
  
  if (!agree) {
    alert("You must agree with terms and conditions.");
    return;
  }
  
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    // Format mobile number
    let mobile = formData.phone.replace(/\D/g, '');
    if (mobile.startsWith('91') && mobile.length === 12) {
      mobile = `+${mobile}`;
    } else if (mobile.length === 10) {
      mobile = `+91${mobile}`;
    } else if (!mobile.startsWith('+91') || mobile.length !== 13) {
      alert("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    // First send OTP
    const sendOtpResult = await dispatch(sendOtp(mobile));
    
    if (sendOtp.fulfilled.match(sendOtpResult)) {
      setStep(2);
    }
  } catch (err) {
    console.error("Failed to send OTP:", err);
  }
};

  const handleVerifyOtp = async (e) => {
  e.preventDefault();
  
  try {
    // Format mobile number
    let mobile = formData.phone.replace(/\D/g, '');
    if (mobile.startsWith('91') && mobile.length === 12) {
      mobile = `+${mobile}`;
    } else if (mobile.length === 10) {
      mobile = `+91${mobile}`;
    }

    // Verify OTP
    const verifyOtpResult = await dispatch(verifyOtp({
      mobile,
      otp: formData.otp
    }));
    
    if (verifyOtp.fulfilled.match(verifyOtpResult)) {
      // OTP verified, now register
      const registerResult = await dispatch(registerUser({
        username: formData.username,
        mobile,
        password: formData.password,
        otp: formData.otp
      }));

      if (registerUser.fulfilled.match(registerResult)) {
        alert("Registration successful!");
        navigate("/");
      }
    }
  } catch (err) {
    console.error("Registration failed:", err);
  }
};
  const handleResendOtp = async () => {
    try {
      await dispatch(sendOtp(formData.phone));
      alert("OTP resent successfully!");
    } catch (err) {
      console.error("Failed to resend OTP:", err);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          {/* <img src={Logo} alt="Logo" className="h-16 w-auto object-contain" /> */}
        </div>

        {step === 1 ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSendOtp} className="space-y-4">
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                className="w-full p-2 border rounded"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
  type="tel"
  name="phone"
  placeholder="Enter your 10-digit mobile number"
  className="w-full p-2 border rounded"
  value={formData.phone}
  onChange={(e) => {
    // Allow only numbers and + at start
    const value = e.target.value.replace(/[^0-9+]/g, '');
    // Ensure + appears only at start if present
    if (value.includes('+') && value.indexOf('+') !== 0) {
      return;
    }
    handleChange({
      target: {
        name: 'phone',
        value: value
      }
    });
  }}
  maxLength="13" // + and 12 digits
  required
/>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full p-2 border rounded"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className="w-full p-2 border rounded"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mr-2"
                  required
                />
                <label className="text-sm">Agree with terms & conditions</label>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
              <p className="mt-4 text-center text-sm">
                Already member?{" "}
                <a href="/" className="text-orange-500 font-semibold">
                  Login
                </a>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
            <p className="text-center mb-4">
              We've sent an OTP to {formData.phone}
            </p>

            {error && (
              <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <input
                type="text"
                name="otp"
                placeholder="Enter 6-digit OTP"
                className="w-full p-2 border rounded text-center text-lg"
                value={formData.otp}
                onChange={handleChange}
                maxLength="6"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <button
                type="button"
                onClick={handleResendOtp}
                className="w-full text-orange-500 py-2 rounded border border-orange-500 hover:bg-orange-50"
                disabled={loading}
              >
                Resend OTP
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-gray-500 py-2 rounded hover:text-gray-700"
              >
                Back to Registration
              </button>
            </form>
          </>
        )}
      </div>
    </AuthLayout>
  );
};

export default Register;