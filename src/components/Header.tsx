import React, { memo } from 'react'
import { interval, graph } from '~/charts'
import { type Chart } from '@antv/g2'

type Render = (chart: Chart) => void

const charts: Record<string, Render> = {
  条形图: interval,
  网络关系图: graph
}

interface HeaderProps {
  chart: Chart
  resetChart: () => void
}

const Header = memo(({ chart, resetChart }: HeaderProps) => {
  const render = (name: string): void => {
    resetChart()

    charts[name](chart)
  }

  return (
    <>
      {Object.keys(charts).map((name, idx) => (
        <button key={idx} onClick={() => { render(name) }}>
          {name}
        </button>
      ))}
    </>
  )
})

Header.displayName = 'Header'

export default Header
