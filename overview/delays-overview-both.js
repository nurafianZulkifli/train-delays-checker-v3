
const doverview24sm = document.getElementById('delays-overview-sm-24').getContext('2d');

const doverviewsm24 = new Chart(doverview24sm, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "SMRT Trains",
      data: [1,1,2,1,1,1,2,2,9,3,0,7],
      borderColor: 'rgb(207, 61, 61)',
      fill: true,
      backgroundColor: 'rgba(207, 61, 61,0.05)',
      borderWidth: 3
    },

    {
      label: "SBS Transit",
      data: [2,0,0,1,2,1,0,0,0,0,0,0],
      borderColor: 'rgb(130, 71, 148)',
      fill: true,
      backgroundColor: 'rgba(130, 71, 148,0.05)',
      borderWidth: 3
    }]//
  },



  options: {
    responsive: true,
    maintainAspectRatio: false,
    
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: true
      },
    }
  }
});