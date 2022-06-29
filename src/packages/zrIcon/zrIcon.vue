<template>
  <svg class="icon" aria-hidden="true" :style="{ 'width': size + 'px', 'height': size + 'px', 'fill': color }">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'zrIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#e55472',
    },
    size: {
      type: Number,
      default: 16,
    },
  },

});
</script>