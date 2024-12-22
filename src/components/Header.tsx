import * as React from 'react';
import { StyleSheet } from "react-nativescript";

interface HeaderProps {
  user: {
    name: string;
    level: number;
    coins: number;
    score: number;
  };
}

export function Header({ user }: HeaderProps) {
  return (
    <gridLayout rows="auto" columns="*, *, *" className="px-4 py-6 bg-white border-b border-purple-100">
      <stackLayout col={0} className="header-stat bg-white rounded-xl p-3 m-1">
        <label className="text-purple-900 text-sm">PLAYER</label>
        <label className="text-orange-500 text-xl font-bold">{user.name}</label>
        <label className="text-purple-600 text-xs">Level {user.level}</label>
      </stackLayout>
      
      <stackLayout col={1} className="header-stat bg-white rounded-xl p-3 m-1">
        <label className="text-purple-900 text-sm">COINS</label>
        <label className="text-orange-500 text-xl font-bold">{user.coins}</label>
        <label className="text-purple-600 text-xs">Available</label>
      </stackLayout>
      
      <stackLayout col={2} className="header-stat bg-white rounded-xl p-3 m-1">
        <label className="text-purple-900 text-sm">SCORE</label>
        <label className="text-orange-500 text-xl font-bold">{user.score}</label>
        <label className="text-purple-600 text-xs">Total</label>
      </stackLayout>
    </gridLayout>
  );
}