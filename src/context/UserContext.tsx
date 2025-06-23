import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';

interface User {
  username: string;
  favorites: string[];
}

interface UserContextType {
  user: User | null;
  login: (u: string, p: string) => Promise<void>;
  register: (u: string, p: string) => Promise<void>;
  logout: () => void;
  toggleFavorite: (id: string) => Promise<void>;
  isFavorite: (id: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    const res = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) throw new Error('login failed');
    const data = await res.json();
    setUser({ username, favorites: data.favorites || [] });
  };

  const register = async (username: string, password: string) => {
    const res = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) throw new Error('register failed');
  };

  const logout = () => setUser(null);

  const toggleFavorite = async (productId: string) => {
    if (!user) return;
    const method = user.favorites.includes(productId) ? 'DELETE' : 'POST';
    const res = await fetch('http://localhost:3001/api/favorites', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: user.username, productId })
    });
    if (res.ok) {
      const data = await res.json();
      setUser({ ...user, favorites: data.favorites });
    }
  };

  const isFavorite = (id: string) => {
    return user ? user.favorites.includes(id) : false;
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout, toggleFavorite, isFavorite }}>
      {children}
    </UserContext.Provider>
  );
};
