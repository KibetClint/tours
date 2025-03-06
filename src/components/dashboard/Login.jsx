import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaUser, FaLock } from "react-icons/fa";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to dashboard on success
    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{ backgroundImage: "url('/images/D5.jpg')" }}
    >
      <div className="bg-white bg-opacity-80 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[500px] h-[500px] flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">
          Welcome Back
        </h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-5 flex flex-col">
          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
            <FaUser className="text-gray-500 text-lg" />
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none px-3 text-base sm:text-lg py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3">
            <FaLock className="text-gray-500 text-lg" />
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none px-3 text-base sm:text-lg py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center">
  <button
    type="submit"
    className="w-[90%] bg-green-700 text-white py-3 rounded-lg hover:bg-blue-700 transition text-base sm:text-lg"
  >
    Login
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
