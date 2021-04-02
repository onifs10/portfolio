<template>
  <div class="parent">
    <div class="div1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quidem natus
      quibusdam qui! Pariatur, excepturi corrupti nemo consequatur error
      explicabo recusandae cumque laudantium deserunt repellat asperiores
      ducimus temporibus nisi voluptas.
    </div>
    <div class="div2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
      repudiandae, maxime, dolor maiores tenetur ratione perferendis aliquam,
      mollitia inventore optio sit et sapiente assumenda ipsa. Inventore at quas
      consequuntur dolorum.
    </div>
    <div class="div3">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus non
      placeat corrupti, dolorum voluptatem quasi, dignissimos at quisquam
      perspiciatis minus accusantium minima. Temporibus repellat eos laborum cum
      eligendi libero quo.
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectGrid',
}
</script>

<style lang="scss" scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 6px;
}

.div1 {
  grid-area: 1 / 1 / 5 / 8;
}
.div2 {
  grid-area: 1 / 8 / 5 / 11;
}
.div3 {
  grid-area: 5 / 1 / 6 / 11;
}
</style>
