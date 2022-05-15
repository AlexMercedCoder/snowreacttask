import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { TaskStore } from './taskstore';
import './index.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <TaskStore>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </TaskStore>
  </Router>,
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
