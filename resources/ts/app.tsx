import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOM from 'react-dom'

import "../css/app.css"
import Welcome from './Pages/Welcome'

const el = document.getElementById('app') as HTMLElement

ReactDOM.render(
  <React.StrictMode>
    <InertiaApp
      initialPage={JSON.parse(el.dataset.page as string)}
      resolveComponent={async (name) => (await import(`./Pages/${name}.tsx`)).default}
    />
  </React.StrictMode>,
  el
)
