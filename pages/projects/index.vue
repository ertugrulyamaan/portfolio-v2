<script setup lang="ts">
import { ref } from 'vue'

interface Technology {
  name: string
  color: string
}

interface Project {
  title: string
  description: string
  image: string
  github: string
  link: string
  technologies: Technology[]
}

const projects = ref<Project[]>([
  {
    title: 'Biletandmore',
    description: 'BiletandMore deneyim turizm sitesi. Deneyimlerin arama yapılması, detaylı bilgi alınması ve yorumlarının görüntülenmesi.',
    image: 'https://picsum.photos/200/300',
    github: '',
    link: 'https://www.biletandmore.com/',
    technologies: [
      { name: 'Nuxt', color: 'bg-green-500/10 text-green-400' },
      { name: 'Bootstrap', color: 'bg-blue-500/10 text-blue-400' },
      { name: 'Pinia', color: 'bg-yellow-500/10 text-yellow-400' },
      { name: 'Axios', color: 'bg-blue-500/10 text-blue-400' }
    ]
  },
  {
    title: 'Minflix',
    description: 'Güncel ya da eski filmlerin arama yapılması, fragmanının izlenmesi ve konusu hakkında bilgi alınması.',
    image: 'https://picsum.photos/200/300',
    github: 'https://github.com/ertugrulyamaan/minflix',
    link: 'https://minflix-ertu.vercel.app/',
    technologies: [
      { name: 'React', color: 'bg-blue-500/10 text-blue-400' },
      { name: 'TailwindCSS', color: 'bg-cyan-500/10 text-cyan-400' },
      { name: 'Axios', color: 'bg-blue-500/10 text-blue-400' }
    ]
  },
  {
    title: 'RezervasyonYapp',
    description: 'Tur, aktivite ve etkinliklerinizi kolayca yayınlayın; rezervasyonları, müşteri etkileşimlerini ve geri bildirimleri tek panelden yönetin.',
    image: 'https://picsum.photos/200/300',
    github: '',
    link: 'https://www.rezervasyony.app/',
    technologies: [
      { name: 'Nuxt', color: 'bg-green-500/10 text-green-400' },
      { name: 'Vuetify', color: 'bg-indigo-500/10 text-indigo-400' },
      { name: 'Chart.js', color: 'bg-pink-500/10 text-pink-400' },
      { name: 'Pinia', color: 'bg-yellow-500/10 text-yellow-400' },
      { name: 'Axios', color: 'bg-blue-500/10 text-blue-400' },
    ]
  }
])
</script>

<template>
  <Header />
  <div class="min-h-screen bg-neutral-950 py-20 px-4 md:px-8 lg:px-16">
    <div class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16 animate-fade-in">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
          Tüm Projeler
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-delay">
          Yazılım yolculuğumda geliştirdiğim projeler. Her biri farklı teknolojiler ve çözümler içeriyor.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div v-for="(project, index) in projects" 
             :key="project.title"
             class="bg-neutral-900 rounded-xl overflow-hidden group transform hover:translate-y-[-8px] transition-all duration-300 ease-out animate-fade-up"
             :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="relative overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 right-4 transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <a :href="project.github" target="_blank" class="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors hover:rotate-12 transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div class="p-8 transform group-hover:translate-y-[-8px] transition-transform duration-300">
            <h3 class="text-2xl font-bold text-white mb-4">{{ project.title }}</h3>
            <p class="text-gray-400 mb-6">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tech in project.technologies" 
                    :key="tech.name"
                    class="`px-3 py-1 w-30 text-center rounded-full text-sm transform hover:scale-110 transition-transform duration-200`"
                    :class="tech.color"
                    >
                {{ tech.name }}
              </span>
            </div>
            <a 
              :href="project.link" 
              class="inline-flex items-center text-white group-hover:text-blue-400 transition-all duration-300"
            >
              Projeyi İncele
              <span class="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { 
    transform: translateY(20px);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fade-in 0.6s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-fade-up {
  animation: fade-up 0.8s ease-out forwards;
  opacity: 0;
}

html {
  scroll-behavior: smooth;
}

.group:hover {
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
}

.group:hover .technology-tag {
  transform: translateY(-2px);
}
</style>