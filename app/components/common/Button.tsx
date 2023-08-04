import React from 'react';
import Link from 'next/link';

interface CustomButtonProps {
  backgroundColor: string;
  textColor: string;
  hoverColor: string;
  href: string; // Add the href prop
  children: React.ReactNode;
}

const Button: React.FC<CustomButtonProps> = ({
  backgroundColor,
  textColor,
  hoverColor,
  href, // Destructure the href prop
  children,
}) => {
  const buttonStyles: React.CSSProperties = {
    fontSize: '14px',
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: `var(${backgroundColor})`,
    color: textColor,
  };

  const hoverStyles: React.CSSProperties = {
    color: `var(${hoverColor})`,
  };

  return (
    <Link href={href}>
        <div
          className="px-7 py-3 text-sm rounded-md button-behaviour"
          style={buttonStyles}
        >
          <span style={hoverStyles}>{children}</span>
        </div>
    </Link>
  );
};

export default Button;
