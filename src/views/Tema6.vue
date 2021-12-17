<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Seguridad y salud en el trabajo
    


    .row.fondo-cajon.mb-5
      .col-lg-12.px-lg-5
        .row.justify-content-between.align-items-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema6/img1.png', alt='imagen ambiental', style="width: 240px").m-auto
          .col-lg-8
            p.mb-0 La salud y la seguridad en el trabajo es la disciplina que trata de la prevención de las lesiones y enfermedades laborales. A través de ella, se fomentan los cuidados y la protección de los empleados en todas las áreas de trabajo, a través de seguimientos constantes y detallados en cada área. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .p-5.pb-2(style="background-color: #ddedcb; border-top-left-radius: 50px; border-bottom-right-radius: 50px;")
          .row.justify-content-center.align-items-center
            .col-11.col-lg-12  
              p.mb-4 Cada trabajador forma un vínculo entre salud y trabajo y, por tanto, siempre se debe tener en cuenta la influencia que tiene sobre la salud de la persona la ejecución de ciertas actividades. El conjunto de variables que se definen, desde la realización de la tarea y el entorno en que ésta se realiza, se denomina condiciones de trabajo, y están constituidas por factores del medio ambiente, de la tarea, de la organización y del individuo 
                b(style="color: #3C6D9D") (Mintrabajo, 2016). 
                b-none Se le invita a observar el siguiente recurso educativo para más información. 
                .row.justify-content-end
                  .col-lg-6
                    a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=5CF3HZdu6Bc" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p.mb-0
                          b Enlace web. 
                          b-none Sistemas de gestión de la seguridad y salud en el trabajo.


    p.mb-5 Existen trabajos que, por sus condiciones, exponen al trabajador a un peligro que puede generar una enfermedad o lesión. Algunos riesgos existentes son: 


    .row.justify-content-center.mb-5
      .col-lg-12
        TabsA.color-acento-contenido
          .tarjeta.color-secundario.p-4(titulo="Riesgos físicos")(style="border-radius: 10px; background-color: #e2e9f0;")
            .row.justify-content-center
              .col-11
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-3 Riesgos físicos
                    p.mb-0 Es la posibilidad que existe de sufrir un daño corporal en diferentes grados de intensidad; entre los principales riesgos físicos se encuentran la exposición a diferentes temperaturas extremas (calor o frío), exposición a fuertes ruidos por tiempos prolongados, tipos de movimientos que generen vibraciones, donde se ven afectadas las articulaciones y la presión arterial, el sometimiento a iluminaciones (oscuridad y deslumbramiento), radiación ionizante y no ionizante, y manipulación de maquinaria pesada.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img2.png', alt='imagen ambiental', style="width: 400px").m-auto
                        
          .tarjeta.color-secundario.p-4(titulo="Riesgos biológicos")(style="border-radius: 10px; background-color: #e2e9f0;")
            .row.justify-content-center
              .col-11
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-3 Riesgos biológicos
                    p.mb-0 Son todos los que, por presencia de organismos o microorganismos (bacterias, hongos, virus o parásitos), pueden afectar la salud en un entorno laboral, pueden causar enfermedad temporal, permanente o la muerte. Existen trabajos que, por sus condiciones, se consideran de alto riesgo biológico; entre estos, los profesionales de la salud, agropecuarios y biológicos. 
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img3.png', alt='imagen ambiental', style="width: 400px").m-auto
                        
          .tarjeta.color-secundario.p-4(titulo="Riesgos químicos")(style="border-radius: 10px; background-color: #e2e9f0;")
            .row.justify-content-center
              .col-11
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-3 Riesgos químicos
                    p.mb-0 Aquellas condiciones que pueden afectar la salud de un trabajador por contacto no controlado con agentes químicos; pueden ser por inhalación, ingestión o absorción de sustancias nocivas para la salud. 
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img4.png', alt='imagen ambiental', style="width: 400px").m-auto
                        
          .tarjeta.color-secundario.p-4(titulo="Riesgos ergonómicos")(style="border-radius: 10px; background-color: #e2e9f0;")
            .row.justify-content-center
              .col-11
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-3 Riesgos ergonómicos
                    p.mb-0 En su mayoría, el riesgo ergonómico se da por posturas incorrectas en trabajos de oficina que son sedentarios o trabajos que son repetitivos en sus movimientos, y que con el tiempo pueden causar un gran daño y lesiones a nivel musculoesquelético y generar dolores por diferentes lesiones; también se encuentra el levantamiento excesivo de peso con o sin una técnica adecuada. 
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img5.png', alt='imagen ambiental', style="width: 400px").m-auto
                        
          .tarjeta.color-secundario.p-4(titulo="Riesgos psicosociales")(style="border-radius: 10px; background-color: #e2e9f0;")
            .row.justify-content-center
              .col-11
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-3 Riesgos psicosociales
                    p.mb-0 Afectan de manera notable la salud de los trabajadores y se derivan de las deficiencias en el planteamiento, la organización y la gestión del trabajo, así como de un nulo entorno social en el lugar de trabajo. Todo esto puede generar resultados psicológicos, físicos y sociales negativos, como el estrés laboral, el agotamiento o la depresión en la persona; para prevenirlo, es importante las pausas activas en el trabajo y respetar los horarios laborales.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img6.png', alt='imagen ambiental', style="width: 400px").m-auto
                        
          .tarjeta.color-secundario.p-4(titulo="Riesgos ambientales")(style="border-radius: 10px; background-color: #e2e9f0;")
            .row.justify-content-center
              .col-11
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-3 Riesgos ambientales
                    p.mb-0 Son todos aquellos que no se pueden controlar, como la probabilidad de que ocurra una catástrofe, un evento propio de la naturaleza o por acción del hombre. Existen riesgos naturales (todos aquellos riesgos geológicos) y riesgos antrópicos (aquellas circunstancias causadas por las acciones del ser humano).
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img7.png', alt='imagen ambiental', style="width: 400px").m-auto
                        
          .tarjeta.color-secundario.p-4(titulo="Riesgos mecánicos")(style="border-radius: 10px; background-color: #e2e9f0;")
            .row.justify-content-center
              .col-11
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-3 Riesgos mecánicos
                    p.mb-0 Conjunto de eventos que pueden causar daño a un trabajador, como quemaduras, cortes, golpes, entre otros; en su mayoría, se presentan por la manipulación de herramientas y vehículos.
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/tema6/img8.png', alt='imagen ambiental', style="width: 400px").m-auto
                        


    p.mb-5 Cuando se habla de que existe un peligro, se refiere a una condición potencial, que puede provocar daños en la salud, y riesgo es la probabilidad de exposición a un evento peligroso, es la consecuencia del peligro. En la siguiente tabla, se hace una comparación entre peligros y riesgos. Obsérvela.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3
          p.mb-0 Peligro y riesgos
            
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                td.text-center(colspan="2") 
                  h5.mb-0 Tipos de riesgo físico
                
            tbody
              tr
                td 
                  b Peligros 
                td.text-start 
                  b Riesgos
              tr
                td Ruido
                td Pérdida de audición, estrés.
                    
              tr
                td Iluminación
                td Cefalea, pérdida de visión, estrés. 
                    
              tr
                td Temperaturas extremas 
                td Mareos, pérdida de destreza, trastornos cardiovasculares.
                    
              tr
                td Radiación
                td Alteraciones en la piel y deshidratación.
                    


    .row.justify-content-center.mb-4
      .col-lg-10
          
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                td.text-center(colspan="2") 
                  h5.mb-0 Tipo biológico
                
            tbody
              tr
                td 
                  b Peligros 
                td.text-start 
                  b Riesgos
              tr
                td Bacterias, virus y hongos
                td Reacciones alérgicas, afecciones en piel, enfermedades en sistemas, muerte.
                    
              tr
                td Roedores e insectos 
                td Enfermedades infectocontagiosas o virales.
                  
    
    .row.justify-content-center.mb-4
      .col-lg-10
          
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                td.text-center(colspan="2") 
                  h5.mb-0 Tipo químico
                
            tbody
              tr
                td 
                  b Peligros 
                td.text-start 
                  b Riesgos
              tr
                td Gases, vapores, partículas de diferentes materiales, humos metálicos
                td Cefaleas, náuseas, vómitos, irritaciones en diferentes sistemas, quemaduras, asfixia, alteración cardiovascular, muerte.
                    
    
    .row.justify-content-center.mb-4
      .col-lg-10
          
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                td.text-center(colspan="2") 
                  h5.mb-0 Tipo ergonómico
                
            tbody
              tr
                td 
                  b Peligros 
                td.text-start 
                  b Riesgos
              tr
                td Manejo de cargas, movimientos repetitivos y sobreesfuerzo
                td Trauma acumulativo, afección en sistema musculoesquelético, lesiones a nivel de columna vertebral, alteración en sistema cardiovascular.
                    
              
    .row.justify-content-center.mb-4
      .col-lg-10
          
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                td.text-center(colspan="2") 
                  h5.mb-0 Tipo psicosocial
                
            tbody
              tr
                td 
                  b Peligros 
                td.text-start 
                  b Riesgos
              tr
                td Condiciones intralaborales
                td Estrés, depresión y ansiedad.
                    
    .row.justify-content-center.mb-4
      .col-lg-10
          
        .tabla-a.color-acento-contenido.mb-0
          table
            thead
              tr
                td.text-center(colspan="2") 
                  h5.mb-0 Tipo mecánico
                
            tbody
              tr
                td 
                  b Peligros 
                td.text-start 
                  b Riesgos
              tr
                td Atrapamientos, golpes, herramientas cortopunzantes, superficies calientes 
                td Amputaciones, heridas graves, fracturas, alteraciones en tejidos blandos, muerte.
                    
              








    separador 
    #t_6_1.titulo-segundo.color-acento-contenido
      .h2 6.1 Elementos de protección personal 
    


    .row.justify-content-center.mb-5 
      .col-lg-12
        .p-4(style="background-color: #3c6d9d3f")
          .bloque-texto-b.p-4.px-0
            .bloque-texto-b__texto
              i.fas.fa-quote-left(style="color: #78B62E; font-size: 28px;")
              p.mb-0 Para un trabajador, los elementos de protección personal (EPP) se definen como aquellos requeridos para el desarrollo de las actividades propias de su cargo. El uso de los EPP ayuda a protegerlo de posibles daños derivados de la exposición a los peligros en los lugares de trabajo y que pueden generar daños en su salud o integridad física.
              i.fas.fa-quote-right(style="color: #78B62E; font-size: 28px;")
            .bloque-texto-d__autor.d-flex.justify-content-start
              p.mb-0 
                b (Minsalud, 2021).


    .row.justify-content-center
      .col-lg-7
        .p-3.px-lg-2(style="background-color: #12263f;")
          p.mb-0.text-white.text-center
            b Las Algunos elementos de protección propios del contexto pecuario son: 
    
    .row.fondo-gradiente.mb-5
      .col-lg-12.px-md-5.py-5
        .row.justify-content-evenly.mb-lg-4
          .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img9.svg')})`}")
                .tarjeta-flip__contenido.p-5
                  h4.text-center Protección de cabeza
                  p.mb-4 Dentro de este grupo se clasifican los cascos, pasamontañas y cofias.
                    
          .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img10.svg')})`}")
                .tarjeta-flip__contenido.p-5
                  h4.text-center Gafas de seguridad
                  p.mb-0 En estos implementos, están los lentes de seguridad.
                    
          .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img11.svg')})`}")
                .tarjeta-flip__contenido.p-5
                  h4.text-center Protección respiratoria
                  p.mb-0 En este grupo, usted puede encontrar tapabocas desechables y reutilizables, protector respiratorio sin válvula para polvo.
                    
        .row.justify-content-evenly.mb-4
          .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img12.svg')})`}")
                .tarjeta-flip__contenido.p-5
                  h4.text-center Cuerpo
                  p.mb-0 Algunos implementos son overol, chaqueta y pantalón térmico, arnés de seguridad, guantes (vaqueta, nitrilo, térmicos).
                    
          .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
            .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema6/img13.svg')})`}")
                .tarjeta-flip__contenido.p-5
                  h4.text-center Pies
                  p.mb-0 Dentro de estos elementos, se encuentran medias térmicas, punteras de seguridad y botas de seguridad.
                    
        .row.justify-content-evenly
          separador
          
          
          
    #t_6_2.titulo-segundo.color-acento-contenido
      .h2 6.2 Técnicas de evaluación


    .row.fondo3
      .col-lg-12.px-md-5.pb-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            .p-4.mb-3(style="background-color: #d8e2eb; border-top-right-radius: 40px; border-bottom-left-radius: 40px;")
              p.mb-0 Para una evaluación  y  análisis completo de salud y seguridad en el trabajo, se deben tener en cuenta algunos puntos que pueden aportar datos anuales, todo mediante listas de chequeo donde se puedan valorar los riesgos por medio de visitas o desplazamientos por parte del personal seleccionado hasta las áreas de cada puesto en la empresa y así tener una observación cercana de cada uno de los trabajadores y poder determinar con precisión cada probabilidad de riesgo; entre los puntos, están:
            ul.lista-ul.pt-2(style="border-top: 1px solid #78b62e") 
              li 
                i.fas.fa-play(style="color: #78B62E")
                p.mb-0 Estudios y exploración de accidentes de trabajo y enfermedades profesionales en cada área de la empresa.
                  
              li 
                i.fas.fa-play(style="color: #78B62E")
                p.mb-0 Seguimiento de la salud integral de cada uno de los trabajadores (vigilancia epidemiológica constante).
                  
              li 
                i.fas.fa-play(style="color: #78B62E")
                p.mb-0 Las inspecciones y auditorías constantes y completas en los lugares de trabajo.
                  
              li 
                i.fas.fa-play(style="color: #78B62E")
                p.mb-0 Planes integrales de prevención y control de accidentes mayores que puedan causar alta gravedad en la salud del trabajador.
                  
              li 
                i.fas.fa-play(style="color: #78B62E")
                p.mb-0 Vigilancia obligatoria del uso de equipos de protección individual en cada una de las áreas de la empresa.
                  
              li 
                i.fas.fa-play(style="color: #78B62E")
                p.mb-0 Desarrollo completo de planes de emergencia que sean ejecutados en aquellos casos que representen un riesgo, para minimizar un daño a la integridad de cada uno de los trabajadores.
                  
          .col-lg-5
            figure
              img(src='@/assets/curso/tema6/img14.png', alt='imagen ambiental', style="width: 495px").m-auto
            
            
        .row.justify-content-center.mb-5
          .col-lg-5.mb-4.mb-lg-0
            p.mb-0 Cada evaluación se debe hacer con individualidad, esto facilita detección temprana de posibles afecciones a la salud en cada individuo; de no ser personal, la evaluación que se hace por visita técnica se debe dirigir a cada puesto y área de la empresa; sin embargo, se deben hacer chequeos médicos periódicos, de manera individual, a cada trabajador. Se debe entregar un informe detallado donde se clasifica el potencial de riesgo, peligro y daño; entre las clasificaciones más comunes, se encuentra la categorización en tres niveles: 
          .col-lg-7
            .p-4.mb-3(style="background-color: #ddedcb; border-top-right-radius: 40px; border-bottom-left-radius: 40px;")
              ul.lista-ul
                li 
                  i.fas.fa-play(style="color: #3C6D9D")
                  p.mb-0 Intolerable, se define cuando se debe evaluar y detener casi en el momento la situación que se presenta, para evitar accidentes y daños a la salud.
                li 
                  i.fas.fa-play(style="color: #3C6D9D")
                  p.mb-0 Importante, son aquellos puntos de control que se deben tener en cuenta para una mejora rápida.
                li 
                  i.fas.fa-play(style="color: #3C6D9D")
                  p.mb-0 Moderado, son aquellos puntos de control donde se pueden hacer actividades para una mejora progresiva, tales como pausas activas, rotaciones de turno, equipos de protección mejorados, entre otros.
              
        .row.justify-content-center
          .col-lg-12
              p.mb-0 Hasta aquí se ha organizado para usted un conjunto de conocimiento científico y técnico que le ayudará a la apropiación de información que se complementa con un conjunto de actividades de aprendizaje para desarrollar una competencia que le ayude a resolver desafíos en torno a la identificación de materias primas y equipos para la preparación de ración animal según parámetros técnicos y normativa.









</template>

<script>
export default {
  name: 'Tema6',
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
