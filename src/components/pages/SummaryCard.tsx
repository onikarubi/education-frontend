import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

interface SummaryCardProps {
  title: string;
  chartData?: any;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, chartData }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="font-semibold text-lg">{title}</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default SummaryCard;
