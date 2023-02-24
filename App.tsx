import { ThemeProvider } from 'styled-components'
import { theme } from '@theme/default'

import { Groups } from '@screens/Groups'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}

