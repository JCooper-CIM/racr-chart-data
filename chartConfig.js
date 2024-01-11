Chart.register(ChartDataLabels);
Chart.defaults.font.size = 12;
Chart.defaults.font.family = "'Open Sans', 'Arial', sans-serif";
/* MAX DRAWDOWN */
window.onload = async () => {
fetch('https://x8ki-letl-twmt.n7.xano.io/api:x7PovgWp/max_drawdown', {
    method: 'GET',
})
    .then((res) => res.json())
    .then((data) => {
    const dates = data.map(item => item.Date);
    const racrValues = data.map(item => item.RACR);
    const frlValues = data.map(item => item.FRL);
    const hybValues = data.map(item => item.HYB);
    const buaValues = data.map(item => item.BUA);
    const igbValues = data.map(item => item.IGB);
    const drawdownChart = document.getElementById('drawdownChart');

    new Chart(drawdownChart, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
        label: 'RACR - I Share',
        data: racrValues,
        backgroundColor: '#fe9016',
        borderColor: '#fe9016'
        }, {
        label: 'Floating Rate Loans',
        data: frlValues,
        backgroundColor: '#b8dde7',
        borderColor: '#b8dde7'
        }, {
        label: 'High Yield Bonds',
        data: hybValues,
        backgroundColor: '#c7532c',
        borderColor: '#c7532c'
        }, {
        label: 'Bloomberg US Agg',
        data: buaValues,
        backgroundColor: '#898a8d',
        borderColor: '#898a8d'
        }, {
        label: 'Investment Grade Bonds',
        data: igbValues,
        backgroundColor: '#1c83a8',
        borderColor: '#1c83a8'
        }]
    },
    options: {
        plugins: {
        datalabels: {
            display: false
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
            padding: 30,
            boxWidth: 10,
            boxHeight: 10
            }
        }
        },
        responsive: true,
        scales:{
        x:{
            min: '9/30/2020',
            max: '9/30/2023',
            position: 'top',
            ticks:{
            align: 'inner',
            display: true,
            //autoSkip: false,
            maxTicksLimit: 7
            },
            grid:{
            display: false
            }
        },
        y:{
            min: -25,
            max: 0,
            ticks: {
            stepSize: 2.5
            },
            gridLines:{
            display: false
            }
        }
        }
    }
    });
});

/* GROWTH 10K */
fetch('https://x8ki-letl-twmt.n7.xano.io/api:x7PovgWp/growth_10k', {
    method: 'GET',
})
    .then((res) => res.json())
    .then((data) => {
    const dates = data.map(item => item.Date);
    const racrValues = data.map(item => item.RACR);
    const hybValues = data.map(item => item.HYB);
    const buaValues = data.map(item => item.BUA);
    const igbValues = data.map(item => item.IGB);
    const frlValues = data.map(item => item.FRL);
    const growthChart = document.getElementById('growthChart');

    new Chart(growthChart, {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
        label: 'RACR - I Share',
        data: racrValues,
        backgroundColor: '#fe9016',
        borderColor: '#fe9016'
        }, {
        label: 'Floating Rate Loans',
        data: frlValues,
        backgroundColor: '#b8dde7',
        borderColor: '#b8dde7'
        }, {
        label: 'High Yield Bonds',
        data: hybValues,
        backgroundColor: '#c7532c',
        borderColor: '#c7532c'
        }, {
        label: 'Bloomberg US Agg',
        data: buaValues,
        backgroundColor: '#898a8d',
        borderColor: '#898a8d'
        }, {
        label: 'Investment Grade Bonds',
        data: igbValues,
        backgroundColor: '#1c83a8',
        borderColor: '#1c83a8'
        }]
    },
    options: {
        plugins: {
        tooltip: {
            callbacks: {
            label: function(context) { return context.dataset.label + ': $' + context.parsed.y.toLocaleString(); }
            }
        },
        datalabels: {
            display: false
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
            padding: 30,
            boxWidth: 10,
            boxHeight: 10
            }
        }
        },
        responsive: true,
        scales:{
        x:{
            offset: true,
            min: '10/31/2020',
            max: '10/31/2023',
            position: 'bottom',
            ticks:{
            align: 'inner',
            display: true,
            //autoSkip: true,
            maxTicksLimit: 7,
            //minRotation: 45
            },
            grid:{
            display: false,
            }
        },
        y:{
            min: 7750,
            max: 13750,
            ticks: {
            callback: function(value, index, ticks) {return '$' + value.toLocaleString();},
            stepSize: 750,
            },
            gridLines:{
            display: false
            }
        }
        }
    }
    });
});

/* TAX ILLUSTRATION */
fetch('https://x8ki-letl-twmt.n7.xano.io/api:x7PovgWp/tax_illustration', {
    method: 'GET',
})
    .then((res) => res.json())
    .then((data) => {
    const years = data.map(item => item.Year);
    const ordinary = data.map(item => item.Ordinary);
    const _50RoC = data.map(item => item._50RoC);
    const _100RoC = data.map(item => item._100RoC);
    const _100RoCStep = data.map(item => item._100RoCStep);
    const growthChart = document.getElementById('taxChart');

    new Chart(taxChart, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
        label: 'Ordinary',
        data: ordinary,
        backgroundColor: '#c7532c',
        borderColor: '#c7532c'
        }, {
        label: '50% Return of Capital',
        data: _50RoC,
        backgroundColor: '#898a8d',
        borderColor: '#898a8d'
        }, {
        label: '100% Return of Capital',
        data: _100RoC,
        backgroundColor: '#b8dde7',
        borderColor: '#b8dde7'
        }, {
        label: '100% Return of Capital w/Step-Up',
        data: _100RoCStep,
        backgroundColor: '#00677f',
        borderColor: '#00677f'
        }]
    },
    options: {
        plugins: {
        tooltip: {
            callbacks: {
            label: function(context) { return context.dataset.label + ': $' + context.parsed.y.toLocaleString(); }
            }
        },
        datalabels: {
            display: false
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
            padding: 30,
            boxWidth: 10,
            boxHeight: 10
            }
        }
        },
        responsive: true,
        scales:{
        x:{
            offset: true,
            position: 'bottom',
            ticks:{
            align: 'inner',
            display: true,
            //autoSkip: true,
            maxTicksLimit: 7,
            //minRotation: 45
            },
            grid:{
            display: false,
            }
        },
        y:{
            min: 5000,
            max: 55000,
            ticks: {
            callback: function(value, index, ticks) {return '$' + value.toLocaleString();},
            stepSize: 5000,
            },
            gridLines:{
            display: false
            }
        }
        }
    }
    });
});


/* CORRELATION */
const barChart = document.getElementById('barChart');
new Chart(barChart, {
    type: 'bar',
    plugins: [ChartDataLabels],
    data: {
    labels: ['High Yield Bonds', 'Bloomberg US Agg', 'Floating Rate Loans', 'Investment Grade Bonds'],
    datasets: [{
        data: [0.19, 0.16, 0.25, 0.16],
        backgroundColor: ['#c7532c', '#898a8d', '#b8dde7', '#1c83a8'],
        borderColor: ['#c7532c', '#898a8d', '#b8dde7', '#1c83a8'],
        datalabels: {
        color: ['#c7532c', '#898a8d', '#b8dde7', '#1c83a8']
        }
    }]
    },
    options: {
    plugins: {
        datalabels: {
        align: 'end',
        anchor: 'end',
        offset: 10,
        font: {
            size: 20,
            weight: 'bold'
        }
        },
        legend: {
        display: false
        }
    },
    scales: {
        y: {
        min: 0,
        max: 1,
        ticks: {
            stepSize: 0.1
        }
        },
        x: {
        ticks: {
            color: ['#c7532c', '#898a8d', '#b8dde7', '#1c83a8'],
            font: {
            weight: 'bold'
            }
        },
        grid: {
            display: false
        }
        }
    }
    }
});
}
