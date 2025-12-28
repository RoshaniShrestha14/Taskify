import React from 'react'
import Homepage from './Pages/Homepage'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <Homepage></Homepage>
      </div>
    </ErrorBoundary>
  )
}

export default App
