<script setup lang="ts">
const props = defineProps<{ path: string }>()
const url = `https://github.com/scbd/bioland-docs/edit/master/docs/${props.path}`
</script>

<template>
  <div class="edit-included-link">
    <a class="edit-link-button" :href="url" target="_blank" rel="noreferrer">
      <span class="vpi-square-pen edit-link-icon" />
      Edit this included page on GitHub
    </a>
  </div>
</template>

<style scoped>
.edit-included-link {
  margin: 16px 0;
}

.edit-link-button {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 32px;
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}

.edit-link-button:hover {
  color: var(--vp-c-brand-2);
}

.edit-link-icon {
  width: 18px;
  height: 18px;
  fill: currentColor;
}
</style>
