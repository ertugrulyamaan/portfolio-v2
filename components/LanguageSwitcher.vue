<script setup lang="ts">
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const flags: { [key: string]: string } = {
  'tr': '🇹🇷',
  'en': '🇬🇧',
}
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center gap-3">
    <div class="flex gap-2">
      <NuxtLink 
        v-for="locale in locales" 
        :key="locale.code" 
        :to="switchLocalePath(locale.code)"
        :class="[
          'flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300',
          locale.code === $i18n.locale
            ? 'bg-primary-500 text-white shadow-sm ring-2 ring-primary-500/20'
            : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700'
        ]"
        :title="locale.name"
      >
        <span>{{ flags[locale.code] }}</span>
        <span>{{ locale.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>