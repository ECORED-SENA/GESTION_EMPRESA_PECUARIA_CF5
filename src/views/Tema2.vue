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
          .col-8.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img2.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  h4.text-center Control de calidad de agua
                  p.mb-0 Se debe asegurar que el agua seleccionada para la elaboración o limpieza de materias primas sea un agua bajo condiciones de potabilidad que no generen riesgo para el animal. 
                    
          .col-8.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img3.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  h4.text-center Control de calidad de higiene manipulación
                  p.mb-0 Es necesario certificar que las prácticas de limpieza y desinfección de los operarios sean realizadas de manera eficaz y frecuente.
                    
          .col-8.col-md-6.col-xl-3.mb-4.mb-xl-0
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
        <iframe width="853" height="480" src="https://www.youtube.com/embed/Y0tAyE0gPuE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      

    .row.fondo1
      .col-lg-12.px-md-5.py-5
        .row.justify-content-center.mb-5
          .col-lg-7.mb-4.mb-lg-0.onTop
            p.mb-2 Dentro de las características de la higienización, los operarios o personas manipuladoras de las materias primas tienen una función tanto en la contaminación como en la preservación de la inocuidad de los productos. Los seres humanos se identifican como  principales vectores de microorganismos, enfermedades y contaminación de las materias primas o los alimentos, puesto que llevan consigo microorganismos en el cabello, la piel, la ropa, la cavidad intestinal, entre otras. En consecuencia, con la manipulación del producto, puede estar en riesgo la producción de este. Ante esto, es importante tener medidas correctas para evitar ser un vector de contaminación, con la implementación de prácticas de prevención y control que ayuden a asegurar un producto de calidad para la ración animal. Algunas prácticas recomendadas son: 
            .neg--right.p-4.fondo-hoja(style="background-color: #E8EEF3;")(:style="{'background-image': `url(${require('@/assets/curso/tema1/bg-hoja.png')})`}")
              ul.lista-ul
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 No comer en el lugar de trabajo. 
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 Lavarse las manos cada que sea necesario, teniendo en cuenta la manipulación de productos, el ingreso a otras áreas, después de cada descanso, entre otras.
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 Utilizar los elementos de seguridad necesarios.
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 No estornudar o toser sobre la materia prima.
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 No fumar. 
                    
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 Limpieza de la indumentaria utilizada. 
                    
          .col-9.col-lg-5
            figure
              img(src='@/assets/curso/tema2/img5.png', alt='imagen ambiental', style="width: 500px").m-auto
          
        .row.justify-content-center
          .col-lg-12
            p.mb-0 Complementando lo anterior, existen técnicas y métodos de higienización de materias primas. Su propósito es proteger, preservar y conservar los productos y los elementos nutricionales que se le brinden al animal, con el fin de que estos puedan expresar todo su potencial genético. Para realizar la limpieza y desinfección, existen dos métodos de limpieza que se caracterizan así: 


    .row.fondo-gradiente
      .col-lg-12.px-md-5.py-5
        .row.justify-content-evenly
          .col-8.col-sm-7.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img6.svg')})`}")
                .tarjeta-flip__contenido.p-5.p-xl-5.px-xl-4
                  h4.text-center Manuales
                  p.mb-0.text-center Los métodos manuales son todos los métodos que consisten en frotar, cepillar y rociar con agua a grandes presiones, donde se puede realizar un barrido húmedo, con escobas, cepillos, enjuagado, y tratamiento con espumas o geles.
                    
          .col-8.col-sm-7.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img7.svg')})`}")
                .tarjeta-flip__contenido.p-5.p-xl-5.px-xl-3
                  h4.text-center Mecánicos
                  p.mb-0.text-center Los métodos mecánicos generalmente son aquellos que utilizan las fuerzas de remoción, ya sea del agua o el aire, para así extraer todo el material no deseado; dentro de estas, se encuentran el rociado de agua a presión, el uso de aspiradores, y el flujo de aire a presión.
                    


    p.mb-5.pt-3(style="border-top: 1px solid #78b62e") 
      b-none Aparte de los métodos de higienización mencionados, cabe resaltar la importancia del uso de los diferentes productos de limpieza y desinfección. Existen múltiples grupos de limpieza, dependiendo de las características del compuesto activo y sus mecanismos de acción. Dentro de los más conocidos, se tienen los siguientes:
          

    .row.justify-content-center.mb-5
      .col-lg-9
        .cajon.color-acento-contenido.p-4.mb-5
          .row.justify-content-center
            .col-lg
              h5 Jabones
              p.mb-0 La gran mayoría de jabones utilizados para la limpieza, tanto de manos como de superficies, son elaborados a partir de componentes sódicos y grasas, dando la característica especial de ser biodegradables, pero causando alteraciones de dureza de agua.
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img8.svg', alt='imagen ambiental', style="width: 125px").m-auto
            
            
        .cajon.color-primario.p-4.mb-0
          .row.justify-content-center
            .col-lg
              h5 Detergentes, biocidas
              p.mb-0 Son el resultante de una mezcla de muchos componentes que tienen una o más sustancias activas. Su principal función es la remoción de las partículas de suciedad, y esto evita que se vuelvan a adherir a la superficie. También tienen componente antimicrobiano, el cual impide el crecimiento y desarrollo bacteriano, asegurando así una condición de limpieza e inocuidad. 
                
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img9.svg', alt='imagen ambiental', style="width: 125px").m-auto


    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-secundario.p-4(style="background-color: #3c6d9d42; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-top-left-radius: 60px; border-bottom-right-radius: 60px")
          .row.justify-content-center
            .col-lg.mb-4.mb-lg-0
              .bloque-texto-b.p-4
                .bloque-texto-b__texto.mb-4
                  i.fas.fa-quote-left(style="color: #78B62E; font-size: 28px;")
                  p.mb-0 
                    b Para obtener más información sobre los productos de limpieza más utilizados dentro de los grupos de jabones y detergentes, se sugiere leer el Anexo I: “Guía para el desarrollo de normas de higienización de los piensos” 
                  i.fas.fa-quote-right(style="color: #78B62E; font-size: 28px;")
                .bloque-texto-d__autor.d-flex.justify-content-start
                  p.mb-0 (Fundación CESFAC, 2007), desde la página 97 hasta la 103.
                    
            .col-auto
              figure.mb-2
                img(src='@/assets/curso/tema1/img3.svg', alt='imagen ambiental', style="width: 158px").m-auto
              .row.justify-content-center
                .col-auto
                  a.boton.color-acento-botones(href="https://cesfac.es/media/attachments/2019/08/08/guia-higienizacin.pdf" target="_blank")
                    span(style="color: #12263f") Ver más
                    i.fas.fa-link(style="color: #12263f")


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
