import * as React from 'react';
import { StyleSheet } from "react-nativescript";

interface HintModalProps {
  hint: string;
  isVisible: boolean;
  onClose: () => void;
}

export function HintModal({ hint, isVisible, onClose }: HintModalProps) {
  if (!isVisible) return null;

  return (
    <absoluteLayout className="bg-black bg-opacity-50 w-full h-full">
      <stackLayout className="story-card bg-white rounded-2xl p-6 m-8" verticalAlignment="center">
        <gridLayout rows="auto" columns="*, auto" className="mb-4">
          <label col={0} className="text-purple-900 text-xl font-bold">Hint Revealed</label>
          <button 
            col={1}
            className="text-gray-400 text-lg p-2"
            onTap={onClose}
          >
            ✕
          </button>
        </gridLayout>
        
        <label className="text-purple-700 text-lg mb-6 leading-relaxed" textWrap={true}>{hint}</label>
        
        <button 
          className="hint-button bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-xl"
          onTap={onClose}
        >
          Got it!
        </button>
      </stackLayout>
    </absoluteLayout>
  );
}