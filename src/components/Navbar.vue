<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" to="/">Task Manager</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Tasks</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/assistant">Assistant</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/settings">Settings</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No props or logic needed
</script>
