import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: string;
  rightLabel?: React.ReactNode;
  rightIcon?: string;
  onRightIconClick?: () => void;
}

export function InputField({ label, icon, rightLabel, rightIcon, onRightIconClick, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center px-1">
        <label className="text-xs font-bold font-label uppercase tracking-wider text-on-surface-variant flex-grow" htmlFor={props.id}>
          {label}
        </label>
        {rightLabel}
      </div>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-outline text-lg group-focus-within:text-primary transition-colors">
            {icon}
          </span>
        </div>
        <input 
          className="block w-full pl-11 pr-4 py-3.5 bg-surface-container-highest border-none rounded-lg focus:ring-1 focus:ring-surface-tint focus:bg-surface-container-lowest transition-all text-sm placeholder:text-outline/60"
          {...props}
        />
        {rightIcon && (
          <div 
            className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer"
            onClick={onRightIconClick}
          >
            <span className="material-symbols-outlined text-outline text-lg hover:text-on-surface transition-colors">
              {rightIcon}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
