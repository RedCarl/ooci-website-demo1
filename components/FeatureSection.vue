<template>
  <section id="features" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-4">核心功能</h2>
      <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        我们提供全方位的智能化解决方案，助力企业数字化转型
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.title" 
          class="feature-card bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
          :class="{ 'feature-card-visible': isVisible }"
          :style="{ 'animation-delay': `${index * 200}ms` }"
        >
          <div 
            class="icon-wrapper w-16 h-16 mb-6 mx-auto"
            :class="getIconAnimation(index)"
          >
            <component 
              :is="feature.icon" 
              class="w-full h-full text-blue-600 transition-all duration-500"
            />
          </div>
          <h3 class="text-xl font-semibold mb-4 text-center">{{ feature.title }}</h3>
          <p class="text-gray-600 text-center">{{ feature.description }}</p>
          <ul class="mt-4 space-y-2">
            <li 
              v-for="detail in feature.details" 
              :key="detail"
              class="flex items-center text-gray-600"
            >
              <CheckCircleIcon class="w-5 h-5 text-green-500 mr-2" />
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { CloudArrowUpIcon, ShieldCheckIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/vue/24/outline'

const isVisible = ref(false)

const features = [
  {
    title: '云端存储',
    description: '安全可靠的云端存储解决方案，随时随地访问您的数据',
    icon: CloudArrowUpIcon,
    details: [
      '自动数据备份',
      '多端同步',
      '实时协作'
    ]
  },
  {
    title: '数据安全',
    description: '采用先进的加密技术，确保您的数据安全',
    icon: ShieldCheckIcon,
    details: [
      '端到端加密',
      '访问控制',
      '安全审计'
    ]
  },
  {
    title: '数据分析',
    description: '强大的数据分析工具，助力业务决策',
    icon: ChartBarIcon,
    details: [
      '实时监控',
      '智能预测',
      '可视化报表'
    ]
  }
]

const getIconAnimation = (index) => {
  const animations = [
    'hover:scale-110 hover:rotate-12',
    'hover:scale-110 hover:rotate-0',
    'hover:scale-110 hover:-rotate-12'
  ]
  return animations[index]
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  const section = document.getElementById('features')
  if (section) {
    observer.observe(section)
  }
})
</script>

<style scoped>
.feature-card {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card-visible {
  opacity: 1;
  transform: translateY(0);
}

.icon-wrapper {
  position: relative;
}

.icon-wrapper::after {
  content: '';
  position: absolute;
  inset: -0.5rem;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
  transition: all 0.3s ease;
}

.icon-wrapper:hover::after {
  transform: scale(1.2);
}
</style>