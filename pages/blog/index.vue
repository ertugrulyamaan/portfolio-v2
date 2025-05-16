<script lang="ts" setup>
import { ref, computed } from 'vue'
const { locale } = useI18n()


interface Post {
  title: string
  description: string
  link: string
  category: string
}

const activeTab:Ref<number> = ref(0)

const tabs = computed(() => [
  { label: locale.value === 'tr' ? 'Tümü' : 'All' },
  { label: 'Java' },
  { label: 'Nuxt' }
])

const javaPostsTR: Post[] = [
  {
    title: 'Spring Boot ile Mikroservis Mimarisi',
    description: 'Mikroservis mimarisinin temel prensipleri ve Spring Boot ile nasıl uygulanacağı hakkında detaylı bir rehber.',
    link: 'https://medium.com/@your-username/spring-boot-microservices-tr',
    category: 'Java'
  },
  {
    title: '@Cacheable Annotation Kullanımı',
    description: 'Spring Framework\'te caching mekanizmasının etkin kullanımı ve performans optimizasyonu.',
    link: 'https://medium.com/@your-username/spring-caching-tr',
    category: 'Java'
  }
]

const javaPostsEN: Post[] = [
  {
    title: 'Microservice Architecture with Spring Boot',
    description: 'A detailed guide on microservice architecture principles and how to implement them with Spring Boot.',
    link: 'https://medium.com/@your-username/spring-boot-microservices-en',
    category: 'Java'
  },
  {
    title: 'Using @Cacheable Annotation',
    description: 'Effective use of caching mechanism and performance optimization in Spring Framework.',
    link: 'https://medium.com/@your-username/spring-caching-en',
    category: 'Java'
  }
]

const nuxtPostsTR: Post[] = [
  {
    title: 'Nuxt 3 ile SEO Optimizasyonu',
    description: 'Nuxt 3 projelerinde SEO performansını artırmak için kullanabileceğiniz en iyi pratikler ve teknikler.',
    link: 'https://medium.com/@your-username/nuxt-3-seo-tr',
    category: 'Nuxt'
  },
  {
    title: 'Nuxt 3 ve TypeScript',
    description: 'Nuxt 3 projelerinde TypeScript kullanımı ve type-safe geliştirme süreçleri hakkında kapsamlı bir rehber.',
    link: 'https://medium.com/@your-username/nuxt-3-typescript-tr',
    category: 'Nuxt'
  }
]

const nuxtPostsEN: Post[] = [
  {
    title: 'SEO Optimization with Nuxt 3',
    description: 'Best practices and techniques you can use to improve SEO performance in Nuxt 3 projects.',
    link: 'https://medium.com/@your-username/nuxt-3-seo-en',
    category: 'Nuxt'
  },
  {
    title: 'Nuxt 3 and TypeScript',
    description: 'A comprehensive guide on using TypeScript and type-safe development processes in Nuxt 3 projects.',
    link: 'https://medium.com/@your-username/nuxt-3-typescript-en',
    category: 'Nuxt'
  }
]

const javaPosts = computed(() => locale.value === 'tr' ? javaPostsTR : javaPostsEN)
const nuxtPosts = computed(() => locale.value === 'tr' ? nuxtPostsTR : nuxtPostsEN)
const allPosts = computed(() => [...javaPosts.value, ...nuxtPosts.value])
</script>


<template>
  <div class="min-h-screen bg-neutral-950">
    <Header />
    <div class="max-w-6xl mx-auto px-4 py-10">
      <h1 class="text-4xl font-bold text-white mb-8">Blog Posts</h1>
      
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

      <div class="space-y-6">
        <Transition
          mode="out-in"
          enter-active-class="animate-fadeIn"
          leave-active-class="animate-fadeOut"
        >
          <div v-if="activeTab === 0" :key="0" class="space-y-6">
            <article v-for="post in allPosts" :key="post.title" class="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
              <div class="flex justify-between items-start mb-2">
                <h2 class="text-xl font-semibold text-white">{{ post.title }}</h2>
                <span class="px-2 py-1 text-xs rounded-full" 
                      :class="post.category === 'Java' ? 'bg-blue-500/10 text-blue-400' : 'bg-green-500/10 text-green-400'">
                  {{ post.category }}
                </span>
              </div>
              <p class="text-neutral-400 mb-4">{{ post.description }}</p>
              <a :href="post.link" target="_blank" class="text-green-400 hover:underline inline-flex items-center">
                {{ $t('blog.readOnMedium') }}
                <span class="ml-2">→</span>
              </a>
            </article>
          </div>
          <div v-else-if="activeTab === 1" :key="1" class="space-y-6">
            <article v-for="post in javaPosts" :key="post.title" class="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
              <h2 class="text-xl font-semibold text-white mb-2">{{ post.title }}</h2>
              <p class="text-neutral-400 mb-4">{{ post.description }}</p>
              <a :href="post.link" target="_blank" class="text-green-400 hover:underline inline-flex items-center">
                {{ $t('blog.readOnMedium') }}
                <span class="ml-2">→</span>
              </a>
            </article>
          </div>
          <div v-else :key="2" class="space-y-6">
            <article v-for="post in nuxtPosts" :key="post.title" class="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
              <h2 class="text-xl font-semibold text-white mb-2">{{ post.title }}</h2>
              <p class="text-neutral-400 mb-4">{{ post.description }}</p>
              <a :href="post.link" target="_blank" class="text-green-400 hover:underline inline-flex items-center">
                {{ $t('blog.readOnMedium') }}
                <span class="ml-2">→</span>
              </a>
            </article>
          </div>
        </Transition>
      </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped>
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
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>