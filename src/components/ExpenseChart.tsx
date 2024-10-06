import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import useExpenseChartData from "./useExpenseChartData";
import "./ExpenseChart.css";

Chart.register(...registerables);

interface ExpenseChartProps {
  filteredExpenses: { category: string; amount: number }[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ filteredExpenses }) => {
  const { labels, data, backgroundColors } =
    useExpenseChartData(filteredExpenses);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };

  return (
    <div className="expense-chart-container">
      <h2 className="expense-chart-title">Expenses by Category</h2>
      <div className="expense-chart-legend">
        {labels.map((label, index) => (
          <div key={label} className="expense-chart-legend-item">
            <div
              className="expense-chart-legend-color"
              style={{ backgroundColor: backgroundColors[index] }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <Bar
        data={chartData}
        options={{ plugins: { legend: { display: false } } }}
      />
    </div>
  );
};

export default ExpenseChart;
