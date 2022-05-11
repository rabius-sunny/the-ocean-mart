import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const Home = React.lazy(() => import('../pages/Home'))
const Help = React.lazy(() => import('../pages/Help'))

const RouterContainer = ({ children }: any) => {
  return (
    <Router>
      {children}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default RouterContainer
