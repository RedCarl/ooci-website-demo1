<template>
  <header
    class="bg-white shadow-sm fixed w-full top-0 z-40 transition-transform duration-300"
    :class="{ '-translate-y-full': isScrollingDown && !isMenuOpen }"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center">
        <a
          href="#home"
          @click.prevent="scrollToSection('#home')"
          class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
        >
          智能平台
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8">
        <a
          v-for="item in menuItems"
          :key="item.text"
          :href="item.link"
          @click.prevent="scrollToSection(item.link)"
          class="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2"
        >
          {{ item.text }}
          <span
            class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 origin-left"
            :class="{ 'scale-x-100': isActiveLink(item.link), 'scale-x-0': !isActiveLink(item.link) }"
          ></span>
        </a>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
        @click="toggleMenu"
      >
        <div class="w-6 h-6 relative">
          <span
            class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
            :class="[
              isMenuOpen ? 'rotate-45 top-3' : 'top-1',
            ]"
          ></span>
          <span
            class="absolute w-6 h-0.5 bg-current top-3 transition-opacity duration-300"
            :class="{ 'opacity-0': isMenuOpen }"
          ></span>
          <span
            class="absolute w-6 h-0.5 bg-current transform transition-all duration-300"
            :class="[
              isMenuOpen ? '-rotate-45 top-3' : 'top-5',
            ]"
          ></span>
        </div>
      </button>
    </nav>

    <!-- Mobile Navigation -->
    <MobileMenu
      :is-open="isMenuOpen"
      :menu-items="menuItems"
      @close="closeMenu"
      @select="scrollToSection"
    />
  </header>

  <!-- Spacer to prevent content from hiding under fixed header -->
  <div class="h-16"></div>
</template>

<script setup>
const {
  isMenuOpen,
  isScrollingDown,
  menuItems,
  toggleMenu,
  closeMenu,
  isActiveLink,
  scrollToSection
} = useNavigation()
</script>
