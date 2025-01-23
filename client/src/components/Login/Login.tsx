import { FormEventHandler, useState } from "react";
import { FiUser } from "react-icons/fi";
import App from "../../App";

const Login: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<string>("");

  const handleLogin: FormEventHandler = (e) => {
    e.preventDefault();
    if (loginData.trim() !== "") {
      setLoggedIn(true);
    }
  };
  if (!loggedIn) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Ingresa tu nombre
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Nombre..."
                value={loginData}
                onChange={(e) => {
                  setLoginData(e.target.value);
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <App nickname={loginData} />;
};

export default Login;
