mapboxgl.accessToken = 'pk.eyJ1IjoiemFyYXphbm5ldHRhIiwiYSI6ImNsd2Q3bmJ6MzEzenEycHBwejQ3OTdmbnQifQ.ugH_yI6VikoBgixHbtGlvQ';

const indonesiaBatas = [
    [94.5, -11.8], 
    [141.2, 13]  
  ];

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [118, -0.8],
    zoom: 1.8,
    maxBounds: indonesiaBatas
});


const dataPertumbuhan = {
    "Aceh": {
        "2018": { "laju pertumbuhan": 1.96 },
        "2019": { "laju pertumbuhan": 1.93 },
        "2020": { "laju pertumbuhan": 1.56 },
        "2021": { "laju pertumbuhan": 1.49 },
        "2022": { "laju pertumbuhan": 1.43 }
    },
    "Sumatera Utara": {
        "2018": { "laju pertumbuhan": 1.27 },
        "2019": { "laju pertumbuhan": 1.24 },
        "2020": { "laju pertumbuhan": 1.28 },
        "2021": { "laju pertumbuhan": 1.23 },
        "2022": { "laju pertumbuhan": 1.21 }
    },
    "Sumatera Barat": {
        "2018": { "laju pertumbuhan": 1.27 },
        "2019": { "laju pertumbuhan": 1.25 },
        "2020": { "laju pertumbuhan": 1.29 },
        "2021": { "laju pertumbuhan": 1.10 },
        "2022": { "laju pertumbuhan": 1.09 }
    },
    "Riau": {
        "2018": { "laju pertumbuhan": 2.54 },
        "2019": { "laju pertumbuhan": 2.52 },
        "2020": { "laju pertumbuhan": 1.40 },
        "2021": { "laju pertumbuhan": 2.08 },
        "2022": { "laju pertumbuhan": 1.95 }
    },
    "Jambi": {
        "2018": { "laju pertumbuhan": 1.75 },
        "2019": { "laju pertumbuhan": 1.72 },
        "2020": { "laju pertumbuhan": 1.34 },
        "2021": { "laju pertumbuhan": 1.39 },
        "2022": { "laju pertumbuhan": 1.33 }
    },
    "Sumatera Selatan": {
        "2018": { "laju pertumbuhan": 1.41 },
        "2019": { "laju pertumbuhan": 1.39 },
        "2020": { "laju pertumbuhan": 1.25 },
        "2021": { "laju pertumbuhan": 1.32 },
        "2022": { "laju pertumbuhan": 1.27 }
    },
    "Bengkulu": {
        "2018": { "laju pertumbuhan": 1.65 },
        "2019": { "laju pertumbuhan": 1.63 },
        "2020": { "laju pertumbuhan": 1.55 },
        "2021": { "laju pertumbuhan": 1.48 },
        "2022": { "laju pertumbuhan": 1.40 }
    },
    "Lampung": {
        "2018": { "laju pertumbuhan": 1.16 },
        "2019": { "laju pertumbuhan": 1.13 },
        "2020": { "laju pertumbuhan": 1.65 },
        "2021": { "laju pertumbuhan": 1.10 },
        "2022": { "laju pertumbuhan": 1.07 }
    },
    "Kepulauan Bangka Belitung": {
        "2018": { "laju pertumbuhan": 2.16 },
        "2019": { "laju pertumbuhan": 2.14 },
        "2020": { "laju pertumbuhan": 1.70 },
        "2021": { "laju pertumbuhan": 1.60 },
        "2022": { "laju pertumbuhan": 1.52 }
    },
    "Kepulauan Riau": {
        "2018": { "laju pertumbuhan": 2.95 },
        "2019": { "laju pertumbuhan": 2.90 },
        "2020": { "laju pertumbuhan": 2.02 },
        "2021": { "laju pertumbuhan": 3.48 },
        "2022": { "laju pertumbuhan": 3.15 }
    },
    "DKI Jakarta": {
        "2018": { "laju pertumbuhan": 1.03 },
        "2019": { "laju pertumbuhan": 1.02 },
        "2020": { "laju pertumbuhan": 0.92 },
        "2021": { "laju pertumbuhan": 0.60 },
        "2022": { "laju pertumbuhan": 0.64 }
    },
    "Jawa Barat": {
        "2018": { "laju pertumbuhan": 1.50 },
        "2019": { "laju pertumbuhan": 1.48 },
        "2020": { "laju pertumbuhan": 1.11 },
        "2021": { "laju pertumbuhan": 1.41 },
        "2022": { "laju pertumbuhan": 1.33 }
    },
    "Jawa Tengah": {
        "2018": { "laju pertumbuhan": 0.77 },
        "2019": { "laju pertumbuhan": 0.76 },
        "2020": { "laju pertumbuhan": 1.17 },
        "2021": { "laju pertumbuhan": 0.83 },
        "2022": { "laju pertumbuhan": 0.81 }
    },
    "DI Yogyakarta": {
        "2018": { "laju pertumbuhan": 1.16 },
        "2019": { "laju pertumbuhan": 1.15 },
        "2020": { "laju pertumbuhan": 0.58 },
        "2021": { "laju pertumbuhan": 1.61 },
        "2022": { "laju pertumbuhan": 1.44 }
    },
    "Jawa Timur": {
        "2018": { "laju pertumbuhan": 0.63 },
        "2019": { "laju pertumbuhan": 0.62 },
        "2020": { "laju pertumbuhan": 0.79 },
        "2021": { "laju pertumbuhan": 0.70 },
        "2022": { "laju pertumbuhan": 0.68 }
    },
    "Banten": {
        "2018": { "laju pertumbuhan": 2.17 },
        "2019": { "laju pertumbuhan": 2.14 },
        "2020": { "laju pertumbuhan": 1.10 },
        "2021": { "laju pertumbuhan": 1.76 },
        "2022": { "laju pertumbuhan": 1.66 }
    },
    "Bali": {
        "2018": { "laju pertumbuhan": 1.18 },
        "2019": { "laju pertumbuhan": 1.17 },
        "2020": { "laju pertumbuhan": 1.01 },
        "2021": { "laju pertumbuhan": 1.40 },
        "2022": { "laju pertumbuhan": 1.29 }
    },
    "Nusa Tenggara Barat": {
        "2018": { "laju pertumbuhan": 1.32 },
        "2019": { "laju pertumbuhan": 1.29 },
        "2020": { "laju pertumbuhan": 1.63 },
        "2021": { "laju pertumbuhan": 1.76 },
        "2022": { "laju pertumbuhan": 1.64 }
    },
    "Nusa Tenggara Timur": {
        "2018": { "laju pertumbuhan": 1.67 },
        "2019": { "laju pertumbuhan": 1.66 },
        "2020": { "laju pertumbuhan": 1.25 },
        "2021": { "laju pertumbuhan": 1.56 },
        "2022": { "laju pertumbuhan": 1.50 }
    },
    "Kalimantan Barat": {
        "2018": { "laju pertumbuhan": 1.58 },
        "2019": { "laju pertumbuhan": 1.56 },
        "2020": { "laju pertumbuhan": 2.04 },
        "2021": { "laju pertumbuhan": 1.39 },
        "2022": { "laju pertumbuhan": 1.33 }
    },
    "Kalimantan Tengah": {
        "2018": { "laju pertumbuhan": 2.28 },
        "2019": { "laju pertumbuhan": 2.26 },
        "2020": { "laju pertumbuhan": 1.84 },
        "2021": { "laju pertumbuhan": 1.61 },
        "2022": { "laju pertumbuhan": 1.51 }
    },
    "Kalimantan Selatan": {
        "2018": { "laju pertumbuhan": 1.74 },
        "2019": { "laju pertumbuhan": 1.71 },
        "2020": { "laju pertumbuhan": 1.13 },
        "2021": { "laju pertumbuhan": 1.61 },
        "2022": { "laju pertumbuhan": 1.51 }
    },
    "Kalimantan Timur": {
        "2018": { "laju pertumbuhan": 2.28 },
        "2019": { "laju pertumbuhan": 2.24 },
        "2020": { "laju pertumbuhan": 2.13 },
        "2021": { "laju pertumbuhan": 1.50 },
        "2022": { "laju pertumbuhan": 1.41 }
    },
    "Kalimantan Utara": {
        "2018": { "laju pertumbuhan": 3.87 },
        "2019": { "laju pertumbuhan": 3.84 },
        "2020": { "laju pertumbuhan": 2.86 },
        "2021": { "laju pertumbuhan": 2.25 },
        "2022": { "laju pertumbuhan": 2.10 }
    },
    "Sulawesi Utara": {
        "2018": { "laju pertumbuhan": 1.09 },
        "2019": { "laju pertumbuhan": 1.07 },
        "2020": { "laju pertumbuhan": 1.40 },
        "2021": { "laju pertumbuhan": 0.85 },
        "2022": { "laju pertumbuhan": 0.82 }
    },
    "Sulawesi Tengah": {
        "2018": { "laju pertumbuhan": 1.63 },
        "2019": { "laju pertumbuhan": 1.61 },
        "2020": { "laju pertumbuhan": 1.22 },
        "2021": { "laju pertumbuhan": 1.62 },
        "2022": { "laju pertumbuhan": 1.53 }
    },
    "Sulawesi Selatan": {
        "2018": { "laju pertumbuhan": 1.06 },
        "2019": { "laju pertumbuhan": 1.05 },
        "2020": { "laju pertumbuhan": 1.18 },
        "2021": { "laju pertumbuhan": 0.97 },
        "2022": { "laju pertumbuhan": 0.96 }
    },
    "Sulawesi Tenggara": {
        "2018": { "laju pertumbuhan": 2.12 },
        "2019": { "laju pertumbuhan": 2.10 },
        "2020": { "laju pertumbuhan": 1.58 },
        "2021": { "laju pertumbuhan": 1.75 },
        "2022": { "laju pertumbuhan": 1.66 }
    },
    "Gorontalo": {
        "2018": { "laju pertumbuhan": 1.59 },
        "2019": { "laju pertumbuhan": 1.58 },
        "2020": { "laju pertumbuhan": 1.16 },
        "2021": { "laju pertumbuhan": 1.06 },
        "2022": { "laju pertumbuhan": 1.02 }
    },
    "Sulawesi Barat": {
        "2018": { "laju pertumbuhan": 1.92 },
        "2019": { "laju pertumbuhan": 1.91 },
        "2020": { "laju pertumbuhan": 1.98 },
        "2021": { "laju pertumbuhan": 1.66 },
        "2022": { "laju pertumbuhan": 1.58 }
    },
    "Maluku": {
        "2018": { "laju pertumbuhan": 1.77 },
        "2019": { "laju pertumbuhan": 1.75 },
        "2020": { "laju pertumbuhan": 1.83 },
        "2021": { "laju pertumbuhan": 0.99 },
        "2022": { "laju pertumbuhan": 1.01 }
    },
    "Maluku Utara": {
        "2018": { "laju pertumbuhan": 2.11 },
        "2019": { "laju pertumbuhan": 2.08 },
        "2020": { "laju pertumbuhan": 2.07 },
        "2021": { "laju pertumbuhan": 1.69 },
        "2022": { "laju pertumbuhan": 1.61 }
    },
    "Papua Barat": {
        "2018": { "laju pertumbuhan": 2.57 },
        "2019": { "laju pertumbuhan": 2.55 },
        "2020": { "laju pertumbuhan": 3.94 },
        "2021": { "laju pertumbuhan": 2.69 },
        "2022": { "laju pertumbuhan": 2.46 }
    },
    "Papua": {
        "2018": { "laju pertumbuhan": 1.90 },
        "2019": { "laju pertumbuhan": 1.88 },
        "2020": { "laju pertumbuhan": 4.13 },
        "2021": { "laju pertumbuhan": 1.61 },
        "2022": { "laju pertumbuhan": 1.52 },
    }
};

let geojsonData;
let selectedProvinsi = null;

// Fungsi untuk menghitung rata-rata laju pertumbuhan
function calculateAverageGrowth(data) {
    let total = 0;
    let count = 0;
    for (let year in data) {
        total += data[year]["laju pertumbuhan"];
        count++;
    }
    return total / count;
}

function updateMap() {
    if (!geojsonData) {
        fetch('indonesia.geojson')
        .then(response => response.json())
        .then(data => {
            geojsonData = data;
            insertData();
        });
    } else {
        insertData();
    }
}

function insertData() {
    geojsonData.features.forEach(function (feature) {
        const provinsi = feature.properties.Provinsi;
        feature.properties.laju_rata = calculateAverageGrowth(dataPertumbuhan[provinsi]);
    });

    if (map.getSource('provinsi')) {
        map.getSource('provinsi').setData(geojsonData);
    } else {
        map.addSource('provinsi', {
            'type': 'geojson',
            'data': geojsonData
        });

        map.addLayer({
            'id': 'provinsi-layer',
            'type': 'fill',
            'source': 'provinsi',
            'paint': {
                'fill-color': [
                    'interpolate',
                    ['linear'],
                    ['get', 'laju_rata'],
                    0, '#d9f0a3',
                    0.5,  '#addd8e',
                    1, '#78c679',
                    1.5, '#41ab5d',
                    2, '#238443',
                    2.5, '#006837',
                    3, '#004529',
                    3.5, '#003214',
                ],
                'fill-opacity': 1
            }
        });

        // js untuk box putih keterangan warna
        const lajupertumbuhan = [
            '(0 - 0.49)',
            '(0.5 - 0.99)',
            '(1 - 1.49)',
            '(1.5 - 1.99)',
            '(2 - 2.49)',
            '(2.5 - 2.99)',
            '(3 - 3.49)',
            '(3.5+)',
        ];
        const colors = [
            '#d9f0a3', // 0 - 0.49
            '#addd8e', // 0.5 - 0.99
            '#78c679', // 1 - 1.49
            '#41ab5d', // 1.5 - 1.99
            '#238443', // 2 - 2.49
            '#006837', // 2.5 - 2.99
            '#004529', // 3 - 3.49
            '#003214', // 3.5+
        ];
        const colorinfo = document.getElementById('colorinfo');

        lajupertumbuhan.forEach((layer, i) => {
            const color = colors[i];
            const category = document.createElement('div');
            const categorycolor = document.createElement('span');
            categorycolor.className = 'colorinfo-key';
            categorycolor.style.backgroundColor = color;
        
            const categoryinfo = document.createElement('span');
            categoryinfo.innerHTML = `${layer}`;
            category.appendChild(categorycolor);
            category.appendChild(categoryinfo);
            colorinfo.appendChild(category);
        });
        
        // Tambahkan keterangan "Rata-rata laju pertumbuhan penduduk"
        const legendTitle = document.createElement('div');
        legendTitle.innerHTML = '<strong>Rata-rata laju pertumbuhan penduduk</strong>';
        colorinfo.prepend(legendTitle);
        

        map.on('click', 'provinsi-layer', (e) => {
            const namaProvinsi = e.features[0].properties.Provinsi;
            document.getElementById('pd').innerHTML = `<h3>${namaProvinsi}</h3>`;
            updateLineChart(namaProvinsi); 
            selectedProvinsi = {
                nama: namaProvinsi,
            };
        });

        map.on('mousemove', 'provinsi-layer', (e) => {
            if (!selectedProvinsi) {
                const namaProvinsi = e.features[0].properties.Provinsi;
                document.getElementById('pd').innerHTML = `<h3>${namaProvinsi}</h3>`;
                updateLineChart(namaProvinsi);  
            }
        });

        map.on('mouseleave', 'provinsi-layer', () => {
            if (selectedProvinsi) {
                document.getElementById('pd').innerHTML = `<h3>${selectedProvinsi.nama}</h3>`;
                updateLineChart(selectedProvinsi.nama);
            } else {
                document.getElementById('pd').innerHTML = `<p>Arahkan kursor ke provinsi yang kamu ingin tahu!</p>`;
                document.getElementById('barplot').innerHTML = '';
            }
        });
    }
}

function updateLineChart(provinsi) {
    const dataProvinsi = dataPertumbuhan[provinsi];
    const tahun = Object.keys(dataProvinsi);
    const lajupertumbuhan = tahun.map(t => dataProvinsi[t]["laju pertumbuhan"]);
    
    var data = [{
        x: tahun,
        y: lajupertumbuhan,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {
            color: 'rgba(0, 0, 255, 0.6)'
        },
        text: lajupertumbuhan.map(jp => `${jp}`),
        textposition: 'top',
        textfont: {
            color: 'black'
        }
    }];

    var layout = {
        title: `Laju Pertumbuhan ${provinsi} per Tahun`,
        xaxis: {
            title: 'Tahun'
        },
        yaxis: {
            title: 'Laju pertumbuhan'
        }
    };
    var config = {
        responsive: true
    };

    Plotly.newPlot('linechart', data, layout, config);
}

// Memperbarui peta dengan rata-rata laju pertumbuhan
updateMap();
