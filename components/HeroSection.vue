<template>
  <section class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 animate-gradient">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-4xl font-bold mb-6 animate-fade-in">智能化解决方案</h2>
        <p class="text-xl mb-8 animate-fade-in-delay">为您的业务提供全方位的数字化转型服务</p>
        <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          立即开始
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-gradient {
  background-size: 200% 200%;
  animation: gradientFlow 15s ease infinite;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
