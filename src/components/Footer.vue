<template>
  <footer class="bg-dark text-light text-center py-4 mt-5 border-top">
    <div class="container">
      <p class="mb-2 fw-semibold">
        &copy; {{ currentYear }} Mark Neil Cordero. All rights reserved.
      </p>

      <div class="d-flex justify-content-center flex-wrap gap-3">
        <a
          href="https://github.com/markneilcordero"
          class="footer-link text-light text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github me-1"></i> Github
        </a>

        <a
          href="mailto:mark.neil.u.cordero@gmail.com"
          class="footer-link text-light text-decoration-none"
        >
          <i class="fas fa-envelope me-1"></i> Email
        </a>

        <a
          href="https://www.linkedin.com/in/mark-neil-cordero/"
          class="footer-link text-light text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin me-1"></i> LinkedIn
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
