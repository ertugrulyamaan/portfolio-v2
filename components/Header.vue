<script setup>
const menuItems = [
  { href: '/projects', text: 'Projects' },
  { href: '/blog', text: 'Blog' },
  { href: '/about', text: 'About' }
]
</script>

<template>  
    <header class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between py-6">
            <div 
              class="flex items-center">
                <div class="flex items-center">
                    <a
                      href="/"
                      class="text-xl font-bold text-gray-200 ml-2">
                      Ertuğrul Yaman
                    </a>
                </div>
                <div class="hidden md:flex items-center space-x-8 ml-8">
                    <a 
                      v-for="(item, index) in menuItems" 
                      :key="item.href"
                      :href="item.href"
                      class="text-gray-200 hover:text-gray-400 transition-colors cursor-pointer">
                      {{ item.text }}
                    </a>
                </div>
            </div>
            
            <button
              class="md:hidden text-gray-200 hover:text-gray-400">
                <span class="sr-only">Menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div class="flex items-center">
                <LanguageSwitcher />
            </div>
        </nav>
    </header>
</template>