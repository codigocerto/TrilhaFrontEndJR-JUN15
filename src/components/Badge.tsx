import React from 'react';
import classNames from 'classnames';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'primary', className }) => {
  const baseClasses = 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium';

  const colorClasses = classNames({
    'bg-blue-100 text-blue-800': color === 'primary',
    'bg-gray-100 text-gray-800': color === 'secondary',
    'bg-green-100 text-green-800': color === 'success',
    'bg-red-100 text-red-800': color === 'danger',
    'bg-yellow-100 text-yellow-800': color === 'warning',
  });

  return (
    <span className={`${baseClasses} ${colorClasses} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
