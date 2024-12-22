import * as React from 'react';
import { TextField } from '@nativescript/core';

interface AnswerInputProps {
  value: string;
  onTextChange: (value: string) => void;
}

export function AnswerInput({ value, onTextChange }: AnswerInputProps) {
  return (
    <textField
      className="bg-purple-50 p-4 rounded-xl text-purple-900 text-lg"
      hint="Type your answer here..."
      text={value}
      onTextChange={(e) => onTextChange(e.value)}
    />
  );
}