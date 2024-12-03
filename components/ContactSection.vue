<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-4">联系我们</h2>
      <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        随时与我们联系，我们将为您提供专业的解决方案
      </p>

      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- 联系信息 -->
          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
            <h3 class="text-2xl font-semibold mb-6">联系方式</h3>
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <PhoneIcon class="w-6 h-6" />
                <div>
                  <p class="font-medium">客服热线</p>
                  <p class="text-blue-100">400-123-4567</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <EnvelopeIcon class="w-6 h-6" />
                <div>
                  <p class="font-medium">邮箱地址</p>
                  <p class="text-blue-100">contact@example.com</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <MapPinIcon class="w-6 h-6" />
                <div>
                  <p class="font-medium">公司地址</p>
                  <p class="text-blue-100">北京市朝阳区科技园区</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h4 class="font-medium mb-4">关注我们</h4>
              <div class="flex space-x-4">
                <a 
                  v-for="social in socials" 
                  :key="social.name"
                  :href="social.link"
                  class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <component :is="social.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- 在线咨询 -->
          <div class="p-8">
            <h3 class="text-2xl font-semibold mb-6">在线咨询</h3>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                <input 
                  type="text" 
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">电话</label>
                <input 
                  type="tel" 
                  v-model="form.phone"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请输入您的联系电话"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">咨询内容</label>
                <textarea 
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="请描述您的需求"
                ></textarea>
              </div>
              <button 
                type="submit"
                class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/vue/24/outline'

const form = ref({
  name: '',
  phone: '',
  message: ''
})

const socials = [
  {
    name: '微信',
    icon: ChatBubbleLeftRightIcon,
    link: '#'
  },
  {
    name: '微博',
    icon: UserGroupIcon,
    link: '#'
  },
  {
    name: '官网',
    icon: GlobeAltIcon,
    link: '#'
  }
]

const handleSubmit = () => {
  // 这里添加表单提交逻辑
  console.log('Form submitted:', form.value)
  // 重置表单
  form.value = {
    name: '',
    phone: '',
    message: ''
  }
}
</script>