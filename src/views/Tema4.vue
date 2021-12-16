<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Áreas de proceso de ración animal
    
    .row.justify-content-center
      .col-lg-10
        .p-3.px-lg-2(style="background-color: #12263f;")
          p.mb-0.text-white.text-center
            b Las áreas de proceso y elaboración de los alimentos de las especies pueden ser separadas en tres (3) grandes zonas: 
    
    .row.fondo-gradiente
      .col-lg-12.px-md-5.py-5
        .row.justify-content-evenly
          .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img1.svg')})`}")
                .tarjeta-flip__contenido.p-5.p-md-4
                  h4.text-center Almacenamiento
                  p.mb-4 En esta zona, usted puede encontrar: 
                  ul.lista-ul
                    li 
                      i.fas.fa-play(style="color: #ffff")
                      p.mb-0 Materias primas.
                    li 
                      i.fas.fa-play(style="color: #ffff")
                      p.mb-0 Productos terminados. 
                    li 
                      i.fas.fa-play(style="color: #ffff")
                      p.mb-0 Productos rechazados.
                    
          .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img2.svg')})`}")
                .tarjeta-flip__contenido.p-5.p-md-4
                  h4.text-center Control de calidad de higiene manipulación
                  p.mb-0 Esta zona tiene como objetivo la producción de los alimentos de los animales, según sus características.  La producción se comprende desde la salida de la materia prima del almacén hasta su entrada al lugar de productos terminados.
                    
          .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img3.svg')})`}")
                .tarjeta-flip__contenido.p-5.p-md-4
                  h4.text-center Comunes o del personal
                  p.mb-0 En el contexto pecuario, es necesario destinar una zona para el personal de trabajo. Esta puede comprender: comedores, baños y cambios de indumentaria.
                    


    p.mb-5 En la gestión de las áreas de producción, se deben reconocer las características y el funcionamiento de cada zona, para luego evaluarlas. A continuación, se enunciarán las diferentes áreas y sus subáreas, siendo unas necesarias, complementarias y opcionales. 

    .row.mb-4
      .col-lg-4
        .p-3.py-lg-4(style="background-color: #78B62E; border-top-right-radius: 30px; border-bottom-left-radius: 30px;")
          p.text-white.mb-0.text-center
            b Almacenamiento

    p.mb-5 Las empresas que gestionan raciones animales deben tener una zona suficiente para almacenar las materias primas, con el propósito de gestionar la materia prima en relación con: 1. Contaminación cruzada, 2. El orden, y 3. Productos a granel, terminados, envasados y empacados. Tener un lugar organizado y estibado facilita el tránsito, la limpieza, el muestreo y la inspección de la materia prima y los alimentos.  Los almacenes tienen:


    .row.justify-content-center.mb-2
      .col-lg-12
          
        .tabla-a.color-acento-contenido.mb-3
          table
            thead
              tr
                th Básicas
                th Complementarias 
                th Opcionales
            tbody
              tr
                td
                  p.mb-4 Carga y descarga
                  p.mb-0 Lugares delimitados y sin obstáculos, que facilitan el acceso de los vehículos. 
                td
                  p.mb-4 Ellas son:
                  p.mb-0 Administrativas
                  p.mb-0 Área de oficinas de los jefes de almacén.
                td(rowspan="3")
                  p.mb-4 Área de productos en mal estado
                  p.mb-0 Zona especial para el almacenamiento de productos que no cumplen los requerimientos de calidad. Es una zona restringida y lejos del almacén o bodega.
              tr
                td
                  p.mb-4 Almacenamiento
                  p.mb-0 Sitio que tiene pasillos y estructuras para la acomodación
                td
                  p.mb-4 Servicios higiénicos
                  p.mb-0 Zonas especializadas de limpieza y desinfección, baños.
                
                  
              tr
                td
                  p.mb-4 Manipulación o transporte
                  p.mb-0 Zona destinada a la manipulación de los alimentos o materias primas. Debe ser un lugar sin obstáculos y de tránsito fácil.
                td
                  
                
    p.mb-5 Dentro del área de almacenamiento, es importante guardar los alimentos y las materias primas según sus condiciones organolépticas. Existen varios tipos de almacenamiento, ellos son: 

    .row.justify-content-center.mb-5
      .col-lg-12
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Almacenamiento en seco")
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                p
                  b(style="color: #78B62E") Según González (2013),
                  b-none son espacios que sólo requieren estructuras de acomodación planeadas a partir de unas condiciones que ayuden a conservar la calidad de las materias primas y mejoras de productividad. Siga estas recomendaciones:
                ul.lista-ul
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Ubicar insumos que utiliza frecuentemente.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Guardar alimentos de una misma clase.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Recuerde registrar las fechas de los insumos en el momento de la recepción.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Colocar los productos más antiguos al frente de los anaqueles y los que recién ingresan en la parte posterior.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Mantener los productos lejos del suelo y paredes.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Almacenar los productos tan altos como les permita su manejo y seguridad.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Guardar los productos más pesados en la parte baja y los más livianos en la parte alta.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Facilitar un espacio separado para químicos y artículos de limpieza en general, ya que estos despiden olores nocivos para la salud.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 No permita que se cuelguen prendas de vestir en el almacén.
                    
              .col-10.col-lg-6
                figure.mb-4
                  img(src='@/assets/curso/tema4/img4.png', alt='imagen ambiental', style="width: 500px").m-auto
                    
          .py-3.py-md-4(titulo="Manipulación inadecuada")
            .row.justify-content-center
              .col-lg-6.mb-4.mb-lg-0
                p
                  b-none El almacenamiento congelado es principalmente direccionado a alimentos perecederos, tales como: lácteos, carnes, huesos y subproductos animales, los cuales, por sus condiciones organolépticas, tienden a tener una vida útil mucho más corta.  Esta custodia, a través de una cadena de frío, logra atenuar las condiciones favorables para el crecimiento bacteriano. La refrigeración a temperaturas por debajo de 4 °C inhibe el crecimiento de la mayoría de las bacterias patógenas, pero no las mata; por lo tanto, los cuartos refrigerados mantendrán temperaturas entre 2,5 °C a 6 °C. 
                  b(style="color: #78B62E")  (UIS, 2008).
                  
              .col-10.col-lg-6
                figure.mb-4
                  img(src='@/assets/curso/tema4/img5.png', alt='imagen ambiental', style="width: 500px").m-auto
                  

    p.mb-5 Con todo lo mencionado anteriormente, se le invita a observar el siguiente mapa de distribución de procesos de elaboración de raciones animales. Identificar esto es fundamental para comprender los tiempos de elaboración de las raciones.

    .row.justify-content-center
      .col-lg-12
        figure.mb-0
          img(src='@/assets/curso/tema4/img6.svg', alt='imagen ambiental', style="").m-auto









</template>

<script>
export default {
  name: 'Tema4',
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
