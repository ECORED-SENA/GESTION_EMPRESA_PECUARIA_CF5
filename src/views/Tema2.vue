<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Higienización de las materias primas para ración
    
    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .p-4.mb-3(style="background-color: #3c6d9d3f")
          .bloque-texto-b.p-4.px-0
            .bloque-texto-b__texto
              i.fas.fa-quote-left(style="color: #78B62E; font-size: 28px;")
              p.mb-0 La higienización de materias primas animales es una combinación de los procesos de limpieza y desinfección, cuyo objetivo es garantizar un producto inocuo, libre de patógenos contaminantes. Es importante considerar en todo momento los efectos potenciales de las actividades de la producción primaria sobre la inocuidad y la idoneidad de los alimentos. Esto incluye la identificación de cualquier punto específico de dichas actividades en el que pueda existir una alta probabilidad de contaminación y así tomar medidas para reducir al mínimo y, de ser posible, eliminar esta probabilidad.
              i.fas.fa-quote-right(style="color: #78B62E; font-size: 28px;")
            .bloque-texto-d__autor.d-flex.justify-content-start
              p.mb-0 
                b (FAO, 2020).
        p.mb-0.pt-2(style="border-top: 1px solid #78b62e") 
          b-none El control de las fuentes de contaminación es una forma efectiva para hacer frente a la alteración física y química de materias primas; dentro de este, se puede encontrar:
          
      .col-9.col-lg-5
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='imagen ambiental', style="width: 510px").m-auto
                    

    .row.fondo-gradiente
      .col-lg-12.px-md-5.py-5
        .row.justify-content-evenly
          .col-sm-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img2.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  h4.text-center Control de calidad de agua
                  p.mb-0 Se debe asegurar que el agua seleccionada para la elaboración o limpieza de materias primas sea un agua bajo condiciones de potabilidad que no generen riesgo para el animal. 
                    
          .col-sm-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img3.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  h4.text-center Control de calidad de higiene manipulación
                  p.mb-0 Es necesario certificar que las prácticas de limpieza y desinfección de los operarios sean realizadas de manera eficaz y frecuente.
                    
          .col-sm-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img4.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  h4.text-center Control de calidad de higiene de elementos
                  p.mb-0 La inspección de máquinas procesadoras, mezcladoras, mesones, palas, entre otros, es una actividad que debe realizarse constantemente, porque así se garantiza la limpieza y desinfección.
                    


    p.mb-5.pt-2(style="border-top: 1px solid #78b62e") 
      b-none Como se ha mencionado antes, la higienización es un proceso centrado en la limpieza y desinfección. Este debe estar orientado a minimizar el riesgo de contaminación cuando se aseguran las condiciones microbiológicas de las diferentes materias primas y se restablece el funcionamiento habitual de las instalaciones y de los diferentes utensilios tras realizar las actividades de cada área de producción.  Es fundamental evaluar el riesgo, tanto de un producto terminado como de la materia prima utilizada, a partir de los factores que se presentan en la siguiente tabla. 
          


    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1
          p.mb-0 Factores de disminución y aumento del riesgo
            
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                th Aumentan el riesgo
                th Disminuyen el riesgo
            tbody
              tr
                td Productos a granel 
                th.text-start Productos envasados 
              tr
                td Productos con humedad alta
                th.text-start Productos con baja captaci&oacute;n de humedad o agua 
              tr
                td Productos almacenados durante largos periodos o almacenamiento inadecuado o con mal rotulaci&oacute;n
                th.text-start Producto de consumo inmediato 
              tr
                td Productos con pH pr&oacute;ximo a la neutralidad 
                th.text-start Producto con pH bajo 
              tr
                td Manipulaci&oacute;n excesiva 
                th.text-start Productos tratados previamente 

    p.mb-5 Estos procedimientos de higienización deben ser efectivos cuando usted realiza un plan de higienización a partir de criterios y aspectos como el tiempo y el procedimiento, lo cual permite, a partir de un registro, la verificación de la eficacia de lo realizado. Las características que se deben tener en cuenta para realizar la higienización son:


    .row.justify-content-center.align-items-center.gx-0.mb-5
      .col-lg-5
        .p-5(style="background-color: #e3f5cc; border-top-right-radius: 60px; border-bottom-left-radius: 60px")
          ul.lista-ul
            li 
              i.fas.fa-play(style="color: #78B62E")
              p.mb-0 Evaluación del riesgo.
            li 
              i.fas.fa-play(style="color: #78B62E")
              p.mb-0 Evaluación del nivel de riesgo.
            li 
              i.fas.fa-play(style="color: #78B62E")
              p.mb-0 Elección de métodos.
            li 
              i.fas.fa-play(style="color: #78B62E")
              p.mb-0 Herramientas y productos a utilizar.
            li 
              i.fas.fa-play(style="color: #78B62E")
              p.mb-0 Recopilación de fichas técnicas de productos a utilizar teniendo en cuenta la seguridad del personal.
            li 
              i.fas.fa-play(style="color: #78B62E")
              p.mb-0 Registros.
            
      .col-lg-7
        .p-4(style="background-color: #E8EEF3")
          p.mb-0 Otro concepto importante dentro de las características de higiene es el concepto del control de vectores, porque tanto los insectos como los diferentes animales representan un riesgo elevado de contaminación de materias primas y productos elaborados. A continuación, se presentan unas acciones que usted puede considerar en el control de vectores. Esto sin duda le ayudará a elaborar un plan.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      




</template>

<script>
export default {
  name: 'Tema2',
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
