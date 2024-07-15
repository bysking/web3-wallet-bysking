<script setup lang="ts">
import { ref } from 'vue'
import { Button } from "vant";

defineProps<{ msg: string }>()

const count = ref(0)
const  create = () => {
  console.log('create')
}
</script>

<template>
  <div>
    <Button type="primary" @click="create">创建钱包</Button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
