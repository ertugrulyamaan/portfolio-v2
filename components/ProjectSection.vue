<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  demoUrl?: string
  githubUrl?: string
  color: string // Her proje için tema rengi
}

const isModalOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const projects: Record<string, Project> = {
  aiGenerator: {
    id: 'aiGenerator',
    title: 'AI Image Generator',
    description: 'OpenAI API kullanarak metin girişinden görsel üreten yapay zeka uygulaması.',
    image: 'https://lorempixel.com/400/200',
    technologies: ['React', 'Node.js', 'OpenAI API', 'TailwindCSS'],
    features: [
      'Metin tabanlı görsel üretimi',
      'Gelişmiş prompt optimizasyonu',
      'Görsel kaydetme ve paylaşma',
      'Kullanıcı galerisi'
    ],
    demoUrl: 'https://ai-generator.example.com',
    githubUrl: 'https://github.com/username/ai-generator',
    color: 'blue'
  },
  ecommerce: {
    id: 'ecommerce',
    title: 'E-Commerce Dashboard',
    description: 'Gelişmiş analitik ve raporlama özellikleriyle modern e-ticaret yönetim paneli.',
    image: 'https://lorempixel.com/400/200',
    technologies: ['Vue.js', 'Firebase', 'Chart.js'],
    features: [
      'Gerçek zamanlı satış takibi',
      'Detaylı analitik raporları',
      'Stok yönetimi',
      'Müşteri segmentasyonu'
    ],
    demoUrl: 'https://ecommerce-dashboard.example.com',
    githubUrl: 'https://github.com/username/ecommerce-dashboard',
    color: 'cyan'
  },
  fitness: {
    id: 'fitness',
    title: 'Fitness Tracker App',
    description: 'Kişiselleştirilmiş egzersiz programları ve beslenme takibi yapan mobil uygulama.',
    image: 'https://lorempixel.com/400/200',
    technologies: ['React Native', 'Redux', 'TypeScript'],
    features: [
      'Özelleştirilmiş antrenman planları',
      'Beslenme takibi ve önerileri',
      'İlerleme grafikleri',
      'Sosyal paylaşım özellikleri'
    ],
    demoUrl: 'https://fitness-tracker.example.com',
    githubUrl: 'https://github.com/username/fitness-tracker',
    color: 'sky'
  }
}

const openModal = (projectId: string) => {
  selectedProject.value = projects[projectId]
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
  selectedProject.value = null
}
</script>

<template>
  <section class="py-20 px-4 md:px-8 lg:px-16 bg-neutral-950">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-12 text-white">
        Projects
      </h2>
      
      <!-- Grid Layout Container (Masonry yerine) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card Component -->
        <div 
          v-for="project in projects" 
          :key="project.id"
          @click="openModal(project.id)"
          class="bg-neutral-900 rounded-xl overflow-hidden cursor-pointer pb-10
                 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative group
                 flex flex-col h-[400px]"
          :class="`hover:shadow-${project.color}-500/20`"
        >
          <!-- Resim Container'ı -->
          <div class="h-48 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover"
            />
          </div>

          <!-- İçerik Container'ı -->
          <div class="p-6 flex-1 flex flex-col">
            <h3 
              class="text-xl font-bold text-white mb-3 transition-colors"
              :class="`group-hover:text-${project.color}-400`"
            >
              {{ project.title }}
            </h3>
            <p class="text-gray-400 mb-4 flex-1">
              {{ project.description }}
            </p>
            <!-- Teknolojiler -->
            <div class="flex flex-wrap gap-2 mt-auto">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                :class="`px-3 py-1 bg-${project.color}-500/10 text-${project.color}-400 rounded-full text-sm`"
              >
                {{ tech }}
              </span>
            </div>
            <!-- Detaylar Butonu -->
            <div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <span class="text-white">Detaylar →</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Modal -->
      <div v-if="isModalOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <div 
          class="fixed inset-0 bg-black/75 transition-opacity"
          @click="closeModal"
        ></div>

        <div class="flex min-h-full items-center justify-center p-4">
          <div 
            v-if="selectedProject"
            class="relative w-full max-w-3xl bg-neutral-900 rounded-2xl p-6 shadow-xl transform transition-all"
            @click.stop
          >
            <button 
              @click="closeModal"
              type="button"
              class="absolute top-4 right-4 p-2 z-20 rounded-full hover:bg-neutral-800 transition-colors text-gray-400 hover:text-white"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="mt-2">
              <div class="relative">
                <img 
                  :src="selectedProject.image" 
                  :alt="selectedProject.title"
                  class="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div class="mt-6">
                <h3 class="text-2xl font-bold text-white mb-4">{{ selectedProject.title }}</h3>
                <p class="text-gray-400 mb-6">{{ selectedProject.description }}</p>
                
                <div class="space-y-4">
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Teknolojiler</h4>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tech in selectedProject.technologies" 
                        :key="tech"
                        :class="`px-3 py-1 bg-${selectedProject.color}-500/10 text-${selectedProject.color}-400 rounded-full text-sm`"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Özellikler</h4>
                    <ul class="list-disc list-inside text-gray-400 space-y-1">
                      <li v-for="feature in selectedProject.features" :key="feature">
                        {{ feature }}
                      </li>
                    </ul>
                  </div>

                  <div class="flex justify-end gap-4 mt-8">
                    <a 
                      v-if="selectedProject.demoUrl"
                      :href="selectedProject.demoUrl"
                      target="_blank"
                      :class="`inline-flex items-center px-4 py-2 bg-${selectedProject.color}-600 hover:bg-${selectedProject.color}-700 rounded-lg text-white transition-colors`"
                    >
                      <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Demo
                    </a>
                    <a 
                      v-if="selectedProject.githubUrl"
                      :href="selectedProject.githubUrl"
                      target="_blank"
                      class="inline-flex items-center px-4 py-2 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-white transition-colors"
                    >
                      <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- More Projects Button -->
      <div class="text-center mt-12">
        <router-link 
          to="/projects" 
          class="inline-flex items-center px-8 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors text-lg font-medium text-white group"
        >
          Daha Fazla Proje
          <svg 
            class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.break-inside-avoid {
  break-inside: avoid;
}
</style>