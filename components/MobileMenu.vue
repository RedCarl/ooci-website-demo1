<template>
  <Transition name="fade">
    <div class="fixed inset-0 z-50 lg:hidden" v-if="isOpen">
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-black/20 backdrop-blur-sm" 
        @click="$emit('close')"
      ></div>
      
      <!-- Mobile menu panel -->
      <Transition name="slide">
        <div class="fixed inset-y-0 right-0 w-64 bg-white overflow-y-auto">
          <div class="p-4">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-xl font-bold text-gray-900">菜单</h2>
              <button 
                class="text-gray-600 hover:text-gray-900 transition-colors"
                @click="$emit('close')"
              >
                <XMarkIcon class="w-6 h-6" />
              </button>
            </div>
            <nav class="space-y-4">
              <a 
                v-for="item in menuItems" 
                :key="item.text" 
                :href="item.link"
                @click.prevent="handleClick(item.link)"
                class="block py-2 text-base font-medium text-gray-900 hover:text-blue-600 transition-colors"
              >
                {{ item.text }}
              </a>
            </nav>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  menuItems: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['close', 'select'])

const handleClick = (link) => {
  emit('select', link)
}
</script>