import * as React from 'react';
import { button } from '@nativescript/core';

interface PrimaryButtonProps {
  text: string;
  onTap: () => void;
  variant?: 'purple' | 'orange' | 'gray';
  className?: string;
  size?: 'small' | 'normal';
}

export function PrimaryButton({ 
  text, 
  onTap, 
  variant = 'purple', 
  className = '',
  size = 'normal'
}: PrimaryButtonProps) {
  const getVariantClass = () => {
    switch (variant) {
      case 'orange':
        return 'bg-orange-500';
      case 'gray':
        return 'bg-gray-500';
      default:
        return 'bg-purple-600';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'p-2 text-sm';
      default:
        return 'p-3';
    }
  };

  return (
    <button
      className={`-primary ${getVariantClass()} ${getSizeClass()} text-white rounded-xl ${className}`}
      onTap={onTap}
      text={text}
    />
  );
}