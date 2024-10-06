import { useMemo } from "react";

interface Expense {
  category: string;
  amount: number;
}

interface ChartData {
  labels: string[];
  data: number[];
  backgroundColors: string[];
}

const useExpenseChartData = (filteredExpenses: Expense[]): ChartData => {
  const chartData = useMemo(() => {
    const groupedExpenses = filteredExpenses.reduce(
      (acc, curr) => {
        const idx = acc.findIndex((item) => item.category === curr.category);
        if (idx !== -1) {
          acc[idx].amount += curr.amount;
        } else {
          acc.push({ category: curr.category, amount: curr.amount });
        }
        return acc;
      },
      [] as { category: string; amount: number }[],
    );

    const labels = groupedExpenses.map((item) => item.category);
    const data = groupedExpenses.map((item) => item.amount);

    const backgroundColors = [
      "rgba(75, 192, 192, 0.6)",
      "rgba(255, 99, 132, 0.6)",
      "rgba(255, 206, 86, 0.6)",
      "rgba(54, 162, 235, 0.6)",
      "rgba(153, 102, 255, 0.6)",
      "rgba(255, 159, 64, 0.6)",
    ];

    return {
      labels,
      data,
      backgroundColors: backgroundColors.slice(0, labels.length),
    };
  }, [filteredExpenses]);

  return chartData;
};

export default useExpenseChartData;
