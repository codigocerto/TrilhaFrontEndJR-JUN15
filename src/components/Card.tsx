import React from 'react';

interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800 m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-200">{title}</div>
        <p className="text-gray-700 dark:text-gray-400 text-base">
          {description}
        </p>
      </div>
      {children && <div className="px-6 pt-4 pb-2">{children}</div>}
    </div>
  );
};

export default Card;
