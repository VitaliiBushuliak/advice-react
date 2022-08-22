import {Root, createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from 'app/store';
import {App} from 'App';

const container: HTMLElement = document.getElementById('root')!;
const root: Root = createRoot(container);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
