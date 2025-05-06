<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <div class="flex border-b border-neutral-800 mb-6">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        class="py-2 px-4 text-sm font-medium focus:outline-none transition-all duration-300 relative"
        :class="activeTab === index ? 'text-green-400 border-b-2 border-green-400' : 'text-neutral-400 hover:text-green-400'"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
      <Transition
        mode="out-in"
        enter-active-class="animate-fadeIn"
        leave-active-class="animate-fadeOut"
      >
        <div v-if="activeTab === 0" :key="0">
          <h4 class="text-xl font-semibold mb-2">Spring'de @Cacheable Kullanımı</h4>
          <p class="text-neutral-400 mb-4">Gerçek dünya örneğiyle Java Spring uygulamalarında cache kullanımı üzerine detaylı bir yazı.</p>
          <a href="#" class="text-green-400 hover:underline">Yazıyı Oku</a>
        </div>
        <div v-else-if="activeTab === 1" :key="1">
          <h4 class="text-xl font-semibold mb-2">Java ile Microservice Mimarisi</h4>
          <p class="text-neutral-400 mb-4">Java ve Spring Boot kullanarak mikroservis tabanlı uygulama geliştirme üzerine temel bilgiler.</p>
          <a href="#" class="text-green-400 hover:underline">Yazıyı Oku</a>
        </div>
        <div v-else :key="2">
          <h4 class="text-xl font-semibold mb-2">Nuxt 3 ile SEO Uyumlu Sayfalar</h4>
          <p class="text-neutral-400 mb-4">Nuxt 3'te SEO'yu güçlendiren meta tag, sitemap ve diğer stratejiler üzerine bilgiler.</p>
          <a href="#" class="text-green-400 hover:underline">Yazıyı Oku</a>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref(0)

const tabs = [
  { label: 'Tümü' },
  { label: 'Java' },
  { label: 'Nuxt' }
]
</script>

<style>
.animate-fadeIn {
  animation: fadeIn 0.3s ease-in;
}

.animate-fadeOut {
  animation: fadeOut 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
    filter: blur(10px);
  }
}
</style>