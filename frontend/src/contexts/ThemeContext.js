// src/contexts/ThemeContext.js
import React, { createContext, useState } from 'react';

// Tạo context
export const ThemeContext = createContext();

// Tạo một provider để cung cấp giá trị cho toàn bộ ứng dụng
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // mặc định là theme light

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children} {/* Các component con sẽ nhận được context */}
    </ThemeContext.Provider>
  );
};
