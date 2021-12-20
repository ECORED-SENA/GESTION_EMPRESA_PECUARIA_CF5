<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    
    .cajon-b.color-acento-contenido.p-3.mb-5
      p.mb-0 Apreciado aprendiz, bienvenido a esta experiencia de aprendizaje diseñada en torno a los ejes temáticos relacionados con las materias primas para el alimento animal. Se le invita a observar el siguiente recurso educativo para que identifique el contexto de donde surge el presente componente de formación.
    
    figure
      .video
        <iframe width="853" height="480" src="https://www.youtube.com/embed/iCQT4RwcV24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
