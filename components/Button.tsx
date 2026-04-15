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
  const baseStyles = "inline-flex items-center justify-center rounded-sm text-sm font-display font-bold transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none tracking-[0.1em] uppercase group";
  
  const variants = {
    primary: "bg-gold text-dark hover:bg-gold/90 border border-gold gold-glow",
    secondary: "bg-plum-light text-white hover:bg-plum-light/90 border border-plum-light",
    outline: "bg-transparent text-white border border-white/20 hover:border-gold hover:text-gold"
  };

  const defaultSize = "h-14 px-10";

  return (
    <button 
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${!className.includes('h-') ? defaultSize : ''}
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