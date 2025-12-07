import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
    <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    signInFallbackRedirectUrl="/ai/article"
      signUpFallbackRedirectUrl="/ai/article"
      signInForceRedirectUrl="/ai/article"
      signUpForceRedirectUrl="/ai/article" >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ClerkProvider>

)
