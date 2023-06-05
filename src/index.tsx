import ReactDOM from 'react-dom/client';
import { Root } from './root';
import { HashRouter as Router } from 'react-router-dom'
import * as serviceWorkerRegistration from './services/service-worker/serviceWorkerRegistration';
import { Provider } from 'react-redux'
import { store } from './store/store'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Router>
    <Provider store={store}>
      <Root />
    </Provider >
  </Router>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();