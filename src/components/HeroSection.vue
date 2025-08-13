<script setup lang="ts">
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <section
    id="hero"
    class="min-h-screen flex item-center justify-center bg-gradient-to-br from-gray-50 to-while relative overflow-hidden"
  >
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
    ></div>
    <div
      class="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"
    ></div>
    <div
      class="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"
    ></div>

    <div class="container-custom text-center relative z-10">
      <div class="animate-fade-up py-20">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
          alt="MC"
          class="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-white shadow-lx object-cover"
        />
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
          Marco A Castro
        </h1>
        <h2 class="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
          Desarrollador de Software
        </h2>
        <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Tranfomando ideas en epxperiencias digitales excepcionale con codigo limpio y diseño
          centrado en el usuario.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button @click="scrollToSection('projects')" class="btn-primary group">
            ver mis proyectos.
            <svg
              class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </button>
          <button @click="scrollToSection('contact')" class="btn-secondary">Contactar</button>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform-translate-x--0.5 animate-bounce">
        <button
          @click="scrollToSection('about')"
          class="text-gray-600 hover:text-gray-700 transition-colors duration-200"
          aria-label="scroll to next section"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
