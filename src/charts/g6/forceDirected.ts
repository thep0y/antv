import { Graph } from '@antv/g6'

export const forceDirected = (graph: Graph): void => {
  const data = {
    nodes: [
      { id: 'node0', size: 50 },
      { id: 'node1', size: 30 },
      { id: 'node2', size: 30 },
      { id: 'node3', size: 30 },
      { id: 'node4', size: 30, isLeaf: true },
      { id: 'node5', size: 30, isLeaf: true },
      { id: 'node6', size: 15, isLeaf: true },
      { id: 'node7', size: 15, isLeaf: true },
      { id: 'node8', size: 15, isLeaf: true },
      { id: 'node9', size: 15, isLeaf: true },
      { id: 'node10', size: 15, isLeaf: true },
      { id: 'node11', size: 15, isLeaf: true },
      { id: 'node12', size: 15, isLeaf: true },
      { id: 'node13', size: 15, isLeaf: true },
      { id: 'node14', size: 15, isLeaf: true },
      { id: 'node15', size: 15, isLeaf: true },
      { id: 'node16', size: 15, isLeaf: true },
    ],
    edges: [
      { source: 'node0', target: 'node1' },
      { source: 'node0', target: 'node2' },
      { source: 'node0', target: 'node3' },
      { source: 'node0', target: 'node4' },
      { source: 'node0', target: 'node5' },
      { source: 'node1', target: 'node6' },
      { source: 'node1', target: 'node7' },
      { source: 'node2', target: 'node8' },
      { source: 'node2', target: 'node9' },
      { source: 'node2', target: 'node10' },
      { source: 'node2', target: 'node11' },
      { source: 'node2', target: 'node12' },
      { source: 'node2', target: 'node13' },
      { source: 'node3', target: 'node14' },
      { source: 'node3', target: 'node15' },
      { source: 'node3', target: 'node16' },
    ],
  }
  const nodes = data.nodes

  graph.clear()

  graph.data({
    nodes,
    edges: data.edges.map(function (edge, i) {
      edge.id = 'edge' + i

      return Object.assign({}, edge)
    }),
  })
  graph.render()

  graph.on('node:dragstart', function (e) {
    graph.layout()
    refreshDragedNodePosition(e)
  })
  graph.on('node:drag', function (e) {
    refreshDragedNodePosition(e)
  })
  graph.on('node:dragend', function (e) {
    e.item.get('model').fx = null
    e.item.get('model').fy = null
  })

  if (typeof window !== 'undefined')
    window.onresize = () => {
      if (!graph || graph.get('destroyed')) return
      if (!container || !container.scrollWidth || !container.scrollHeight)
        return
      graph.changeSize(container.scrollWidth, container.scrollHeight)
    }

  function refreshDragedNodePosition(e) {
    const model = e.item.get('model')

    model.fx = e.x
    model.fy = e.y
  }
}
