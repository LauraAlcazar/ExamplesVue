<template>
  <div class="divNavbar">
    <nav class="navbar navbar-expand-lg navbar-dark shadow mb-5 rounded">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">
                <i class="bi bi-house" data-bs-toggle="tooltip" data-bs-placement="top" title="home"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" data-bs-toggle="tooltip" data-bs-placement="top" title="about me">
                <i class="bi bi-person"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#whatIdo">
                <i class="bi bi-gear" data-bs-toggle="tooltip" data-bs-placement="top" title="what I do"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#proyects">
                <i class="bi bi-code-slash" data-bs-toggle="tooltip" data-bs-placement="top" title="proyects"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" tabindex="-1" aria-disabled="true">
                <i class="bi bi-envelope" data-bs-toggle="tooltip" data-bs-placement="top" title="contact"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>   

<script setup>  
</script>

<style scoped>
nav{
  border: 2px solid lightgray;
  backdrop-filter: blur(15px);
}
@media (max-width: 768px) {
  .divNavbar{
    display:none;
  }
}
</style>