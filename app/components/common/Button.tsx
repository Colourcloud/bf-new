import React from 'react';
import Link from 'next/link';

interface CustomButtonProps {
  backgroundColor: string;
  textColor: string;
  href: string;
  className?: string; // Accept an optional className prop
  children: React.ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({
  backgroundColor,
  textColor,
  href,
  className, // Destructure the className prop
  children,
}) => {
  const buttonStyles: React.CSSProperties = {
    fontSize: '14px',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: `var(${backgroundColor})`,
    color: textColor,
  };

  return (
    <Link href={href} className='self-start'>
      <div
        className={`px-7 py-3 text-sm font-medium rounded-md button-behaviour ${
          className || ''
        }`}
        style={buttonStyles}
      >
        <span>{children}</span>
      </div>
    </Link>
  );
};

export default Button;
