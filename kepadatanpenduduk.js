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

const dataKepadatan = {
    2018: {
        "Aceh": { "kepadatan": 91, "rasio": 99.8 },
        "Sumatera Utara": { "kepadatan": 198, "rasio": 99.6 },
        "Sumatera Barat": { "kepadatan": 128, "rasio": 99.3 },
        "Riau": { "kepadatan": 78, "rasio": 105.3 },
        "Jambi": { "kepadatan": 71, "rasio": 104.1 },
        "Sumatera Selatan": { "kepadatan": 91, "rasio": 103.3 },
        "Bengkulu": { "kepadatan": 99, "rasio": 103.9 },
        "Lampung": { "kepadatan": 242, "rasio": 105 },
        "Kepulauan Bangka Belitung": { "kepadatan": 89, "rasio": 108.4 },
        "Kepulauan Riau": { "kepadatan": 260, "rasio": 104 },
        "DKI Jakarta": { "kepadatan": 15764, "rasio": 100.4 },
        "Jawa Barat": { "kepadatan": 1376, "rasio": 102.6 },
        "Jawa Tengah": { "kepadatan": 1052, "rasio": 98.3 },
        "DI Yogyakarta": { "kepadatan": 1214, "rasio": 97.9 },
        "Jawa Timur": { "kepadatan": 826, "rasio": 97.5 },
        "Banten": { "kepadatan": 1313, "rasio": 103.9 },
        "Bali": { "kepadatan": 743, "rasio": 101.4 },
        "Nusa Tenggara Barat": { "kepadatan": 270, "rasio": 94.3 },
        "Nusa Tenggara Timur": { "kepadatan": 110, "rasio": 98.1 },
        "Kalimantan Barat": { "kepadatan": 34, "rasio": 103.6 },
        "Kalimantan Tengah": { "kepadatan": 17, "rasio": 109.6 },
        "Kalimantan Selatan": { "kepadatan": 108, "rasio": 103 },
        "Kalimantan Timur": { "kepadatan": 28, "rasio": 110.2 },
        "Kalimantan Utara": { "kepadatan": 9, "rasio": 113 },
        "Sulawesi Utara": { "kepadatan": 179, "rasio": 104.2 },
        "Sulawesi Tengah": { "kepadatan": 49, "rasio": 104.2 },
        "Sulawesi Selatan": { "kepadatan": 188, "rasio": 95.6 },
        "Sulawesi Tenggara": { "kepadatan": 70, "rasio": 101.2 },
        "Gorontalo": { "kepadatan": 105, "rasio": 100.4 },
        "Sulawesi Barat": { "kepadatan": 81, "rasio": 100.8 },
        "Maluku": { "kepadatan": 38, "rasio": 101.7 },
        "Maluku Utara": { "kepadatan": 39, "rasio": 104.1 },
        "Papua Barat": { "kepadatan": 9, "rasio": 111.1 },
        "Papua": { "kepadatan": 10, "rasio": 110.9 }
    },
    2019: {
        "Aceh": { "kepadatan": 93, "rasio": 99.9 },
        "Sumatera Utara": { "kepadatan": 200, "rasio": 99.6 },
        "Sumatera Barat": { "kepadatan": 130, "rasio": 99.4 },
        "Riau": { "kepadatan": 80, "rasio": 105.2 },
        "Jambi": { "kepadatan": 72, "rasio": 104.1 },
        "Sumatera Selatan": { "kepadatan": 92, "rasio": 103.3 },
        "Bengkulu": { "kepadatan": 100, "rasio": 103.9 },
        "Lampung": { "kepadatan": 244, "rasio": 104.9 },
        "Kepulauan Bangka Belitung": { "kepadatan": 91, "rasio": 108.4 },
        "Kepulauan Riau": { "kepadatan": 267, "rasio": 103.9 },
        "DKI Jakarta": { "kepadatan": 15900, "rasio": 100.2 },
        "Jawa Barat": { "kepadatan": 1394, "rasio": 102.5 },
        "Jawa Tengah": { "kepadatan": 1058, "rasio": 98.3 },
        "DI Yogyakarta": { "kepadatan": 1227, "rasio": 98 },
        "Jawa Timur": { "kepadatan": 831, "rasio": 97.5 },
        "Banten": { "kepadatan": 1338, "rasio": 103.8 },
        "Bali": { "kepadatan": 750, "rasio": 101.5 },
        "Nusa Tenggara Barat": { "kepadatan": 273, "rasio": 94.4 },
        "Nusa Tenggara Timur": { "kepadatan": 112, "rasio": 98.1 },
        "Kalimantan Barat": { "kepadatan": 34, "rasio": 103.5 },
        "Kalimantan Tengah": { "kepadatan": 18, "rasio": 109.7 },
        "Kalimantan Selatan": { "kepadatan": 110, "rasio": 103 },
        "Kalimantan Timur": { "kepadatan": 29, "rasio": 110.2 },
        "Kalimantan Utara": { "kepadatan": 10, "rasio": 112.8 },
        "Sulawesi Utara": { "kepadatan": 181, "rasio": 104.1 },
        "Sulawesi Tengah": { "kepadatan": 49, "rasio": 104.2 },
        "Sulawesi Selatan": { "kepadatan": 189, "rasio": 95.6 },
        "Sulawesi Tenggara": { "kepadatan": 71, "rasio": 101.2 },
        "Gorontalo": { "kepadatan": 107, "rasio": 100.4 },
        "Sulawesi Barat": { "kepadatan": 82, "rasio": 100.8 },
        "Maluku": { "kepadatan": 38, "rasio": 101.6 },
        "Maluku Utara": { "kepadatan": 39, "rasio": 104 },
        "Papua Barat": { "kepadatan": 9, "rasio": 111 },
        "Papua": { "kepadatan": 11, "rasio": 110.6 }
    },
    2020: {
        "Aceh": { "kepadatan": 91, "rasio": 100.8 },
        "Sumatera Utara": { "kepadatan": 203, "rasio": 100.6 },
        "Sumatera Barat": { "kepadatan": 132, "rasio": 101.4 },
        "Riau": { "kepadatan": 73, "rasio": 105.1 },
        "Jambi": { "kepadatan": 71, "rasio": 104.1 },
        "Sumatera Selatan": { "kepadatan": 92, "rasio": 104.2 },
        "Bengkulu": { "kepadatan": 101, "rasio": 104.8 },
        "Lampung": { "kepadatan": 260, "rasio": 105.1 },
        "Kepulauan Bangka Belitung": { "kepadatan": 89, "rasio": 106.1 },
        "Kepulauan Riau": { "kepadatan": 252, "rasio": 104.2 },
        "DKI Jakarta": { "kepadatan": 15907, "rasio": 102.1 },
        "Jawa Barat": { "kepadatan": 1365, "rasio": 103.1 },
        "Jawa Tengah": { "kepadatan": 1113, "rasio": 101.1 },
        "DI Yogyakarta": { "kepadatan": 1171, "rasio": 98.2 },
        "Jawa Timur": { "kepadatan": 851, "rasio": 99.6 },
        "Banten": { "kepadatan": 1232, "rasio": 104 },
        "Bali": { "kepadatan": 747, "rasio": 101.2 },
        "Nusa Tenggara Barat": { "kepadatan": 286, "rasio": 99.7 },
        "Nusa Tenggara Timur": { "kepadatan": 109, "rasio": 100.1 },
        "Kalimantan Barat": { "kepadatan": 37, "rasio": 105.8 },
        "Kalimantan Tengah": { "kepadatan": 17, "rasio": 107.9 },
        "Kalimantan Selatan": { "kepadatan": 105, "rasio": 102.5 },
        "Kalimantan Timur": { "kepadatan": 29, "rasio": 108.7 },
        "Kalimantan Utara": { "kepadatan": 9, "rasio": 111.9 },
        "Sulawesi Utara": { "kepadatan": 189, "rasio": 104.8 },
        "Sulawesi Tengah": { "kepadatan": 48, "rasio": 105.8 },
        "Sulawesi Selatan": { "kepadatan": 194, "rasio": 98.6 },
        "Sulawesi Tenggara": { "kepadatan": 69, "rasio": 102.8 },
        "Gorontalo": { "kepadatan": 104, "rasio": 101.9 },
        "Sulawesi Barat": { "kepadatan": 85, "rasio": 103 },
        "Maluku": { "kepadatan": 39, "rasio": 102.6 },
        "Maluku Utara": { "kepadatan": 40, "rasio": 105.1 },
        "Papua Barat": { "kepadatan": 11, "rasio": 111.2 },
        "Papua": { "kepadatan": 13, "rasio": 114.2 }
    },
    2021: {
        "Aceh": { "kepadatan": 92, "rasio": 100.8 },
        "Sumatera Utara": { "kepadatan": 205, "rasio": 100.7 },
        "Sumatera Barat": { "kepadatan": 133, "rasio": 101.5 },
        "Riau": { "kepadatan": 75, "rasio": 104.9 },
        "Jambi": { "kepadatan": 72, "rasio": 104 },
        "Sumatera Selatan": { "kepadatan": 93, "rasio": 104 },
        "Bengkulu": { "kepadatan": 102, "rasio": 104.7 },
        "Lampung": { "kepadatan": 262, "rasio": 105 },
        "Kepulauan Bangka Belitung": { "kepadatan": 90, "rasio": 105.9 },
        "Kepulauan Riau": { "kepadatan": 258, "rasio": 104.2 },
        "DKI Jakarta": { "kepadatan": 15978, "rasio": 101.7 },
        "Jawa Barat": { "kepadatan": 1379, "rasio": 103.1 },
        "Jawa Tengah": { "kepadatan": 1120, "rasio": 101.1 },
        "DI Yogyakarta": { "kepadatan": 1185, "rasio": 98.1 },
        "Jawa Timur": { "kepadatan": 855, "rasio": 99.6 },
        "Banten": { "kepadatan": 1248, "rasio": 103.9 },
        "Bali": { "kepadatan": 755, "rasio": 101.1 },
        "Nusa Tenggara Barat": { "kepadatan": 290, "rasio": 100 },
        "Nusa Tenggara Timur": { "kepadatan": 111, "rasio": 100 },
        "Kalimantan Barat": { "kepadatan": 37, "rasio": 105.7 },
        "Kalimantan Tengah": { "kepadatan": 18, "rasio": 107.8 },
        "Kalimantan Selatan": { "kepadatan": 106, "rasio": 102.5 },
        "Kalimantan Timur": { "kepadatan": 30, "rasio": 108.4 },
        "Kalimantan Utara": { "kepadatan": 9, "rasio": 111.6 },
        "Sulawesi Utara": { "kepadatan": 190, "rasio": 104.7 },
        "Sulawesi Tengah": { "kepadatan": 49, "rasio": 105.5 },
        "Sulawesi Selatan": { "kepadatan": 196, "rasio": 98.6 },
        "Sulawesi Tenggara": { "kepadatan": 70, "rasio": 102.6 },
        "Gorontalo": { "kepadatan": 105, "rasio": 101.8 },
        "Sulawesi Barat": { "kepadatan": 86, "rasio": 103 },
        "Maluku": { "kepadatan": 40, "rasio": 102.6 },
        "Maluku Utara": { "kepadatan": 41, "rasio": 105 },
        "Papua Barat": { "kepadatan": 11, "rasio": 111.2 },
        "Papua": { "kepadatan": 14, "rasio": 113.9 }
    },
    2022: {
        "Aceh": { "kepadatan": 95, "rasio": 100.9 },
        "Sumatera Utara": { "kepadatan": 209, "rasio": 100.7 },
        "Sumatera Barat": { "kepadatan": 134, "rasio": 101.5 },
        "Riau": { "kepadatan": 74, "rasio": 104.7 },
        "Jambi": { "kepadatan": 74, "rasio": 103.8 },
        "Sumatera Selatan": { "kepadatan": 100, "rasio": 103.9 },
        "Bengkulu": { "kepadatan": 102, "rasio": 104.6 },
        "Lampung": { "kepadatan": 273, "rasio": 104.9 },
        "Kepulauan Bangka Belitung": { "kepadatan": 90, "rasio": 105.6 },
        "Kepulauan Riau": { "kepadatan": 264, "rasio": 104.2 },
        "DKI Jakarta": { "kepadatan": 16158, "rasio": 101.4 },
        "Jawa Barat": { "kepadatan": 1334, "rasio": 103 },
        "Jawa Tengah": { "kepadatan": 1078, "rasio": 101.1 },
        "DI Yogyakarta": { "kepadatan": 1186, "rasio": 98 },
        "Jawa Timur": { "kepadatan": 857, "rasio": 99.5 },
        "Banten": { "kepadatan": 1310, "rasio": 103.8 },
        "Bali": { "kepadatan": 790, "rasio": 101.1 },
        "Nusa Tenggara Barat": { "kepadatan": 278, "rasio": 100.4 },
        "Nusa Tenggara Timur": { "kepadatan": 118, "rasio": 100 },
        "Kalimantan Barat": { "kepadatan": 38, "rasio": 105.5 },
        "Kalimantan Tengah": { "kepadatan": 18, "rasio": 107.6 },
        "Kalimantan Selatan": { "kepadatan": 113, "rasio": 102.4 },
        "Kalimantan Timur": { "kepadatan": 30, "rasio": 108.1 },
        "Kalimantan Utara": { "kepadatan": 10, "rasio": 111.3 },
        "Sulawesi Utara": { "kepadatan": 183, "rasio": 104.6 },
        "Sulawesi Tengah": { "kepadatan": 50, "rasio": 105.2 },
        "Sulawesi Selatan": { "kepadatan": 204, "rasio": 98.7 },
        "Sulawesi Tenggara": { "kepadatan": 75, "rasio": 102.4 },
        "Gorontalo": { "kepadatan": 99, "rasio": 101.8 },
        "Sulawesi Barat": { "kepadatan": 88, "rasio": 102.9 },
        "Maluku": { "kepadatan": 41, "rasio": 102.5 },
        "Maluku Utara": { "kepadatan": 40, "rasio": 104.8 },
        "Papua Barat": { "kepadatan": 12, "rasio": 111.1 },
        "Papua": { "kepadatan": 14, "rasio": 113.5 }
    }
};

let geojsonData;
let selectedProvinsi = null;

function updateMap(year) {
    if (!geojsonData) {
        fetch('indonesia.geojson')
        .then(response => response.json())
        .then(data => {
            geojsonData = data;
            insertData(year);
        });
    } else {
        insertData(year);
    }
}

function insertData(year) {
    geojsonData.features.forEach(function (feature) {
        const provinsi = feature.properties.Provinsi;
        feature.properties.kepadatan = dataKepadatan[year][provinsi].kepadatan;
        feature.properties.rasio = dataKepadatan[year][provinsi].rasio;
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
                    ['get', 'kepadatan'],
                    0, '#FED976',
                    10, '#FED976',
                    100, '#FD8D3C',
                    500, '#FD8D3C',
                    1000, '#E31A1C',
                    5000, '#BD0026',
                    10000, '#800026',
                    15000, '#723122',
                    20000, '#5E1D0E'
                ],
                'fill-opacity': 0.8
            }
        });

        // js untuk box putih keterangan warna
        const jumlahpenduduk = [
            '0-10',
            '10-99', 
            '100-499', 
            '500-999', 
            '1000-4999', 
            '5000-9999', 
            '10000-14999', 
            '15000-19999', 
            '20000+'
        ];
        const colors = [
            '#FED976',
            '#FEB359',
            '#FD8D3C',
            '#FD593C',
            '#E31A1C',
            '#BD0026',
            '#800026',  
            '#723122',
            '#5E1D0E'
        ];

        const colorinfo = document.getElementById('colorinfo');

        jumlahpenduduk.forEach((layer, i) => {
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

        map.on('click', 'provinsi-layer', (e) => {
            const namaProvinsi = e.features[0].properties.Provinsi;
            const kepadatan = e.features[0].properties.kepadatan;
            const rasio = e.features[0].properties.rasio;
            document.getElementById('pd').innerHTML = `<h3>${namaProvinsi}</h3><p><strong><em>${kepadatan}</strong> penduduk per km persegi</em></p>`;
            updateBarChart(rasio);
            selectedProvinsi = {
                nama: namaProvinsi,
                kepadatan: kepadatan,
                rasio: rasio
            };
        });

        map.on('mousemove', 'provinsi-layer', (e) => {
            if (!selectedProvinsi) {
                const namaProvinsi = e.features[0].properties.Provinsi;
                const kepadatan = e.features[0].properties.kepadatan;
                const rasio = e.features[0].properties.rasio;
                document.getElementById('pd').innerHTML = `<h3>${namaProvinsi}</h3><p><strong><em>${kepadatan}</strong> penduduk per km persegi</em></p>`;
                updateBarChart(rasio);
            }
        });

        map.on('mouseleave', 'provinsi-layer', () => {
            if (selectedProvinsi) {
                document.getElementById('pd').innerHTML = `<h3>${selectedProvinsi.nama}</h3><p><strong><em>${selectedProvinsi.kepadatan}</strong> penduduk per km persegi</em></p>`;
                updateBarChart(selectedProvinsi.rasio);
            } else {
                document.getElementById('pd').innerHTML = `<p>Arahkan kursor ke provinsi yang kamu ingin tahu!</p>`;
                document.getElementById('barplot').innerHTML = '';
            }
        });
    }
}

function updateBarChart(rasio) {
    var rasioLaki = rasio;
    var rasioPerempuan = 100;

    var data = [{
        x: ['Laki-Laki', 'Perempuan'],
        y: [rasioLaki, rasioPerempuan],
        type: 'bar',
        marker: {
            color: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 0, 0, 0.6)']
        },
        text: [rasioLaki, rasioPerempuan], 
        textposition: 'auto',
        textfont: {
            color: 'white'
        }
        
    }];

    var layout = {
        title: 'Rasio Jenis Kelamin',
        xaxis: {
            title: 'Jenis Kelamin'
        },
        yaxis: {
            title: 'Rasio'
        }
    };
    var config = {
        responsive: true
    }

    Plotly.newPlot('barplot', data, layout, config);
}



// inisialisasi tahun
updateMap(2018);

// slider
document.getElementById('year').addEventListener('input', function (e) {
    const year = e.target.value;
    document.getElementById('year-label').textContent = year;
    updateMap(year);
    if (selectedProvinsi) {
        selectedProvinsi.kepadatan = dataKepadatan[year][selectedProvinsi.nama].kepadatan;
        selectedProvinsi.rasio = dataKepadatan[year][selectedProvinsi.nama].rasio;
        document.getElementById('pd').innerHTML = `<h3>${selectedProvinsi.nama}</h3><p><strong><em>${selectedProvinsi.kepadatan}</strong> penduduk per km persegi</em></p>`;
        updateBarChart(selectedProvinsi.rasio);
    }
});

