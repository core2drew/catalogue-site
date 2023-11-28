import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/tailwind-light/theme.css';

export function App() {
  return <RouterProvider router={routes} />;
}

export default App;
