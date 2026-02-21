const ctx = document.getElementById('chart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['B.Sc', 'BBA', 'B.Tech', 'MBA'],
    datasets: [{
      label: 'Students',
      data: [320, 280, 410, 240],
      backgroundColor: [
        '#3b82f6',
        '#10b981',
        '#f97316',
        '#8b5cf6'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});