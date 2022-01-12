import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

interface ChartProps {
  currentIntraDay: string[][];
}

export default function DashboardChart({ currentIntraDay }: ChartProps) {
  console.log(currentIntraDay)
  if (!currentIntraDay) return <div>carregando...</div>;
  if (!currentIntraDay[0]) return <div>carregando...</div>;
  console.log(currentIntraDay);
  console.log(currentIntraDay[0][0]);
  console.log(currentIntraDay[1][0]);
  console.log(currentIntraDay[2][0]);
  console.log(currentIntraDay[3][0]);
  console.log(currentIntraDay[4][0]);
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: ' #444',
    },
    grid: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: 'black',
      },
      axisTicks: {
        color: '#ffffff',
      },
      categories: [
        currentIntraDay[7][0],
        currentIntraDay[6][0],
        currentIntraDay[5][0],
        currentIntraDay[4][0],
        currentIntraDay[3][0],
        currentIntraDay[2][0],
        currentIntraDay[1][0],
        currentIntraDay[0][0],
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };
  const series = [
    {
      name: 'series1',
      data: [
        currentIntraDay[7][1],
        currentIntraDay[6][1],
        currentIntraDay[5][1],
        currentIntraDay[4][1],
        currentIntraDay[3][1],
        currentIntraDay[2][1],
        currentIntraDay[1][1],
        currentIntraDay[0][1],
      ],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type='area'
      height={400}
      width={900}
    />
  );
}
