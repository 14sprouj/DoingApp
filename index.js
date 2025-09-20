import { createRoot } from 'react-dom/client'
import './i18n'
//import { registerRootComponent } from 'expo'
import App from './App' // or './src/App' if that's where it is

//registerRootComponent(App)

const root = createRoot(document.getElementById('root'))
root.render(<App />)
