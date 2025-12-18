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
  // Increased height (h-14), padding (px-10), and font weight (font-semibold) for heavier feel
  const baseStyles = "inline-flex items-center justify-center rounded-sm text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none tracking-wide h-14 px-10";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 focus:ring-white border border-white",
    secondary: "bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-900 border border-neutral-800",
    outline: "bg-transparent text-white border border-neutral-700 hover:border-neutral-500 hover:text-white"
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
      {withArrow && <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
};

export default Button;