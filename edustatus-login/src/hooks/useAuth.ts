import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const navigate = useNavigate();
  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [email, setEmail] = useState('demo@university.edu');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate auth
    setTimeout(() => {
      setLoading(false);
      if (role === 'teacher') {
        navigate('/teacher');
      } else {
        navigate('/student');
      }
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
