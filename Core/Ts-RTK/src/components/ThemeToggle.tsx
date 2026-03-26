import { useThemeStore } from "../store/themeStore";

const ThemeToggle = () => {
    const { theme, toggleTheme, setTheme } = useThemeStore()

    return (
        <div style={{ backgroundColor: theme === 'dark' ? 'red' : 'white', color: theme === 'dark' ? 'white' : 'red' }}>
            <p>now theme is {theme}</p>
            <p><button onClick={toggleTheme}>toggleTheme</button></p>
            <p><button onClick={() => setTheme('dark')}>dark</button></p>
        </div>
    )
}

export default ThemeToggle