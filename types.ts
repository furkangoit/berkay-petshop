import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string; // Main display image (fallback)
  images?: string[]; // Optional array for gallery
  description: string;
  stock: number; // Available inventory count
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}