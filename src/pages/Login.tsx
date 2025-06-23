import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const Login: React.FC = () => {
  const { login, register } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerMode, setRegisterMode] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (registerMode) {
        await register(username, password);
      }
      await login(username, password);
    } catch (err) {
      setError('Erreur de connexion');
    }
  };

  return (
    <div className="flex justify-center items-center py-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80 space-y-4">
        <h2 className="text-xl font-bold">{registerMode ? 'Inscription' : 'Connexion'}</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          className="border w-full p-2"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border w-full p-2"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="bg-emerald-500 text-white px-4 py-2 rounded w-full" type="submit">
          {registerMode ? 'Créer le compte' : 'Se connecter'}
        </button>
        <button
          type="button"
          className="text-sm text-blue-600"
          onClick={() => setRegisterMode(!registerMode)}
        >
          {registerMode ? 'Déjà un compte ? Se connecter' : "Pas de compte ? S'inscrire"}
        </button>
      </form>
    </div>
  );
};

export default Login;
