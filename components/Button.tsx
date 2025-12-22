import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  withArrow = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-sm text-sm font-bold transition-all duration-500 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none tracking-[0.1em] uppercase h-16 px-12 group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 border border-white",
    secondary: "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800",
    outline: "bg-transparent text-white border border-white/10 hover:border-white/30"
  };

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" strokeWidth={2.5} />}
    </button>
  );
};

export default Button;