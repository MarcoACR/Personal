<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import AboutMe from '@/components/AboutMe.vue';
import HeroSection from '@/components/HeroSection.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';

interface NavItem {
  id: string;
  name: string;
}

const navItems: NavItem[] = [
  { id: 'hero', name: 'Inicio' },
  { id: 'about', name: 'Sobre Mi' },
  { id: 'projects', name: 'Proyectos' },
  { id: 'contact', name: 'Contacto' },
];

const isMobileMenuOpen = ref(false);
const showScrollTop = ref(false);

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <!-- Navigation -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300"
    >
      <div class="container-custom">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a
            :href="`#${navItems[0].id}`"
            @click.prevent="scrollToSection('hero')"
            class="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200"
          >
            Inicio MC
          </a>
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollToSection(item.id)"
              class="text-gray-600 hover:text-gray-600 font-medium transition-colors duration-200 relative group"
            >
              {{ item.name }}
              <span
                class="absolute bottom-1 left-0 w-0 h-0.5 bg-gray-600 group hover:w-full transition-all duration-200"
              ></span>
            </a>
          </div>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div
          v-if="isMobileMenuOpen"
          class="md:hidden py-4 border-t border-gray-100 animate-fade-in"
        >
          <div class="flex flex-col space-y-3">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="
                scrollToSection(item.id);
                toggleMobileMenu();
              "
              class="text-gray-600 hover:text-gray-600 font-medium px-2 py-1 routed transition-colors duration-200"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <!-- Contained -->
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container-custom">
        <div class="text-center">
          <p class="text-xl font-semibold mb-4">Marco Castro</p>
          <p class="text-gray-400 mb-6">Desarrollador de Software</p>
          <div class="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/marco-acr/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-while transition-color duration-200"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="https://github.com/MarcoACR"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="mailto:marco.castro.22@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-while transition-colors duration-200"
              aria-label="Email"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="border-transparent pt-8">
            <p class="text-gray-400">
              © {{ new Date().getFullYear() }} Marco Castro. Todos los derechos reservados.
            </p>
            <p class="text-gray-500 text-sm mt-2">Construido con Vue 3 y Tailwind.</p>
          </div>
        </div>
      </div>
    </footer>

    <!-- Scroll to top button -->
    <button
      v-if="showScrollTop"
      @click="scrollTop"
      class="fixed bottom-8 right-8 w-12 h-12 bg-gray-600 hover:bg-gray-700 text-while rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
    >
      <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped></style>
