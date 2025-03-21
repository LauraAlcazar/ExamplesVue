<template>
    <div id="map" ref="mapElement" class="map-container"></div>
</template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  const mapElement = ref(null)
  
  onMounted(() => {
    const map = L.map(mapElement.value).setView([40.4168, -3.7038], 13)
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map)
  
    L.marker([40.4168, -3.7038])
      .addTo(map)
      .bindPopup('¡Hola estas en Madrid!')
      .openPopup()
  })
  </script>
  
  <style scoped>
  .map-container {
    height: 500px;
    width: 100%;
  }
  </style>