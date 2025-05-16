<script setup lang="ts">
import { ref, onMounted } from 'vue'

const titles:string[] = ['Full Stack Developer', 'Backend Developer', 'Frontend Developer']
const currentTitleIndex:Ref<number> = ref(0)
const currentTitle:Ref<string> = ref(titles[0])
const isTyping:Ref<boolean> = ref(true)


const techs: { name: string, icon: string }[] = [
  { name: 'Nuxt', icon: '▲' },
  { name: 'Vue 3', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🌱' },
]


onMounted(() => {
  startTitleAnimation()
})

const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

const startTitleAnimation = async () => {
  while (true) {
    isTyping.value = true
    await sleep(3000)
    isTyping.value = false
    await sleep(500)
    
    currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length
    currentTitle.value = titles[currentTitleIndex.value]
  }
}
</script>

<template>
  <section class="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 relative">
    <div class="max-w-6xl mx-auto w-full relative z-10">
      <div class="glass-card p-8 rounded-2xl">
        <h1 class="text-5xl md:text-7xl font-bold pb-2 mb- gradient-text animate-slide-up">
          {{ $t('hero.title') }}
        </h1>

        <div class="w-fit">
          <h2 class="text-2xl md:text-4xl font-medium mb-8 text-emerald-500"
              :class="{ 'typewriter-in': isTyping, 'typewriter-out': !isTyping }">
            {{ currentTitle }}
          </h2>
        </div>

        <p class="text-3xl md:text-5xl font-light text-neutral-200 animate-fade-in">
          {{ $t('hero.description') }}
        </p>

        <div class="flex flex-wrap mt-8 space-x-4">
          <div v-for="(tech, index) in techs"
               :key="tech.name"
               class="tech-badge mb-4 mr-4"
               :style="{ animationDelay: `${index * 0.1}s` }">
            <span class="text-emerald-500 mr-2">{{ tech.icon }}</span>
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.gradient-text {
  background: linear-gradient(-45deg, #10b981, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  background-color: rgba(23, 23, 23, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  animation: slideUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-badge:hover {
  transform: translateY(-2px);
  background: rgba(16, 185, 129, 0.1);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.typewriter-in {
  border-right: 3px solid #10b981;
  white-space: nowrap;
  overflow: hidden;
  animation: typing-in 3s steps(30, end),
             blink-caret 0.75s step-end infinite;
  width: 0;
}

.typewriter-out {
  border-right: 3px solid #10b981;
  white-space: nowrap;
  overflow: hidden;
  animation: typing-out 0.5s steps(30, end),
             blink-caret 0.75s step-end infinite;
  width: 100%;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typing-in {
  from { width: 0 }
  to { width: 100% }
}

@keyframes typing-out {
  from { width: 100% }
  to { width: 0 }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #10b981 }
}

.animate-slide-up {
  animation: slideUp 0.8s ease forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style> 