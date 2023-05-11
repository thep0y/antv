import React, { useState, lazy } from 'react'
import './App.css'
import { Chart } from '@antv/g2';
import { interval } from "./charts"


const charts = {
  '条形图':interval 
}


const App: React.FC = () => {
  // 初始化图表实例
  const chart = new Chart({
    container: 'root',
    theme: 'classic',
  });

  return (
    <>
      {Object.keys(charts).map(name => (
        <button onClick={() => charts[name](chart)}>{name}</button>
      ))
      }
    </>
  )
}

export default App
