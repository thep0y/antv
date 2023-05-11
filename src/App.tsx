import React from 'react'
import './App.css'
import { Chart } from '@antv/g2'
import { interval } from './charts'

type Render = (chart: Chart) => void

const charts: Record<string, Render> = {
  条形图: interval
}

const App: React.FC = () => {
  // 初始化图表实例
  const chart = new Chart({
    container: 'root',
    theme: 'classic'
  })

  return (
    <>
      {Object.keys(charts).map((name, idx) => (
        <button key={idx} onClick={() => { charts[name](chart) }}>
          {name}
        </button>
      ))}
    </>
  )
}

export default App
