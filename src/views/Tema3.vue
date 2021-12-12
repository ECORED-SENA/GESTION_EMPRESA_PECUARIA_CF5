<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Ración animal
    






    
    
    
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      .h2 3.1 Técnica y métodos de elaboración
    








    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      .h2 3.2 Tratamiento de ración
    
    
    
    
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      .h2 3.3 Transformación materias primas
    
    
    
    
    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      .h2 3.4 Criterios e interpretación de fórmulas
    
    
    
    
    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      .h2 3.5 Buenas prácticas de fabricación de alimentos de uso animal








    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
