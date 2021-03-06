import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { Box } from '@mui/system';
import { LinearProgress } from '@mui/material';

interface ChartProps {
  currentIntraDay: string[][];
}

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

export default function DashboardChart({ currentIntraDay }: ChartProps) {
  if (!currentIntraDay || !currentIntraDay[0])
    return (
      <Box sx={{ width: '100%', marginTop: '4rem' }}>
        <LinearProgress />
      </Box>
    );
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: 'gray',
    },
    grid: {
      show: true,
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: 'gray',
      },
      axisTicks: {
        color: 'gray',
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
      height='400px'
      width='100%'
    />
  );
}
