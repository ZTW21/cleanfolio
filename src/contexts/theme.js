import { createContext } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={[{ themeName: 'dark' }]}>
    {children}
  </ThemeContext.Provider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
