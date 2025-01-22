import ReactDOM from 'react-dom/client';

import '@repo/ui/styles.css';
import App from './app';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
