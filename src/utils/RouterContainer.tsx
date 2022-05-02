import React, { Suspense } from "react"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom"
const Home = React.lazy(() => import("../pages/Home"))
const Help = React.lazy(() => import("../pages/Help"))

const RouterContainer = ({ children }: any) => {
    return <Router>

        {children}
        <Routes>
            <Suspense fallback={<div>Loading...</div>}>
                <Route path="/" element={<Home />} />
                <Route path="/help" element={<Help />} />
            </Suspense>
        </Routes>
    </Router>
}

export default RouterContainer
