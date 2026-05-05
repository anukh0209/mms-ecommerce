'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { hashPassword, verifyPassword } from './auth-utils';

export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = 'mms_users';
const CURRENT_USER_KEY = 'mms_current_user';

function getStoredUsers(): User[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: User[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  try {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

function saveCurrentUser(user: User | null) {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const currentUser = getCurrentUser();
    setState({
      user: currentUser,
      isAuthenticated: !!currentUser,
      isLoading: false,
    });
  }, []);

  const register = useCallback(async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    const users = getStoredUsers();
    
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: 'Энэ имэйл хаяг бүртгэлтэй байна' };
    }

    const newUser: User = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      name,
      email: email.toLowerCase(),
      passwordHash: hashPassword(password),
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    return { success: true, message: 'Амжилттай бүртгэгдлээ! Нэвтрэх хуудас руу шилжиж байна...' };
  }, []);

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    const users = getStoredUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      return { success: false, message: 'Имэйл хаяг эсвэл нууц үг буруу байна' };
    }

    if (!verifyPassword(password, user.passwordHash)) {
      return { success: false, message: 'Имэйл хаяг эсвэл нууц үг буруу байна' };
    }

    saveCurrentUser(user);
    setState({
      user,
      isAuthenticated: true,
      isLoading: false,
    });

    return { success: true, message: 'Амжилттай нэвтэрлээ!' };
  }, []);

  const logout = useCallback(() => {
    saveCurrentUser(null);
    setState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
