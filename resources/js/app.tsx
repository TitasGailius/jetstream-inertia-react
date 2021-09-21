import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOM from 'react-dom'

import "tailwindcss/tailwind.css"
import "../css/app.css"

const el = document.getElementById('app') as HTMLElement

ReactDOM.render(
  <React.StrictMode>
    <InertiaApp
      initialPage={JSON.parse(el.dataset.page as string)}
      resolveComponent={async (name) => (await import(`./pages/${name}.tsx`)).default}
    />
  </React.StrictMode>,
  el
)
