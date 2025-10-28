<template>
  <div class="movisoft-logo">
    <svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Elipse principal (azul) -->
      <ellipse cx="100" cy="60" rx="75" ry="45" fill="#1E88E5" opacity="0.95"/>
      
      <!-- Elipses internas con efecto de profundidad -->
      <ellipse cx="100" cy="60" rx="68" ry="40" fill="#1976D2" opacity="0.9"/>
      <ellipse cx="100" cy="60" rx="60" ry="35" fill="#1565C0" opacity="0.85"/>
      <ellipse cx="100" cy="60" rx="52" ry="30" fill="#0D47A1" opacity="0.8"/>
      
      <!-- Líneas curvas decorativas (blancas) -->
      <path d="M 40 60 Q 60 45, 80 60" stroke="white" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round"/>
      <path d="M 50 60 Q 67 48, 84 60" stroke="white" stroke-width="2.5" fill="none" opacity="0.6" stroke-linecap="round"/>
      <path d="M 60 60 Q 73 51, 86 60" stroke="white" stroke-width="2" fill="none" opacity="0.5" stroke-linecap="round"/>
      
      <!-- Líneas en el otro lado -->
      <path d="M 120 60 Q 133 51, 146 60" stroke="white" stroke-width="2" fill="none" opacity="0.5" stroke-linecap="round"/>
      <path d="M 116 60 Q 133 48, 150 60" stroke="white" stroke-width="2.5" fill="none" opacity="0.6" stroke-linecap="round"/>
      <path d="M 120 60 Q 140 45, 160 60" stroke="white" stroke-width="3" fill="none" opacity="0.7" stroke-linecap="round"/>
      
      <!-- Texto MoviSoft -->
      <text x="100" y="140" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="bold" fill="#1A237E" text-anchor="middle">MoviSoft</text>
    </svg>
  </div>
</template>

<script setup>
// Componente de logo SVG de MoviSoft
</script>

<style scoped>
.movisoft-logo {
  width: 100%;
  height: 100%;
}
</style>
