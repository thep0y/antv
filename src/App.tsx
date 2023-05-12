import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from '~/components/Header'
import { Chart } from '@antv/g2'

const App: React.FC = () => {
  const containerRef = useRef(null)
  const [chart, setChart] = useState<Chart | null>(null)
  const [isContainerReady, setIsContainerReady] = useState(false)

  useEffect(() => {
    if (containerRef.current) {
      setIsContainerReady(true)
      newChart()
    }
  }, [containerRef])

  const newChart = (): void => {
    setChart(new Chart({
      container: 'container',
      theme: 'classic'
    }))
  }

  const resetChart = (): void => {
    if (chart) newChart()
  }

  return (
    <>
      {
        isContainerReady && chart ? <Header chart={chart} resetChart={resetChart} /> : null
      }

      <div id="container" ref={containerRef}></div>
    </>
  )
}

export default App
