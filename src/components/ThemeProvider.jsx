import React, { createContext, useContext, useMemo, useState } from 'react'

const themes = {
  electricBlue: {
    name: 'electricBlue',
    primary: '#60A5FA',
    accent: '#22D3EE',
    glow: 'rgba(96,165,250,0.6)',
    bgGrad: 'linear-gradient(135deg, #0B1220 0%, #0A1020 60%, #0B1220 100%)',
  },
  neonGreen: {
    name: 'neonGreen',
    primary: '#34D399',
    accent: '#A7F3D0',
    glow: 'rgba(52,211,153,0.6)',
    bgGrad: 'linear-gradient(135deg, #0A1411 0%, #0B1713 60%, #0A1411 100%)',
  },
  ultraviolet: {
    name: 'ultraviolet',
    primary: '#A78BFA',
    accent: '#C4B5FD',
    glow: 'rgba(167,139,250,0.6)',
    bgGrad: 'linear-gradient(135deg, #0F0A1A 0%, #120B1F 60%, #0F0A1A 100%)',
  },
}

const ThemeContext = createContext({ theme: themes.electricBlue, setTheme: () => {} })

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState('electricBlue')

  const value = useMemo(() => ({
    theme: themes[themeKey],
    setTheme: (key) => setThemeKey(key in themes ? key : 'electricBlue'),
    themes,
  }), [themeKey])

  return (
    <ThemeContext.Provider value={value}>
      <div
        style={{
          '--primary': value.theme.primary,
          '--accent': value.theme.accent,
          '--glow': value.theme.glow,
          '--bg-grad': value.theme.bgGrad,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
