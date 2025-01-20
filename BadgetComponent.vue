<template>
    <span v-for="badget in arrayBadgets" :key="badget.id" class="badge badge-pill">{{badget}}</span>
</template>

<script setup>  
defineProps({
  arrayBadgets: {
    type: Array,
    required: true
  }
  
})
</script>

<style scoped>
.badge{
    background-color: #6957E3;
    padding: 8px;
    border-radius: 20px;
    margin-right: 10px;
    margin-top: 5px;
}
</style>