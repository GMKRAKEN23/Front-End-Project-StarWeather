// Hand over the data up to date weather forecast
const chartLabels = [];
const chartData = [];

const ctx = document.getElementById('myChart');

// Weather graphics configuration
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartLabels,
    datasets: [{
      label: '5 Days Temperature Forecast',
      data: chartData,
      borderWidth: 1,
      borderColor: 'rgb(251, 215, 146)',
    }]
  },
  options: {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgb(251, 215, 146)'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(251, 215, 146)' 
        },
        grid: {
          color: 'rgb(251, 215, 146)' // Couleur des grilles de l'axe des y
        }
      },
      y: {
        responsive: true,
        beginAtZero: true,
        ticks: {
          color: 'rgb(251, 215, 146)' 
        },
        grid: {
          color: 'rgb(251, 215, 146)' // Couleur des grilles de l'axe des y
        }
      }
    },
    responsive: true,
  }
});

// Change the height and width of the chart
myChart.canvas.parentNode.style.height = '208px';
myChart.canvas.parentNode.style.width = '368px';

export { chartLabels, chartData, ctx, myChart }