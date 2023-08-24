import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Routers/AppRouter';
import {NoteContextProvider} from './context/NoteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <NoteContextProvider>
        <AppRouter />
    </NoteContextProvider>
    
  
);


