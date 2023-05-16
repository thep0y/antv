import { Graph } from '@antv/g6'

export const newGraph = (element: HTMLDivElement): Graph => {
  const graph = new Graph({
    container: element,
    layout: {
      type: 'force',
      preventOverlap: true,
      linkDistance: (d) => {
        if (d.source.id === 'node0') {
          return 100
        }

        return 30
      },
      nodeStrength: (d) => {
        if (d.isLeaf) {
          return -50
        }

        return -10
      },
      edgeStrength: (d) => {
        if (
          d.source.id === 'node1' ||
          d.source.id === 'node2' ||
          d.source.id === 'node3'
        ) {
          return 0.7
        }

        return 0.1
      },
    },
    defaultNode: {
      color: '#5B8FF9',
    },
    modes: {
      default: ['drag-canvas'],
    },
  })

  return graph
}

export * from './forceDirected'
