import React from 'react';

const Button = ({ text, href, variant = 'primary', icon, fullWidth = false, external = false }) => {
  const baseClasses = "button";
  const variantClasses = {
    primary: "button-primary",
    secondary: "button-secondary",
    telegram: "button-telegram",
    twitter: "button-twitter"
  };
  
  const widthClass = fullWidth ? "button-full" : "";
  
  const buttonContent = (
    <>
      {icon && <span className="button-icon">{icon}</span>}
      {text}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : ""}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}>
      {buttonContent}
    </button>
  );
};

export default Button;