import { useState } from 'react';

export function useAuth() {
  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth
    setTimeout(() => {
      setLoading(false);
      alert(`Logged in as ${role} with ${email}`);
    }, 800);
  };

  return {
    role,
    setRole,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin
  };
}
