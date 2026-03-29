import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: string;
}

export function Button({ variant = 'primary', icon, children, className = '', ...props }: ButtonProps) {
  const baseClasses = "w-full py-4 font-headline font-bold rounded-lg tracking-wide transition-all flex items-center justify-center gap-2 group outline-none";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-black/80 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] active:scale-[0.98]",
    secondary: "py-3.5 bg-surface-container-high text-on-surface text-sm hover:bg-surface-container-highest",
    ghost: "bg-transparent text-on-surface hover:bg-surface-container-low"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </button>
  );
}
