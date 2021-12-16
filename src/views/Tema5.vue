<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Equipos para la ración animal 
    
    .contenedor-full
      figure
        img.mx-auto(src='@/assets/curso/tema5/img1.jpg' alt='Imagen ambiental' style='')
      .contenedor-descipcion
        .row.mb-4.mb-lg-0
          .col-12
            p.mb-0.text-white
              b A causa del aumento de la producción animal, surgen nuevas tecnologías que optimizan la elaboración de productos y raciones animales. Ello mejora las diferentes ofertas nutricionales, a partir de estándares de calidad.  Sin duda, los equipos y herramientas impactan la producción cuando ayudan a la transformación de la materia prima, el pesaje de los ingredientes, la mezcla, el pelletizado, la extrusión, y, en empresas más tecnificadas, el transporte de estas. 

    p.mb-5 Dentro de las principales clases de equipos, máquinas y herramientas, se encuentran funciones que inician desde una báscula hasta las más sofisticadas extrusoras o peletizadoras. A continuación, revise el siguiente recurso de aprendizaje, para identificar las características de los equipos, máquinas y herramientas. 


    .row.fondo1
      .col-lg-12.px-md-5.py-5
        .row.justify-content-center
          .col-lg-12
            .tarjeta.tarjeta--azul.p-4.mb-5(style="background-color: #FFFFFF; filter: drop-shadow(2px 4px 6px grey)")
              SlyderA
                .row.justify-content-center
                  .col-12.mb-5
                    .row.justify-content-center
                      .col-8.col-lg-4
                        .cuadro-header
                          h5.mb-0.text-center.text-white Balanzas o básculas
                    
                  .col-11.p-4
                    .row.justify-content-center
                      .col-md-6.mb-4.mb-md-0
                        p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
                          
                      .col-md-6
                        figure
                          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                          
                          
                .row.justify-content-center
                  .col-12.mb-5
                    .row.justify-content-center
                      .col-8.col-lg-4
                        .cuadro-header
                          h5.mb-0.text-center.text-white Molino
                            
                  .col-11.p-4
                    .row.justify-content-center
                      .col-md-6.mb-4.mb-md-0
                        p col 222
                    
                      .col-md-6
                        figure
                          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                          
                .row.justify-content-center
                  .col-12.mb-5
                    .row.justify-content-center
                      .col-8.col-lg-4
                        .cuadro-header
                          h5.mb-0.text-center.text-white Mezcladoras
                  .col-11.p-4
                    .row.justify-content-center
                      .col-md-6.mb-4.mb-md-0
                        p col 222
                    
                      .col-md-6
                        figure
                          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                          
                .row.justify-content-center
                  .col-12.mb-5
                    .row.justify-content-center
                      .col-8.col-lg-4
                        .cuadro-header
                          h5.mb-0.text-center.text-white Zarandas o cribas 
                  .col-11.p-4
                    .row.justify-content-center
                      .col-md-6.mb-4.mb-md-0
                        p col 222
                    
                      .col-md-6
                        figure
                          img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                          
                








</template>

<script>
export default {
  name: 'Tema5',
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
