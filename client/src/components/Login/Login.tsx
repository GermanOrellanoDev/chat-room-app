import { FormEventHandler, useState } from "react";
import { FiUser } from "react-icons/fi";

interface LoginProps {
  children: (loginData: string) => React.ReactNode;
}

const Login: React.FC<LoginProps> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<string>("");

  const handleLogin: FormEventHandler = (e) => {
    e.preventDefault();
    if (loginData.trim() !== "") {
      localStorage.setItem("nickname", loginData);
      setLoggedIn(true);
    }
  };
  return loggedIn ? (
    children(loginData)
  ) : (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Ingresa tu nombre
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative text-lg md:text-xl">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" />
            <input
              type="text"
              placeholder="Ingresa tu nombre..."
              value={loginData}
              onChange={(e) => {
                setLoginData(e.target.value);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-lg md:text-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
