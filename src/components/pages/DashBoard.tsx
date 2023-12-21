import React from 'react'
import BaseLayout from '../templates/BaseLayout'
import SummaryCard from './SummaryCard'


const DashBoard = () => {
  const chartData = {
    labels: ['数学', '英語', '科学', '歴史'],
    datasets: [
      {
        label: '成績',
        data: [85, 90, 75, 70],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
      }
    ]
  };


  return (
    <BaseLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">ダッシュボード</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SummaryCard title="成績の概要" chartData={chartData} />
        </div>
      </div>
    </BaseLayout>
  )
}

export default DashBoard