<script setup lang="ts">
const technologies: string[] = [
  'Java',
  'Spring Boot',
  'Vue.js',
  'Nuxt 3',
  'Git',
  'PostgreSQL',
  'TypeScript',
  'Tailwind CSS',
]

const links: { text: string, url: string }[] = [
  { text: 'LinkedIn', url: '#' },
  { text: 'GitHub', url: '#' },
  { text: "CV'yi indir", url: '#' }
]
</script>
<template>
  <Header />
  <div class="px-6 py-16 max-w-4xl mx-auto min-h-screen">
    <!-- Başlık ve Giriş -->
    <section class="text-center mb-16">
      <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">{{ $t('about.title') }}</h1>
      <p class="text-neutral-400 text-lg leading-relaxed animate-slide-up">
        {{ $t('about.intro') }}
      </p>
    </section>

    <!-- Tech Stack -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-white mb-6 animate-fade-in">{{ $t('about.technologies') }}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        <div v-for="(tech, index) in technologies" 
             :key="tech"
             :style="{ animationDelay: `${index * 100}ms` }"
             class="bg-neutral-800 rounded-lg py-4 text-green-400 font-medium animate-pop-in tech-card">
          {{ tech }}
        </div>
      </div>
    </section>

    <!-- Kişisel Not -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-white mb-4 animate-fade-in">{{ $t('about.story.title') }}</h2>
      <p class="text-neutral-400 leading-relaxed animate-slide-up">
        {{ $t('about.story.content') }}
      </p>
    </section>

    <!-- CTA -->
    <section class="text-center">
      <p class="text-neutral-500 mb-4 animate-fade-in">{{ $t('about.cta.info') }}</p>
      <div class="flex justify-center gap-4">
        <a v-for="(link, index) in links" 
           :key="link.text"
           :href="link.url"
           :style="{ animationDelay: `${index * 150}ms` }"
           class="text-green-400 hover:underline animate-bounce-in">
          {{ link.text === "CV'yi indir" ? $t('about.cta.cv') : link.text }}
        </a>
      </div>
    </section>
  </div>
</template>


<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
  80% {
    opacity: 1;
    transform: scale(0.89);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

.animate-pop-in {
  animation: popIn 0.5s ease-out forwards;
  opacity: 0;
}

.animate-bounce-in {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  opacity: 0;
}

.tech-card {
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);
  background-color: rgba(38, 38, 38, 1);
  cursor: pointer;
}
</style>
