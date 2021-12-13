<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Materias primas para el alimento animal 
    
    p.mb-4 Las materias primas son la base fundamental para la alimentación animal porque de ellas se obtienen los nutrientes necesarios para suplir las necesidades nutricionales de los animales. Para ello, se deben considerar diferentes factores, como son:
  
    .row.fondo-gradiente.mb-5
      .col-lg-12.px-md-5.pt-5
        .row.justify-content-evenly.mb-0
          .col-auto.mb-4.mb-lg-5
            .tarjeta.bg-white.p-5
              p.mb-4.text-center
                b La especie
              figure
                img(src='@/assets/curso/tema1/icon1.svg', alt='icono que acompaña', style="width: 163px;").m-auto
          .col-auto.mb-4.mb-lg-5
            .tarjeta.bg-white.p-5
              p.mb-4.text-center
                b La especie
              figure
                img(src='@/assets/curso/tema1/icon2.svg', alt='icono que acompaña', style="width: 143px;").m-auto
          .col-auto.mb-4.mb-lg-5
            .tarjeta.bg-white.p-5
              p.mb-4.text-center
                b La especie
              figure
                img(src='@/assets/curso/tema1/icon3.svg', alt='icono que acompaña', style="width: 172px;").m-auto
        .row.justify-content-evenly.mb-0
          .col-auto.mb-4.mb-lg-5
            .tarjeta.bg-white.p-5
              p.mb-4.text-center
                b La especie
              figure
                img(src='@/assets/curso/tema1/icon4.svg', alt='icono que acompaña', style="width: 168px;").m-auto
          .col-auto.mb-4.mb-lg-5
            .tarjeta.bg-white.p-5
              p.mb-4.text-center
                b La especie
              figure
                img(src='@/assets/curso/tema1/icon5.svg', alt='icono que acompaña', style="width: 164px;").m-auto
            
        .row.justify-content-center.mb-5
          .col-lg-12
            .p-4(style="background-color: #12263F")
              p.mb-0.text-white
                b Dentro de las materias primas, es importante conocer los requerimientos energéticos y proteicos de los animales; dependiendo de ellos, se realiza la elección de dichas materias primas.
          
        .row.justify-content-center
          .col-lg-12
            .bloque-texto-a.color-primario.p-4.p-md-5.p-lg-4
              .row.m-0.align-items-center.justify-content-between
                .col-lg-3.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img1.png', alt='imagen ambiental', style="width: 240px;").m-auto
                .col-lg-9
                  .bloque-texto-a__texto.p-4
                    p.mb-0 Las materias primas se pueden clasificar según su origen. Ellas son de origen vegetal, animal o mineral. Cada grupo aporta elementos nutricionales necesarios para el animal en su etapa de mantenimiento y producción. Se pueden nombrar también como macro ingredientes o micro ingredientes, de acuerdo con el valor nutricional aportado. Dentro de los macro ingredientes, se encuentran los ingredientes con un valor de proteínas, lípidos y glucósidos altos. En los micro ingredientes, se encuentran todos los ingredientes que aportan vitaminas y minerales. Cabe mencionar que en algunos casos las medicinas se utilizan en menos proporciones para ello. A continuación, se le sugiere identificar algunas definiciones y características de las materias primas. 
                      

    .row.fondo1.mb-5
      .col-lg-12.px-md-5.pt-5
        .row.justify-content-center
          .col-lg-11
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='Materias primas', style="").m-auto


    .row.justify-content-center.mb-5
      .col-lg-11
        .tarjeta.color-secundario.p-4(style="background-color: #3c6d9d42; border-top-right-radius: 0px; border-bottom-left-radius: 0px; border-top-left-radius: 60px; border-bottom-right-radius: 60px")
          .row.justify-content-center
            .col-lg.mb-4.mb-lg-0
              .bloque-texto-b.p-4
                .bloque-texto-b__texto
                  i.fas.fa-quote-left(style="color: #78B62E; font-size: 28px;")
                  p.mb-0 
                    b Comprendida la clasificación de las materias primas, es necesario reconocer los fundamentos de la nutrición animal, que se divide en compuestos orgánicos e inorgánicos. Cuando se hace referencia a los primeros, se encuentran nitrógenos, lípidos, carbohidratos y vitaminas. En los segundos yacen principalmente los minerales. Para ampliar su conocimiento, se ha elegido el artículo “Compuestos orgánicos e inorgánicos”
                  i.fas.fa-quote-right(style="color: #78B62E; font-size: 28px;")
                .bloque-texto-d__autor.d-flex.justify-content-start
                  p.mb-0 de Rodríguez et al. (2002). 
                    
              p.mb-0.px-4 En el texto citado, se presenta la diferenciación de los componentes orgánicos e inorgánicos, las principales características de cada componente, y sus principales aportes a los diferentes organismos vivos.
                
            .col-auto
              figure.mb-2
                img(src='@/assets/curso/tema1/img3.svg', alt='imagen ambiental', style="width: 158px").m-auto
              .row.justify-content-center
                .col-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span(style="color: #12263f") Descargar
                    i.fas.fa-file-download(style="color: #12263f")



    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1 Métodos de acopio e inspección
    
    
    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0.onTop
        p.mb-2 Comprendida la clasificación y características de las materias primas según su origen, es momento de identificar los métodos de acopio (almacenamiento) e inspección de las materias primas, las cuales requieren ser guardadas desde diferentes lineamientos. Es necesario que entienda que un acopio o almacenamiento se caracteriza por reunir o agrupar elementos: materias primas, en este contexto. Para su custodia, existen formas de reunirlos y disponerlos para el proceso de elaboración de raciones. Las técnicas deben garantizar la inocuidad de las materias primas. 
        .neg--right.p-4.fondo-hoja(style="background-color: #E8EEF3;")(:style="{'background-image': `url(${require('@/assets/curso/tema1/bg-hoja.png')})`}")
          p.mb-4 En las producciones, se establecen diferentes métodos de acopio o almacenamiento de las materias primas, según las condiciones del almacén. A ellos se les debe asegurar el flujo eficaz y oportuno hacia el área de elaboración o producción. Esto, garantizando la calidad y cantidad de los productos bajo una manipulación y acopio desde las condiciones organolépticas de estas. 
          p.mb-0 Los métodos para el acopio de las materias primas dentro de un almacén dependen de factores como el espacio y utilización de este, así como de la forma de colocar las materias primas. Las formas más comunes de acomodar y organizar son las siguientes:
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img4.png', alt='imagen ambiental', style="width: 500px").m-auto
    
    .row.justify-content-center.mb-4
      .col-lg-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--acordion")
          .row.justify-content-center(titulo="Almacenamiento o acopio ordenado ")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg
                  p.mb-0 Se define en la elección de un lugar determinado para cada uno de los elementos que serán guardados, teniendo en cuenta el flujo de inventario, entrada y salida de materias primas. Los espacios asignados son flexibles y sus condiciones físicas ayudan a evitar mezclas de productos. Se debe marcar cada espacio con el nombre de la materia o componente que allí se pondrá. Esto asegura inocuidad. Con este método, la bodega o almacén no se llena completamente.
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img5.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    
          .row.justify-content-center(titulo="Almacenamiento o acopio en bloque")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg
                  p.mb-0 Este método se caracteriza por la acomodación de las materias primas según su orden de llegada. Estas se acomodan en bloques y no existen espacios entre referencias. El almacén se llena en un 100% y posee las mismas características de un acopio ordenado, con sus ventajas y desventajas. 
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img6.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    
          .row.justify-content-center(titulo="Almacenamiento o acopio a granel")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg
                  p.mb-4 Este método determina un almacenamiento de materias primas sueltas. Su separación se debe a la evitación de mezclas entre ellas.  Se debe tener cuidado con materias tales como harinas, porque son volátiles. La inspección que se realiza en este método es la verificación de las condiciones necesarias para asegurar la inocuidad y calidad de los alimentos de los animales, porque estos expresarán su potencial acuerdo con la calidad del alimento brindado. 
                  p.mb-0 En caso de presentarse una alteración de la materia prima, ya sea por rancidez o caducidad, en la inspección se debe identificar, separar y determinar la causa de dicha alteración.
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img7.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    
    
    
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      .h2 1.2 Características de la perecibilidad
    
    
    
    .row.fondo2.mb-4
      .col-lg-12.px-md-5
        .row.justify-content-center(style="margin-bottom: 6rem")
          .col-lg-7.mb-4.mb-lg-0
            .p-4.mb-3(style="background-color: #3c6d9d3f")
              .bloque-texto-b.p-4.px-0
                .bloque-texto-b__texto
                  i.fas.fa-quote-left(style="color: #78B62E; font-size: 28px;")
                  p.mb-0 
                    b En la gestión del acopio y almacenamiento de las diferentes materias primas, es importante conocer e identificar sus características con respecto a la perecibilidad. La perecibilidad se define como el deterioro de las materias primas o alimentos por condiciones físicas, químicas o biológicas. Las características de la perecibilidad son generalmente determinadas por la vida útil del producto, es decir, por la duración de la materia prima en condiciones de calidad organolépticas óptimas y de calidad aceptable, ya sean de horas o días, a temperatura ambiente.
                  i.fas.fa-quote-right(style="color: #78B62E; font-size: 28px;")
                .bloque-texto-d__autor.d-flex.justify-content-start
                  p.mb-0 
                    b (Aguilar, 2012).
                  
            p.mb-0.pt-2(style="border-top: 1px solid #78b62e") 
              b(style="color: #78b62e;") Madigan et al. (2000) 
              b-none definen el deterioro de materias primas o alimentos como cualquier cambio en el aspecto visual, olor o sabor de un producto alimenticio que lo hace inaceptable para el consumidor. Entendiendo esta afirmación de los autores con respecto a las condiciones de cambios o alteraciones, se deben comprender los factores que afectan directa o indirectamente el producto o materia prima. Observe el siguiente recurso de aprendizaje para más información.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img8.png', alt='imagen ambiental', style="width: 520px").m-auto
                    
        .row.justify-content-center.mb-0
          .col-lg-12
            .contenedor-texto
              p.mb-0 Son aquellos factores externos o internos de las materias primas que generan una alteración en su composición.  Los agentes influyentes en este cambio se clasifican en: 
              .contenedor-title
                p.mb-0.text-center.text-white
                  b Agentes causales de la perecibilidad
            
        .row.justify-content-center.mb-0
          .col-lg-12
            ImagenInfografica.color-secundario.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/img9.svg', alt='Agentes causales de la perecibilidad')
                  
              .tarjeta.color-acento-contenido.p-3(x="7.5%" y="37.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Temperatura
                p.mb-0(style="color: #12263f;") Incide en el crecimiento de microorganismos. Afecta las características de cada materia prima cuando altera sus contenidos nutricionales. También puede ayudar a retardar la perecibilidad de los alimentos entre los 4° y 7°C.
                  
              .tarjeta.color-acento-contenido.p-3(x="25%" y="46.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Humedad
                p.mb-0(style="color: #12263f;") Sucede en captación de humedad o agua de algunas materias primas. Esto es producido por la condensación.
                  
              .tarjeta.color-acento-contenido.p-3(x="6.2%" y="61.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Aire
                p.mb-0(style="color: #12263f;") Es un elemento nocivo para las vitaminas, porque genera descomposición  en las vitaminas D y A. Acusa oxidación en los pigmentos cárnicos y mezcla de condiciones organolépticas y/o nutricionales.
                  
              .tarjeta.color-acento-contenido.p-3(x="22.8%" y="74.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Luz
                p.mb-0(style="color: #12263f;") Es causal de las pérdidas de vitaminas A y D porque son fotosensibles. 
                  
              .tarjeta.color-acento-contenido.p-3(x="44.5%" y="37.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Enzimas
                p.mb-0(style="color: #12263f;") Reacción causada por las propias enzimas de las materias primas utilizadas o reacción a mezclas.
                  
              .tarjeta.color-acento-contenido.p-3(x="64%" y="46.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Parásitos
                p.mb-0(style="color: #12263f;") Causada por agentes como roedores, pájaros e insectos, que generan contaminación y transmisión de enfermedades.
                  
              .tarjeta.color-acento-contenido.p-3(x="50.2%" y="62.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Microbiológicas
                p.mb-0(style="color: #12263f;") Están en el alimento o materia prima. Un medio propicio para su crecimiento y desarrollo.
                  
              .tarjeta.color-acento-contenido.p-3(x="77.5%" y="37.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Oxidación de las vitaminas
                p.mb-0(style="color: #12263f;") Es el tiempo de exposición de una materia prima a factores que la llevan a su degradación.
                
              .tarjeta.color-acento-contenido.p-3(x="74.8%" y="69%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Fermentación de glucósidos 
                p.mb-0(style="color: #12263f;") Generan un sabor picante en las materias primas o alimentos.
                  
              .tarjeta.color-acento-contenido.p-3(x="92.2%" y="54.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Descomposición proteica
                p.mb-0(style="color: #12263f;") Causan mal olor en las materias primas.
                  
              .tarjeta.color-acento-contenido.p-3(x="90.2%" y="75.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
                .h5.mb-2(style="color: #12263f;") Enranciamiento de lípidos 
                p.mb-0(style="color: #12263f;") Es un proceso por el cual un alimento con alto contenido en grasas o aceites se altera con el tiempo, adquiriendo un sabor desagradable.
                  
                  
    
    
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      .h2 1.3 Técnicas de selección, adecuación, recepción y evaluación


    .row.justify-content-between.align-items-center.fondo-cajon.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/tema1/img10.png', alt='imagen ambiental', style="width: 240px").m-auto
      .col-lg-8
        p.mb-0 Las materias primas seleccionadas para la elaboración de alimento animal son una fuente que define la composición de un alimento; en consecuencia, su adecuación, recepción y evaluación son acciones constantes para determinar la calidad y bienestar animal.  A continuación, se describen algunas técnicas planeadas desde la inocuidad y calidad de los productos. Estas técnicas ofrecen unos alimentos sanos y seguros, tanto para los animales como para los consumidores finales. ¿Ha escuchado sobre las técnicas de selección, adecuación, recepción y evaluación? Para más información, que le ayudará a desarrollar conocimiento, revise este recurso educativo. 


    .row.just-content-center
      .col-lg-12
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-center.align-items-center(titulo="Selección")
            .col-md-7.mb-4.mb-md-0
              p.mb-4 Esta técnica se centra en la selección de los ingredientes o materias primas que se usarán en la ración animal. Se hace necesario hacer un listado de estas materias, que se deben comprar a proveedores que garanticen un producto seguro porque cumple con las especificaciones estipuladas para cada materia prima.
              p Los proveedores deben suministrar las especificaciones exactas de los productos, para así realizar una formulación mucho más precisa de las raciones. Tenga cuidado, cuando cambie de proveedor, de solicitar las especificaciones de las materias primas, ya que pueden tener una variación significativa con respecto a trazas de medicamentos o alguna alteración. 
              p.mb-0 Finalmente, cuando usted haga una selección de los ingredientes o materias primas, tenga presente los componentes nutricionales, energéticos y proteicos. 
                
            .col-8.col-md-4
              figure
                img(src='@/assets/curso/tema1/img11.png', alt='imagen ambiental', style="width: 400px;").m-auto
                
          .row.justify-content-center.align-items-center(titulo="Adecuación")
            .col-md-7.mb-4.mb-md-0
              p La adecuación es un proceso que debe suceder antes de la recepción de las materias primas. Esta debe planearse con la intención de agilizar el proceso de recepción y descargue de las materias primas, para así evitar los factores de perecibilidad. Ello garantiza un producto óptimo. 
              p.mb-4 Cuando usted necesita realizar la técnica de adecuación, seleccione un espacio adecuado para la descarga de las materias primas, que luego son direccionadas al lugar de almacenamiento. 
              p.mb-0 Es importante realizar la revisión de las diferentes estructuras: contenedores, estibas, envases, entre otros, y aplicar los protocolos de limpieza de las áreas de almacenamiento.
                
            .col-8.col-md-4
              figure
                img(src='@/assets/curso/tema1/img12.png', alt='imagen ambiental', style="width: 400px;").m-auto
                
          .row.justify-content-center.align-items-center(titulo="Recepción")
            .col-md-7.mb-4.mb-md-0
              p.mb-4 Esta técnica tiene como propósito la revisión de los ingredientes o materias primas solicitadas. Estas deben coincidir con la lista de solicitud y envío del proveedor. Usted puede identificar el contenido de los empaques o cajas porque deben tener una rotulación sobre número, fecha, lote y todas las características que informen su caducidad y registro.
              p.mb-4 Antes de realizar la descarga, realice una leve inspección de los productos, en relación con el embalaje, cantidad, color, olor, textura, densidad, humedad, peso y temperatura de los productos. Si existe alguna alteración, haga el respectivo reporte. 
              p Cabe mencionar, en el momento de la recepción de materias primas o productos a granel, un muestreo de las materias. Tome de forma aleatoria un ¼ a ½ de materia. Haga una identificación y rotulación de esta actividad con estos aspectos: fecha de muestra, fecha de elaboración del producto, tipo de materia prima, fecha de caducidad. Con materias primas o ingredientes como aceites, grasas, entre otros, la muestra se debe realizar después de haber iniciado el descargue.
              p.mb-0 Todas las muestras deben ser debidamente almacenadas, evitando la descomposición y destrozo por parte de roedores o insectos.
                
            .col-8.col-md-4
              figure
                img(src='@/assets/curso/tema1/img13.png', alt='imagen ambiental', style="width: 400px;").m-auto
                
          .row.justify-content-center.align-items-center(titulo="Evaluación")
            .col-md-7.mb-4.mb-md-0
              p.mb-0 La técnica de evaluación es un procedimiento que se realiza desde el proceso de selección, cuando se valora la calidad de la materia prima. Es importante, en el antes, durante y después de la recepción, velar por el cumplimiento de los requerimientos de los animales. Es un procedimiento que se realiza de manera constante y durante todas las fases.
                
            .col-8.col-md-4
              figure
                img(src='@/assets/curso/tema1/img14.png', alt='imagen ambiental', style="width: 400px;").m-auto
                



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
