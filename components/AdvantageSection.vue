<template>
  <section id="advantages" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-4">平台优势</h2>
      <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        选择我们的平台，享受更多优质服务体验
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div 
          v-for="(advantage, index) in advantages" 
          :key="advantage.title" 
          class="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
          :class="{'from-blue-50 to-indigo-50 hover:bg-gradient-to-br': index % 2 === 0}"
        >
          <div class="flex space-x-6">
            <div class="flex-shrink-0">
              <div 
                class="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-blue-600 text-2xl font-bold">{{ advantage.number }}</span>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                {{ advantage.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ advantage.description }}</p>
              <ul class="space-y-2">
                <li 
                  v-for="point in advantage.points" 
                  :key="point"
                  class="flex items-center text-gray-600"
                >
                  <CheckIcon class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'

const advantages = [
  {
    number: '01',
    title: '便捷操作',
    description: '直观的用户界面设计，无需专业培训即可快速上手',
    points: [
      '简洁清晰的操作界面',
      '智能化的功能引导',
      '完善的帮助文档'
    ]
  },
  {
    number: '02',
    title: '成本效益',
    description: '显著降低运营成本，提高资源利用效率',
    points: [
      '灵活的付费方案',
      '按需付费，避免资源浪费',
      '持续的成本优化建议'
    ]
  },
  {
    number: '03',
    title: '快速部署',
    description: '灵活的部署选项，快速适应业务需求变化',
    points: [
      '一键式部署方案',
      '多环境支持',
      '自动化运维工具'
    ]
  },
  {
    number: '04',
    title: '技术支持',
    description: '专业的技术团队提供全天候支持服务',
    points: [
      '7×24小时技术支持',
      '定期的技术培训',
      '个性化解决方案'
    ]
  }
]
</script>