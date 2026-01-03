import React, { createContext, useState, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from AsyncStorage on app start
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Error loading user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    try {
      // In a real app, this would make an API call
      // For now, we'll simulate by storing in AsyncStorage
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
      };

      // Store all users in AsyncStorage (simulating a database)
      const existingUsers = await AsyncStorage.getItem("users");
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      // Check if user already exists
      const userExists = users.find((u) => u.email === email);
      if (userExists) {
        throw new Error("User with this email already exists");
      }

      users.push(newUser);
      await AsyncStorage.setItem("users", JSON.stringify(users));

      // Set current user
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const login = async (email, password) => {
    try {
      // Get users from AsyncStorage
      const existingUsers = await AsyncStorage.getItem("users");
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      // Find user with matching email and password
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!foundUser) {
        return { success: false, error: "Invalid email or password" };
      }

      // Set current user
      await AsyncStorage.setItem("user", JSON.stringify(foundUser));
      setUser(foundUser);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const value = useMemo(
    () => ({ user, signup, login, logout, isLoading }),
    [user, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
