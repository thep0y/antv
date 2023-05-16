import { Chart } from '@antv/g2'
import { Graph } from '@antv/g6'
import React, { memo, useState } from 'react'
import { interval } from '~/charts/g2'
// import { type Chart } from '@antv/g2'
import { newGraph, forceDirected } from "~/charts/g6"


interface Instance {
  clear: () => void
}

type Render = (chat: Chart) => void
type GraphRender = (graph: Graph) => void

enum RenderType {
  G2,
  G6
}

const g6Charts: Record<string, GraphRender> = {
  // 条形图: interval,
  网络关系图: forceDirected
}

const g2Charts: Record<string, Render> = {
  条形图: interval,
}

interface HeaderProps {
  element: HTMLDivElement
}


const Header = memo(({ element }: HeaderProps) => {
  const [instance, setInstance] = useState<Instance | null>(null)

  const render = (rt: RenderType, name: string) => {
    if (instance) {
      instance.clear()

      if (rt === RenderType.G6) {
        g6Charts[name](instance as Graph)
      } else {
        g2Charts[name](instance as Chart)
      }
    } else {
      if (rt === RenderType.G6) {
        const i = newGraph(element)

        setInstance(i)
        g6Charts[name](i)
      } else {
        g2Charts[name](instance as Chart)
      }
    }
  }

  const generateButtons = (): React.ReactElement[] => {
    const buttons: React.ReactElement[] = []

    Object.keys(g6Charts).map((name, idx) => {
      buttons.push(<button key={'g6' + idx} onClick={() => render(1, name)}>{name}</button>)
    })

    return buttons
  }

  return (
    <div id='charts'>
      {...generateButtons()}
    </div>
  )
})

Header.displayName = 'Header'

export default Header
