import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

import Routes from './routes';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Auth0Provider  
            domain='trulyaman25.us.auth0.com'
            clientId='SpoaoNgCvmEP1u60EfYl43Q5aZnoa9u2'
            authorizationParams={{ redirect_uri: window.location.origin }} 
        >
            <Routes />
        </Auth0Provider>
    </StrictMode>
);
