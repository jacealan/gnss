import { useState, useEffect } from "react"
import { Routes, Route, Outlet, Link } from "react-router-dom"
import Layout from "./components/layout"
import Home from "./routes/home"
import Home1 from "./routes/home1"
import Home2 from "./routes/home2"
import Branch from "./routes/branch"
import Schedule from "./routes/schedule"
import Presentation from "./routes/presentation"
import GetSheet from "./getsheet"

function App() {
  const [viewSize, setViewSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      })
    })
  }, [])

  return (
    <Routes basename={`${process.env.PUBLIC_URL}`}>
      <Route
        path={`${process.env.PUBLIC_URL}/`}
        element={<Layout viewSize={viewSize} />}
      >
        <Route index element={<Home viewSize={viewSize} />} />
        <Route path="1" element={<Home1 viewSize={viewSize} />} />
        <Route path="2" element={<Home2 viewSize={viewSize} />} />
        <Route path="branch/">
          <Route path=":branchId" element={<Branch viewSize={viewSize} />} />
          <Route
            path=":branchId/schedule/:yearId"
            element={<Schedule viewSize={viewSize} />}
          />
          <Route
            path=":branchId/presentation/:yearId"
            element={<Presentation viewSize={viewSize} />}
          />
        </Route>
        <Route path="*" element={<Home viewSize={viewSize} />} />
      </Route>

      <Route
        path={`${process.env.PUBLIC_URL}/g`}
        element={<GetSheet viewSize={viewSize} />}
      ></Route>
    </Routes>
  )
}

export default App
