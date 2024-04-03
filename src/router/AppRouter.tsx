import { Routes, Route } from 'react-router-dom'
import { ROUTES } from '../utilities/routes'

import { Home } from '../pages/public'
import { Plans } from '../pages/private'

export const AppRouter = () => {

  return (
    <Routes>
      <Route path={ROUTES.PUBLIC.HOME} element={<Home />} />

      <Route path={ROUTES.PRIVATE.PLANS} element={<Plans />} />
    </Routes>
  )
}
