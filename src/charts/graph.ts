import type { Chart } from '@antv/g2'

export const graph = (chart: Chart): void => {
  chart
    .forceGraph()
    .data({
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/miserable.json'
    })
    .scale(
      'color', {
        range: [
          '#4e79a7',
          '#f28e2c',
          '#e15759',
          '#76b7b2',
          '#59a14f',
          '#edc949',
          '#af7aa1',
          '#ff9da7',
          '#9c755f',
          '#bab0ab'
        ]
      }
    )
  void chart.render()
}
