<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    activeProp: {
      type: Number,
      default: null,
    }
  },
  data() {
    return {
      Accordion: {
        count: 0,
        active: null
      }
    };
  },
  created() {
    this.Accordion.active = this.activeProp;
  },
  provide() {
    return {Accordion: this.Accordion};
  },
  watch: {
    activeProp() {
      this.Accordion.active = this.activeProp;
    }
  }
};
</script>

<style lang="scss" scoped>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item:last-child {
    border-bottom: none;
  }
}


</style>
