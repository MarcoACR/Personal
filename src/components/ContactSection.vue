<script setup lang="ts">
import { ref, reactive } from 'vue';

interface ConactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const form = reactive<ConactForm>({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const errors = reactive<FormErrors>({});
const isSubmitting = ref(false);
const showSuccess = ref(false);

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateForm = (): boolean => {
  Object.keys(errors).forEach(key => {
    delete errors[key as keyof FormErrors];
  });
  let isValid = true;
  if (!form.name.trim()) {
    errors.name = 'El nombre es querido';
    isValid = false;
  }

  if (!form.email.trim()) {
    errors.email = 'El email es querido';
    isValid = false;
  } else if (!validateEmail(form.email)) {
    errors.email = 'El email no es valido';
    isValid = false;
  }

  if (!form.subject.trim()) {
    errors.subject = 'El asunto es querido';
    isValid = false;
  }
  if (!form.message.trim()) {
    errors.message = 'El message es querido';
    isValid = false;
  } else if (form.message.trim().length < 10) {
    errors.message = 'El message debe contener al menos 10 cacteres.';
    isValid = false;
  }
  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));

    Object.keys(form).forEach(key => {
      form[key as keyof ConactForm] = '';
    });
    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
  } catch (error) {
    console.error('Error sending message: ', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hablemos</h2>
        <div class="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Tienes un proyecto en mente? Me encantaria saber mas sobre tu idea y como podemos trabajar
          juntos.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- ContactSection Info -->
        <div class="animate-slide-in">
          <h3 class="text-2xl font-semibold text-gray-900 mb-8">Informacion de contacto</h3>
          <div class="space-y-6 mb-8">
            <div class="flex items-center group">
              <div
                class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-200"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="font-medium text-gray-900">Email</p>
                <a
                  href="mailto:marco.castro.22@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  aria-label="Email"
                >
                  marco.castro.22@outlook.com
                </a>
              </div>
            </div>

            <div class="flex items-center group">
              <div
                class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-200"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="font-medium text-gray-900">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/marco-acr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  linkedin.com/in/marco-acr
                </a>
              </div>
            </div>

            <div class="flex items-center group">
              <div
                class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-200"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="ml-4">
                <p class="font-medium text-gray-900">GitHub</p>
                <a
                  href="https://github.com/MarcoACR"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  github.com/MarcoACR
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
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
        </div>

        <!-- ContactSection Form -->
        <div class="animate-fade-up">
          <form @submi.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2"
                  >Nombre Completo *</label
                >
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  :class="[
                    'peer w-full px-4 py-3 border rounded-lg  focus:border-sky-500 focus:outline focus:outline-sky-500 transition-colors duration-200',
                    errors.name ? 'border-red-300' : 'border-gray-600',
                  ]"
                  placeholder="Tu nombre completo."
                />
                <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  :class="[
                    'peer w-full px-4 py-3 border rounded-lg  focus:border-sky-500 focus:outline focus:outline-sky-500 transition-colors duration-200',
                    errors.email ? 'border-red-300' : 'border-gray-600',
                  ]"
                  placeholder="tu@email.com"
                />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Mensaje *
              </label>
              <textarea
                rows="5"
                id="message"
                v-model="form.message"
                :class="[
                  'peer w-full px-4 py-3 border rounded-lg  focus:border-sky-500 focus:outline focus:outline-sky-500 transition-colors duration-200 resize-vertical',
                  errors.email ? 'border-red-300' : 'border-gray-600',
                ]"
                placeholder="Cuentame sobre tu proyecto o idea..."
              />
              <p v-if="errors.message" class="mt-1 text-sm text-red-600">{{ errors.message }}</p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disable:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Enviar Mensaje</span>
              <span v-else class="flex items-center justify-center">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviado...
              </span>
            </button>
          </form>
          <!--          Success Message-->
          <div v-if="showSuccess" class="mt-6 p4 bg-green-400 border border-green-400 rounded-lg">
            <div class="flex">
              <svg
                class="w-5 h-5 text-green-400 mr-2 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="text-green-700 font-medium">
                Mensaje Enviado correctamente, te contactare pronto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
