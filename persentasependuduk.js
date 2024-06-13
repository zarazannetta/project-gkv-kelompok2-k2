function GetData(tahun) {
  return fetch(`https://webapi.bps.go.id/v1/api/interoperabilitas/datasource/simdasi/id/25/tahun/${tahun}/id_tabel/WVRlTTcySlZDa3lUcFp6czNwbHl4QT09/wilayah/0000000/key/9116cd69006260d8a541bfe1be63f9aa`)
    .then(response => response.json())
    .then(response => response)
}

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

let geojsonData;
let selectedProvinsi = null;

window.addEventListener('load', async () => {
  let persentasePenduduk = new Object();
  for (let tahun = 2018; tahun <= 2022; tahun++) {
    let persentaseTemp = new Object();
    let { data } = await GetData(tahun);

    data[1].data.forEach((response) => {
      let label = response.label
      let persentaseString = response.variables.efg2cjrdn2.value
      let persentaseFloat = parseFloat(persentaseString.replace(",", "."))
      persentaseTemp[label] = persentaseFloat
    })

    persentasePenduduk[tahun] = persentaseTemp
  }

  // Inisialisasi Awal
  UpdateMap(persentasePenduduk[2018]);

  // Slider
  document.getElementById('year').addEventListener('input', event => {
    const year = event.target.value;

    // Update Map
    UpdateMap(persentasePenduduk[year]);

    // Update Info Box
    UpdateInfoBox(persentasePenduduk[year]);

    // Update Label Tahun
    document.getElementById('year-label').textContent = year;
  });
});

function UpdateMap(persentasePenduduk) {
  if (!geojsonData) {
    fetch('indonesia.geojson')
      .then(response => response.json())
      .then(data => {
        geojsonData = data;
        insertData(persentasePenduduk);
      });
  } else {
    insertData(persentasePenduduk);
  }
}

function UpdateInfoBox(persentasePenduduk) {
  if (selectedProvinsi) {
    selectedProvinsi.persentase = persentasePenduduk[selectedProvinsi.nama];
    // selectedProvinsi.rasio = dataKepadatan[year][selectedProvinsi.nama].rasio;
    document.getElementById('pd').innerHTML = `<h3>${selectedProvinsi.nama}</h3><p><strong><em>${selectedProvinsi.persentase}%</strong> penduduk Indonesia</em></p>`;
    // updateBarChart(selectedProvinsi.rasio);
    UpdatePieChart(selectedProvinsi.persentase, selectedProvinsi.nama)
  }
}

function UpdatePieChart(persentase, namaProvinsi) {
  var data = [{
    type: 'pie',
    values: [persentase, 100 - persentase],
    labels: [namaProvinsi, 'Provinsi Lain'],
    textinfo: 'label+percent',
    textposition: 'outside',
    automargin: true,
    marker: {
      colors: ['rgba(0, 0, 255, 0.6)', 'rgba(255, 0, 0, 0.6)']
    },
  }];

  var layout = {
    title: 'Distribusi Persentase Penduduk',
    showlegend: true,
  };

  var config = {
    responsive: true,
  };

  Plotly.newPlot('barplot', data, layout, config);
}


function insertData(persentasePenduduk) {
  geojsonData.features.forEach((feature) => {
    const provinsi = feature.properties.Provinsi;
    feature.properties.persentase = persentasePenduduk[provinsi];
    // feature.properties.rasio = dataKepadatan[year][provinsi].rasio;
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
          ['get', 'persentase'],
          0, '#FED976',
          0.5, '#FED976',
          1, '#FD8D3C',
          1.5, '#FD8D3C',
          2, '#E31A1C',
          2.5, '#BD0026',
          3, '#800026',
          3.5, '#723122',
          10, '#5E1D0E'
        ],
        'fill-opacity': 1
      }
    });

    // js untuk box putih keterangan warna
    const persentasependuduk = [
      '(0 - 0.49)%',
      '(0.5 - 0.99)%',
      '(1 - 1.49)%',
      '(1.5 - 1.99)%',
      '(2 - 2.49)%',
      '(2.5 - 2.99)%',
      '(3 - 3.49)%',
      '(3.5 - 9.99)%',
      '(10+)%'
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

    persentasependuduk.forEach((layer, i) => {
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
      const persentase = e.features[0].properties.persentase;
      // const rasio = e.features[0].properties.rasio;
      document.getElementById('pd').innerHTML = `<h3>${namaProvinsi}</h3><p><strong><em>${persentase}%</strong> penduduk Indonesia</em></p>`;
      // updateBarChart(rasio);
      UpdatePieChart(persentase, namaProvinsi)
      selectedProvinsi = {
        nama: namaProvinsi,
        persentase: persentase,
        // rasio: rasio
      };
    });

    map.on('mousemove', 'provinsi-layer', (e) => {
      if (!selectedProvinsi) {
        const namaProvinsi = e.features[0].properties.Provinsi;
        const persentase = e.features[0].properties.persentase;
        // const rasio = e.features[0].properties.rasio;
        document.getElementById('pd').innerHTML = `<h3>${namaProvinsi}</h3><p><strong><em>${persentase}%</strong> penduduk Indonesia</em></p>`;
        // updateBarChart(rasio);
        UpdatePieChart(persentase, namaProvinsi)
      }
    });

    map.on('mouseleave', 'provinsi-layer', () => {
      if (selectedProvinsi) {
        document.getElementById('pd').innerHTML = `<h3>${selectedProvinsi.nama}</h3><p><strong><em>${selectedProvinsi.persentase}%</strong> penduduk Indonesia</em></p>`;
        // updateBarChart(selectedProvinsi.rasio);
        UpdatePieChart(selectedProvinsi.persentase, selectedProvinsi.nama)
      } else {
        document.getElementById('pd').innerHTML = `<p>Arahkan kursor ke provinsi yang kamu ingin tahu!</p>`;
        document.getElementById('barplot').innerHTML = '';
      }
    });
  }
}