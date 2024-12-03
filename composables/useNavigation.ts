import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

export function useNavigation() {
  const isMenuOpen = ref(false)
  const isScrollingDown = ref(false)
  const lastScrollTop = ref(0)

  const menuItems = [
    { text: '首页', link: '#home' },
    { text: '功能', link: '#features' },
    { text: '优势', link: '#advantages' },
    { text: '联系我们', link: '#contact' }
  ]

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }

  const closeMenu = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop
    isScrollingDown.value = currentScrollTop > lastScrollTop.value && currentScrollTop > 100
    lastScrollTop.value = currentScrollTop
  }

  const scrollToSection = (link: string) => {
    closeMenu()
    const element = document.querySelector(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const isActiveLink = (link: string): boolean => {
    if (!process.client) return false
    
    const hash = window.location.hash
    if (link === '#home') {
      return hash === '' || hash === '#home'
    }
    return hash === link
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    
    // Update hash on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          if (id) {
            window.history.replaceState(null, '', `#${id}`)
          }
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isMenuOpen,
    isScrollingDown,
    menuItems,
    toggleMenu,
    closeMenu,
    isActiveLink,
    scrollToSection
  }
}