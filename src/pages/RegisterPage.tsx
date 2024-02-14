"use client"
import { AuthContext } from '@/contexts/AuthContext';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {

  const router = useRouter();
  const { registerUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    // Validasi input
    if (!email || !username || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const success = await registerUser(email, username, password);
      console.log("data", success)
      if (success) {
        console.log('Registration Successful');
        router.push("/login")
      } else {
        setError('Failed to register. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Failed to register. Please try again.');
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen flex-col"
      style={{ backgroundColor: "rgba(13, 29, 35, 1)" }}
    >
      <div className="text-left w-full max-w-xs">
        <h1 className="font-bold text-2xl text-white ml-5">Register</h1>{" "}
      </div>
      <div className="h-8" />
      <input
        type="text"
        placeholder="Enter Email"
        className="input input-bordered w-full max-w-xs"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="h-3" />
      <input
        type="text"
        placeholder="Create Username"
        className="input input-bordered w-full max-w-xs"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="h-3" />
      <input
        type="password"
        placeholder="Create Password"
        className="input input-bordered w-full max-w-xs"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="h-3" />
      <input
        type="password"
        placeholder="Confirm Password"
        className="input input-bordered w-full max-w-xs"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="h-8" />
      <button className="btn btn-info w-full max-w-xs text-white" onClick={handleRegister}>Login</button>
      <div className="h-12" />
      <h4>
        Have an account?{" "}
        <span style={{ color: "rgba(148, 120, 62, 1)" }}>Login here</span>
      </h4>
    </div>
  )
}
