import { create } from "zustand";

export type ThemeMode = 'light' | 'dark'

interface ThemeState {
    theme: ThemeMode
    toggleTheme: () => void
    setTheme: (theme: ThemeMode) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
    theme: 'light',
    toggleTheme: () => set((state) => ({
        theme: state.theme === 'dark' ? 'light' : 'dark'
    })),
    setTheme: (theme) => set({ theme })
}))