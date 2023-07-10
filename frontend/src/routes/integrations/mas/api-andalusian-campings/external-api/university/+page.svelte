<script>
  //@ts-nocheck
  import { onMount } from "svelte";

  let API = "https://sos2223-jul-mas.ew.r.appspot.com/api/v3/campings";
  let data = [];
  let uvIndexSevilla = 0; // Variable para almacenar la media de precipitaciones de Sevilla

  async function getData() {
    const response = await fetch(API);
    data = await response.json();
  }

  async function getUVIndexSevilla() {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=37.3828&longitude=-5.9732&hourly=temperature_2m,relativehumidity_2m,precipitation,uv_index&start_date=2023-03-07&end_date=2023-07-10";
    const response = await fetch(url);
    const forecastData = await response.json();

    const hourlyData = forecastData.hourly;
    let totalUVIndex = 0;

    for (const hourData of hourlyData) {
      totalUVIndex += hourData.uv_index;
    }

    uvIndexSevilla = totalUVIndex / hourlyData.length;
  }

  function getDataAlmeria() {
    const province = "ALMERÍA";
    let sumCampingPlaces = 0;
    data.forEach((item) => {
      const itemProvince = item.state;

      if (itemProvince === province) {
        sumCampingPlaces += item.camping_places;
      }
    });
    return sumCampingPlaces;
  }

  function getDataCadiz() {
    const province = "CÁDIZ";
    let sumCampingPlaces = 0;
    data.forEach((item) => {
      const itemProvince = item.state;

      if (itemProvince === province) {
        sumCampingPlaces += item.camping_places;
      }
    });
    return sumCampingPlaces;
  }

  function getDataCordoba() {
    const province = "CÓRDOBA";
    let sumCampingPlaces = 0;
    data.forEach((item) => {
      const itemProvince = item.state;

      if (itemProvince === province) {
        sumCampingPlaces += item.camping_places;
      }
    });
    return sumCampingPlaces;
  }

  function getDataGranada() {
    const province = "GRANADA";
    let sumCampingPlaces = 0;
    data.forEach((item) => {
      const itemProvince = item.state;

      if (itemProvince === province) {
        sumCampingPlaces += item.camping_places;
      }
    });
    return sumCampingPlaces;
  }

  function getDataJaen() {
    const province = "JAÉN";
    let sumCampingPlaces = 0;
    data.forEach((item) => {
      const itemProvince = item.state;

      if (itemProvince === province) {
        sumCampingPlaces += item.camping_places;
      }
    });
    return sumCampingPlaces;
  }

  function getDataHuelva() {
    const province = "HUELVA";
    let sumCampingPlaces = 0;
    data.forEach((item) => {
      const itemProvince = item.state;

      if (itemProvince === province) {
        sumCampingPlaces += item.camping_places;
      }
    });
    return sumCampingPlaces;
  }

  function getDataMalaga() {
    const province = "MÁLAGA";
    let sumCampingPlaces = 0;
    data.forEach((item) => {
      const itemProvince = item.state;

      if (itemProvince === province) {
        sumCampingPlaces += item.camping_places;
      }
    });
    return sumCampingPlaces;
  }

  function getDataSevilla() {
    const province = "SEVILLA";
    let sumCampingPlaces = 0;
    data.forEach((item) => {
      const itemProvince = item.state;

      if (itemProvince === province) {
        sumCampingPlaces += item.camping_places;
      }
    });
    return sumCampingPlaces;
  }

  onMount(async () => {
    await Promise.all([getData(), getUVIndexSevilla()]);

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var columnData = google.visualization.arrayToDataTable([
        ["Provincia", "Campings", "Precipitaciones", { role: "style" }],
        ["Almería", getDataAlmeria(), 0, "gold"],
        ["Cádiz", getDataCadiz(), 0, "silver"],
        ["Córdoba", getDataCordoba(), 0, "red"],
        ["Granada", getDataGranada(), 0, "blue"],
        ["Jaén", getDataJaen(), 0, "yellow"],
        ["Huelva", getDataHuelva(), 0, "green"],
        ["Málaga", getDataMalaga(), 0, "orange"],
        ["Sevilla", getDataSevilla(), uvIndexSevilla, "purple"],
      ]);

      var columnOptions = {
        title: "Plazas de Camping por Provincias (Column Chart)",
        width: 1500,
        height: 900,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
      };

      var columnChart = new google.visualization.ColumnChart(
        document.getElementById("columnchart_values")
      );
      columnChart.draw(columnData, columnOptions);
    }
  });
</script>

<svelte:head>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
</svelte:head>

<div id="columnchart_values" style="width: 1500px; height: 900px;" />