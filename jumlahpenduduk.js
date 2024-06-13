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

const dataJumlah = {
    "Aceh": {
        2018: { "jumlahPenduduk": 5.2813 },
        2019: { "jumlahPenduduk": 5.3715 },
        2020: { "jumlahPenduduk": 5.2749 },
        2021: { "jumlahPenduduk": 5.3337 },
        2022: { "jumlahPenduduk": 5.4079}
    },
    "Sumatera Utara": {
        2018: { "jumlahPenduduk": 1.44154},
        2019: { "jumlahPenduduk": 1.45625},
        2020: { "jumlahPenduduk": 1.47994},
        2021: { "jumlahPenduduk": 1.49362},
        2022: { "jumlahPenduduk": 1.51152}
    },
    "Sumatera Barat": {
        2018: { "jumlahPenduduk": 5.3821 },
        2019: { "jumlahPenduduk": 5.4412 },
        2020: { "jumlahPenduduk": 5.5345 },
        2021: { "jumlahPenduduk": 5.5802 },
        2022: { "jumlahPenduduk": 5.6406 }
    },
    "Riau": {
        2018: { "jumlahPenduduk": 6.8149},
        2019: { "jumlahPenduduk": 6.9717},
        2020: { "jumlahPenduduk": 6.3941 },
        2021: { "jumlahPenduduk": 6.4936 },
        2022: { "jumlahPenduduk": 6.6144 }
    },
    "Jambi": {
        2018: { "jumlahPenduduk": 3.5703},
        2019: { "jumlahPenduduk": 3.6246},
        2020: { "jumlahPenduduk": 3.5482 },
        2021: { "jumlahPenduduk": 3.5851 },
        2022: { "jumlahPenduduk": 3.6311 }
    },
    "Sumatera Selatan": {
        2018: { "jumlahPenduduk": 8.3703},
        2019: { "jumlahPenduduk": 8.4707},
        2020: { "jumlahPenduduk": 8.4674 },
        2021: { "jumlahPenduduk": 8.5509 },
        2022: { "jumlahPenduduk": 8.6570}
    },
    "Bengkulu": {
        2018: { "jumlahPenduduk": 1.9633},
        2019: { "jumlahPenduduk": 1.9918 },
        2020: { "jumlahPenduduk": 2.0107 },
        2021: { "jumlahPenduduk": 2.0329 },
        2022: { "jumlahPenduduk": 2.0601 }
    },
    "Lampung": {
        2018: { "jumlahPenduduk": 8.3705 },
        2019: { "jumlahPenduduk": 8.4477 },
        2020: { "jumlahPenduduk": 9.0078 },
        2021: { "jumlahPenduduk": 9.0818 },
        2022: { "jumlahPenduduk": 9.1766 }
    },
    "Kepulauan Bangka Belitung": {
        2018: { "jumlahPenduduk": 1.4599},
        2019: { "jumlahPenduduk": 1.4888},
        2020: { "jumlahPenduduk": 1.4557 },
        2021: { "jumlahPenduduk": 1.4732 },
        2022: { "jumlahPenduduk": 1.4946 }
    },
    "Kepulauan Riau": {
        2018: { "jumlahPenduduk": 2.1365},
        2019: { "jumlahPenduduk": 2.1897 },
        2020: { "jumlahPenduduk": 2.0646 },
        2021: { "jumlahPenduduk": 2.1182 },
        2022: { "jumlahPenduduk": 2.1798 }
    },
    "DKI Jakarta": {
        2018: { "jumlahPenduduk": 10.4676},
        2019: { "jumlahPenduduk": 10.5578 },
        2020: { "jumlahPenduduk": 10.5621 },
        2021: { "jumlahPenduduk": 10.6097 },
        2022: { "jumlahPenduduk": 10.6800 }
    },
    "Jawa Barat": {
        2018: { "jumlahPenduduk": 48.6837},
        2019: { "jumlahPenduduk": 49.3167},
        2020: { "jumlahPenduduk": 48.2742 },
        2021: { "jumlahPenduduk": 48.7824 },
        2022: { "jumlahPenduduk": 49.4058 }
    },
    "Jawa Tengah": {
        2018: { "jumlahPenduduk": 34.4908},
        2019: { "jumlahPenduduk": 34.7182 },
        2020: { "jumlahPenduduk": 36.5160},
        2021: { "jumlahPenduduk": 36.7425},
        2022: { "jumlahPenduduk": 37.0324 }
    },
    "DI Yogyakarta": {
        2018: { "jumlahPenduduk": 3.8029 },
        2019: { "jumlahPenduduk": 3.8429 },
        2020: { "jumlahPenduduk": 3.6687 },
        2021: { "jumlahPenduduk": 3.7129 },
        2022: { "jumlahPenduduk": 3.7619 }
    },
    "Jawa Timur": {
        2018: { "jumlahPenduduk": 39.5009 },
        2019: { "jumlahPenduduk": 39.6986 },
        2020: { "jumlahPenduduk": 40.6657 },
        2021: { "jumlahPenduduk": 40.8788 },
        2022: { "jumlahPenduduk": 41.1500 }
    },
    "Banten": {
        2018: { "jumlahPenduduk": 12.6897 },
        2019: { "jumlahPenduduk": 12.9273 },
        2020: { "jumlahPenduduk": 11.9046 },
        2021: { "jumlahPenduduk": 12.0615 },
        2022: { "jumlahPenduduk": 12.2520 }
    },
    "Bali": {
        2018: { "jumlahPenduduk": 4.2922 },
        2019: { "jumlahPenduduk": 4.3369 },
        2020: { "jumlahPenduduk": 4.3174 },
        2021: { "jumlahPenduduk": 4.3627 },
        2022: { "jumlahPenduduk": 4.4151 }
    },
    "Nusa Tenggara Barat": {
        2018: { "jumlahPenduduk": 5.0137},
        2019: { "jumlahPenduduk": 5.0704 },
        2020: { "jumlahPenduduk": 5.3201 },
        2021: { "jumlahPenduduk": 5.3900 },
        2022: { "jumlahPenduduk": 5.4737 }
    },
    "Nusa Tenggara Timur": {
        2018: { "jumlahPenduduk": 5.3715 },
        2019: { "jumlahPenduduk": 5.4562 },
        2020: { "jumlahPenduduk": 5.3256 },
        2021: { "jumlahPenduduk": 5.3877 },
        2022: { "jumlahPenduduk": 5.4663 }
    },
    "Kalimantan Barat": {
        2018: { "jumlahPenduduk": 5.0017},
        2019: { "jumlahPenduduk": 5.0691},
        2020: { "jumlahPenduduk": 5.4144 },
        2021: { "jumlahPenduduk": 5.4708 },
        2022: { "jumlahPenduduk": 5.5414 }
    },
    "Kalimantan Tengah": {
        2018: { "jumlahPenduduk": 2.6602},
        2019: { "jumlahPenduduk": 2.7149 },
        2020: { "jumlahPenduduk": 2.6700 },
        2021: { "jumlahPenduduk": 2.7022 },
        2022: { "jumlahPenduduk": 2.7411 }
    },

    "Kalimantan Selatan": {
        2018: { "jumlahPenduduk": 4.1827 },
        2019: { "jumlahPenduduk": 4.2441 },
        2020: { "jumlahPenduduk": 4.0736 },
        2021: { "jumlahPenduduk": 4.1226 },
        2022: { "jumlahPenduduk": 4.1821 }
    },

    "Kalimantan Timur": {
        2018: { "jumlahPenduduk": 3.6488},
        2019: { "jumlahPenduduk": 3.7214 },
        2020: { "jumlahPenduduk": 3.7660 },
        2021: { "jumlahPenduduk": 3.8082 },
        2022: { "jumlahPenduduk": 3.8598 }
    },

    "Kalimantan Utara": {
        2018: { "jumlahPenduduk": 0.7164 },
        2019: { "jumlahPenduduk": 0.7422 },
        2020: { "jumlahPenduduk": 0.7018 },
        2021: { "jumlahPenduduk": 0.7136 },
        2022: { "jumlahPenduduk": 0.7278 }
    },
    "Sulawesi Utara": {
        2018: { "jumlahPenduduk": 2.4844 },
        2019: { "jumlahPenduduk": 2.5070 },
        2020: { "jumlahPenduduk": 2.6219},
        2021: { "jumlahPenduduk": 2.6386 },
        2022: { "jumlahPenduduk": 2.6595 }
    },
    "Sulawesi Tengah": {
        2018: { "jumlahPenduduk": 3.0104},
        2019: { "jumlahPenduduk": 3.0540},
        2020: { "jumlahPenduduk": 2.9857 },
        2021: { "jumlahPenduduk": 3.0219 },
        2022: { "jumlahPenduduk": 3.0661}
    },
    "Sulawesi Selatan": {
        2018: { "jumlahPenduduk": 8.7720 },
        2019: { "jumlahPenduduk": 8.8512 },
        2020: { "jumlahPenduduk": 9.0735 },
        2021: { "jumlahPenduduk": 9.1395 },
        2022: { "jumlahPenduduk": 9.2258 }
    },
    "Sulawesi Tenggara": {
        2018: { "jumlahPenduduk": 2.6537 },
        2019: { "jumlahPenduduk": 2.7047 },
        2020: { "jumlahPenduduk": 2.6249 },
        2021: { "jumlahPenduduk": 2.6592 },
        2022: { "jumlahPenduduk": 2.7017 }
    },
    "Gorontalo": {
        2018: { "jumlahPenduduk": 1.1855 },
        2019: { "jumlahPenduduk": 1.2026 },
        2020: { "jumlahPenduduk": 1.1717},
        2021: { "jumlahPenduduk": 1.1810 },
        2022: { "jumlahPenduduk": 1.1927}
    },

    "Sulawesi Barat": {
        2018: { "jumlahPenduduk": 1.3556},
        2019: { "jumlahPenduduk": 1.3803 },
        2020: { "jumlahPenduduk": 1.4192 },
        2021: { "jumlahPenduduk": 1.4368 },
        2022: { "jumlahPenduduk": 1.4586 }
    },
    "Maluku": {
        2018: { "jumlahPenduduk": 1.7738},
        2019: { "jumlahPenduduk": 1.8029 },
        2020: { "jumlahPenduduk": 1.8489 },
        2021: { "jumlahPenduduk": 1.8626 },
        2022: { "jumlahPenduduk": 1.8817 }
    },
    "Papua": {
        2018: { "jumlahPenduduk": 3.3225 },
        2019: { "jumlahPenduduk": 3.3793 },
        2020: { "jumlahPenduduk": 4.3037 },
        2021: { "jumlahPenduduk": 4.3554 },
        2022: { "jumlahPenduduk": 4.4186 }
    },
    "Maluku Utara": {
        2018: { "jumlahPenduduk": 1.2326 },
        2019: { "jumlahPenduduk": 1.2558 },
        2020: { "jumlahPenduduk": 1.2829 },
        2021: { "jumlahPenduduk": 1.2992 },
        2022: { "jumlahPenduduk": 1.3193 }
    },
    "Papua Barat": {
        2018: { "jumlahPenduduk": 0.9375 },
        2019: { "jumlahPenduduk": 0.9596 },
        2020: { "jumlahPenduduk": 1.1341},
        2021: { "jumlahPenduduk": 1.1568 },
        2022: { "jumlahPenduduk": 1.1833 }
    },

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
        feature.properties.jumlah = dataJumlah[provinsi]?.[year]?.jumlahPenduduk || 0;
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
                    ['get', 'jumlah'],
                    0, '#FD8D3C',
                    0.5, '#FD593C',
                    1, '#E31A1C',
                    5, '#BD0026',
                    10, '#800026',
                    20, '#723122',
                    30, '#5E1D0E'
                ],
                'fill-opacity': 0.7,
                'fill-outline-color': '#ffffff'
            }
        });

        // js untuk box putih keterangan warna
        const jumlahpenduduk = [
            '0-0.5',
            '0.5-1', 
            '1-5', 
            '5-10', 
            '10-20', 
            '20-40', 
            '40+', 
           
        ];
        const colors = [
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
            document.getElementById('pd').innerHTML = `<h3>${namaProvinsi}</h3>`;
            updateBarChart(namaProvinsi);  // Panggil updateBarChart dengan nama provinsi
            selectedProvinsi = {
                nama: namaProvinsi,
            };
        });

        map.on('mousemove', 'provinsi-layer', (e) => {
            if (!selectedProvinsi) {
                const namaProvinsi = e.features[0].properties.Provinsi;
                document.getElementById('pd').innerHTML = `<h3>${namaProvinsi}</h3>`;
                updateBarChart(namaProvinsi);  // Panggil updateBarChart dengan nama provinsi
            }
        });

        map.on('mouseleave', 'provinsi-layer', () => {
            if (selectedProvinsi) {
                document.getElementById('pd').innerHTML = `<h3>${selectedProvinsi.nama}</h3>`;
                updateBarChart(selectedProvinsi.nama);
            } else {
                document.getElementById('pd').innerHTML = `<p>Arahkan kursor ke provinsi yang kamu ingin tahu!</p>`;
                document.getElementById('barplot').innerHTML = '';
            }
        });
    }
}

function updateBarChart(provinsi) {
    const dataProvinsi = dataJumlah[provinsi];
    const tahun = Object.keys(dataProvinsi);
    const jumlahPenduduk = tahun.map(t => dataProvinsi[t].jumlahPenduduk);

    var data = [{
        x: tahun,
        y: jumlahPenduduk,
        type: 'bar',
        marker: {
            color: 'rgba(0, 0, 205, 0.6)'
        },
        text: jumlahPenduduk.map(jp => `${jp} juta`),
        textposition: 'auto',
        textfont: {
            color: 'white'
        }
    }];

    var layout = {
        title: {
            text: `Jumlah Penduduk di ${provinsi}`,
            font: {
                size: 14
            }
        },
        xaxis: {
            title: 'Tahun'
        },
        yaxis: {
            title: 'Jumlah Penduduk (juta)'
        }
    };
    var config = {
        responsive: true
    };

    Plotly.newPlot('barplot', data, layout, config);
}

// Memperbarui peta dengan tahun pertama yang tersedia (contoh: 2018)
updateMap('2018');
