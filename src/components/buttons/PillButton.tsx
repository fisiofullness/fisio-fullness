import React from 'react';

type PillButtonVariant = 'primary' | 'outline';

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PillButtonVariant;
  children: React.ReactNode;
}

const PillButton: React.FC<PillButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-[16px] transition-all duration-300 px-8 py-3 hover:shadow-lg flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary-light',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default PillButton;
