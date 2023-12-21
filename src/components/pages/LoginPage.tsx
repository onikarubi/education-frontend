import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import MoonLoader from 'react-spinners/MoonLoader';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
      setIsLoading(false);
    }, 3000);
  };

  const handleOAuthLogin = (provider: string) => {
    // OAuth認証処理を実装
    console.log(`${provider}でのログイン`);
    setIsLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
      setIsLoading(false);
    }, 3000)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">ログイン</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">メールアドレスまたはユーザ名</label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 rounded w-full px-3 py-2 text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">パスワード</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 rounded w-full px-3 py-2 text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200 ease-in-out ${isLoading ? 'opacity-75' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex justify-center items-center">
                <MoonLoader size={20} color="white" />
              </div>
            ) : (
              'ログイン'
            )}
          </button>

        </form>
        <div className="mt-4">
          <button
            onClick={() => handleOAuthLogin('Google')}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center mb-2">
            <FaGoogle className="mr-2" /> Googleでログイン
          </button>
          <button
            onClick={() => handleOAuthLogin('Microsoft')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
            <FaMicrosoft className="mr-2" /> Microsoftでログイン
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
