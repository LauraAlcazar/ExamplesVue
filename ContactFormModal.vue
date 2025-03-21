<template>
  <!-- Botón para abrir el popup -->
  <button aria-label="Open contact form" class="btn" @click="openModal">
    <img src="@/assets/Email.png" alt="Email icon" />
  </button>

  <!-- Teleport para enviar el modal al body -->
  <teleport to="body">
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-container">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t('contactFrom.formTitle') }}</h5>
          <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
        </div>

        <div class="modal-body">
          <!-- Formulario de contacto -->
          <form novalidate @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">{{ $t('contactFrom.nameLabel') }}</label>
              <input
                id="name"
                v-model.trim="form.name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.name }"
                required
                :placeholder="$t('contactFrom.namePlaceholder')"
              />
              <div class="invalid-feedback">{{ errors.name }}</div>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">{{ $t('contactFrom.emailLabel') }}</label>
              <input
                id="email"
                v-model.trim="form.email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors.email }"
                required
                :placeholder="$t('contactFrom.emailPlaceholder')"
              />
              <div class="invalid-feedback">{{ errors.email }}</div>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">{{ $t('contactFrom.menssageLabel') }}</label>
              <textarea
                id="message"
                v-model.trim="form.message"
                class="form-control"
                :class="{ 'is-invalid': errors.message }"
                rows="4"
                required
                :placeholder="$t('contactFrom.messagePlaceholder')"
              ></textarea>
              <div class="invalid-feedback">{{ errors.message }}</div>
            </div>

            <button type="submit" class="btn w-100">{{ $t('contactFrom.buttonText') }}</button>
          </form>

          <!-- Mensaje de éxito -->
          <div v-if="successMessage" class="alert alert-success mt-3">
            {{ successMessage }}
          </div>

          <div v-if="errorMessage" class="alert alert-danger mt-3">
            {{ errorMessage }}
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  import emailjs from "emailjs-com";
  import { ref, onBeforeUnmount } from 'vue';
  const { t } = useI18n()

  const form = ref({
    name: '',
    email: '',
    message: ''
  })

  const errors = ref({
    name: '',
    email: '',
    message: ''
  })

  const successMessage = ref('')
  const errorMessage = ref('')
  const showModal = ref(false)

  const validateForm = () => {
    errors.value = { name: '', email: '', message: '' }
    let valid = true

    if (!form.value.name) {
      errors.value.name = t('contactFrom.nameError')
      valid = false
    }
    if (!form.value.email || !form.value.email.includes('@')) {
      errors.value.email = t('contactFrom.emailError')
      valid = false
    }
    if (!form.value.message || form.value.message.length < 10) {
      errors.value.message = t('contactFrom.messageError')
      valid = false
    }
    return valid
  }

  const submitForm = () => {
    if (validateForm()) {
      sendEmail();
      setTimeout(() => {
        successMessage.value = ''
        errorMessage.value = ''
        closeModal()
      }, 3000)
      form.value = { name: '', email: '', message: '' }
    }
  }

  const sendEmail = async () => {
    try {
      await emailjs.send(
        "service_op3i901",
        "template_1rl88hh",
        {
          user_name: form.value.name,
          user_email: form.value.email,
          message: form.value.message,
        },
        "_utJZl95F3gWDqWpO"
      );
      successMessage.value = t('contactFrom.messageSuccess');
    } catch (error) {
      errorMessage.value = t('contactFrom.messageErrorSend');
    }
  };

  const openModal = () => {
    showModal.value = true;
    document.addEventListener('keydown', handleKeydown);
  };

  const closeModal = () => {
    showModal.value = false;
    document.removeEventListener('keydown', handleKeydown);
  }

  const handleKeydown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown);
  });
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.modal-container {
  background: #303645;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  color: white;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
.modal-body {
  padding-top: 10px;
}
.btn-close {
  cursor: pointer;
}
</style>
😎
