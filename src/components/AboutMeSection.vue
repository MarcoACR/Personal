<script setup lang="ts">
interface Skill {
  name: string;
  level: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: 'Vue.js',
    level: 'Avanzado',
    icon: '💚',
  },
  {
    name: 'TypeScript',
    level: 'Avanzado',
    icon: '📘',
  },
  {
    name: 'Tailwind CSS',
    level: 'Avanzado',
    icon: '🎨',
  },
  {
    name: 'Golang',
    level: 'Intermedio',
    icon: '🔥',
  },
  {
    name: 'NodeJS',
    level: 'Intermedio',
    icon: '🟢',
  },
  {
    name: 'Git & GitHub',
    level: 'Intermedio',
    icon: '📚',
  },
];
</script>

<template>
  <section id="about" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sobre Mi</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6 animate-[slide-in_0.3s_ease-out]">
          <p class="text-lg text-gray-600 leading-relaxed">
            Soy un desarrollador de software apasionado por crear soluciones inovvadoras que marquen
            la diferencia. Con mas de 5 años de experiencia en e desarrollo de software, me
            especializo en crear aplicaciones escalable y centradas en el usuario.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            Mi enfoque se basa en la combinacion de codigo limpio, mejores practicas de desarrollo
            en un diseño intuitivo. Me encanta aprender nuevas tecnologias y enfrentar desafios
            tecnicos complejos.
          </p>
          <p class="text-lg text-gray-600 leading-relaxed">
            cuando no estoy programando, disfruto contribuyendo a proyectos de codigo abierto,
            leyendo sobre las ultimas tendencias tecnologias y explorando nuevos fraworks.
          </p>
        </div>
        <!-- Skills grid -->
        <div class="animate-fade-up">
          <h3 class="text-2xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
            Tenologias y herramientas.
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="group bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 hover:scale-105 transition-all duration-300 border border-gray-100 hover:border-blue-100"
            >
              <div class="text-3xl mb-2" v-html="skill.icon"></div>
              <h4 class="font-medium text-gray-800 group-hover:text-blue-700">{{ skill.name }}</h4>
              <p class="text-sm text-gray-600 mt-1">{{ skill.level }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
