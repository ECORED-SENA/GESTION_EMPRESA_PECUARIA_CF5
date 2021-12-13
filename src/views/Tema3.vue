<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Ración animal
    


    .row.justify-content-center.mb-5
      .col-lg-12
        .bloque-texto-a.color-primario.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/img1.png', alt='imagen ambiental', style="width: 240px;").m-auto
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p.mb-0 Una ración se define como una provisión diaria de alimento o forraje planeada para una dieta de un animal. Esta es determinada según su estado de desarrollo. Para la composición de esta dieta, se seleccionan materias primas o productos balanceados y que tienen una determinada concentración de ingredientes para la satisfacción de los requerimientos energéticos, proteicos y minerales de los animales. Es importante conocer las características nutricionales de un alimento para así identificar las interacciones que dicho alimento generará en el animal. La gran mayoría de materias primas provienen de los vegetales, que aportan valores nutricionales a un costo relativamente más económico. Dentro de los nutrientes que están en las dietas de los animales, se clasifican: 
                      


    .row.justify-content-center.mb-2
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2
          p.mb-0 Nutrientes presentes en la dieta animal
          
        .tabla-a.color-acento-contenido.mb-3
          table
            thead
              tr(style="background-color: #fff")
                td 
                  b Agua 
                td Contenido de agua de los alimentos. 
            tbody
              tr
                td 
                  b Prote&iacute;nas, amino&aacute;cidos 
                td Porcentajes de prote&iacute;nas seg&uacute;n materias primas. 
              tr
                td 
                  b Nitr&oacute;geno no proteico 
                td
                  | (solo utilizado en las dietas para rumiantes) compuesto por urea, sales de amonio, nitritos, nitratos, entre otros.
              tr
                td 
                  b Gluc&oacute;sidos solubles 
                td Las hexosas, pentosas, las pectinas, amilopectina, amilasa.
              tr
                td 
                  b Gluc&oacute;sidos estructurales 
                td Solo para rumiantes, estructurados por hemicelulosa y celulosa.
              tr
                td L&iacute;pidos- extracto et&eacute;reo
                td &Aacute;cidos grasos, triglic&eacute;ridos y glicerol. 
              tr
                td 
                  b Minerales 
                td F&oacute;sforo, calcio, zinc, hierro, potasio, cloro, magnesio, etc.
              tr
                td 
                  b Vitaminas hidrosolubles 
                td
                  | Tiamina, riboflavina, vitamina B6, vitamina B12, las vitaminas del complejo B, &aacute;cidos nicot&iacute;nicos, asc&oacute;rbico, biotina.
              tr
                td 
                  b Vitaminas liposolubles 
                td Vitaminas A, D, C, E, K.
              tr
                td 
                  b Aditivos  
                td
                  | Utilizados generalmente para dar mayor palatabilidad al alimento, digestibilidad, absorci&oacute;n, entre otros.
          
        p.mb-0.pt-3(style="border-top: 1px solid #78b62e") 
          b-none Para la elaboración de raciones de los animales, es fundamental entender cada materia prima. Por ello, se debe hacer un análisis de la composición y la capacidad de los elementos nutricionales. En este sentido, existen dos métodos para dicho análisis. El primero es el método de análisis proximal (bromatológico), cuyo objetivo es detallar uno a uno los componentes importantes de las materias primas, para así realizar la mezcla de las raciones animales según sus necesidades básicas. Otro método es Van Soest, orientado al manejo de forrajes y pastos. Este método propone la separación de los componentes como la fibra. La diferencia entre los dos métodos es que el análisis proximal no descompone los componentes de la fibra, en primer lugar. A continuación, revise el siguiente recurso educativo para encontrar en cada método una opción de análisis de la materia prima.
    
    


    .row.fondo3
      .col-lg-12.px-md-5.py-5
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img2.svg', alt='imagen interactiva').m-auto
              
          .tarjeta.color-acento-contenido.p-3(x="34.9%" y="8.5%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
            SlyderE(indicadores="derecha")
              .row
                .col-md-12
                  .h5.mb-2(style="color: #12263f;") Método proximal-weende
                  p.mb-4(style="color: #12263f;") En la actualidad, muchos de los alimentos o materias primas se describen utilizando el análisis proximal, ya que realiza la separación completa de la humedad y el componente de materia seca. Este análisis utiliza una cantidad de 3 muestras.
                  .h5.mb-2(style="color: #12263f;") Primera muestra
                  p.mb-0(style="color: #12263f;") Eleva la materia prima a  temperaturas entre 100 - 110 °C, con el objetivo de determinar su capacidad de humedad o agua. La materia seca contiene nutrientes, como son proteína bruta, extracto etéreo, cenizas, fibra bruta, extracto libre de nitrógeno, extracto no nitrogenado (carbohidratos- glucósidos solubles), siendo estos componentes la base fundamental para realizar y analizar los alimentos.
                    
              .row
                .col-md-12
                  .h5.mb-2(style="color: #12263f;") Segunda muestra
                  p.mb-4(style="color: #12263f;") Es utilizada para el análisis de la proteína cruda, siendo una de las más importantes hablando de nutrición animal. Lo que se determina es el nitrógeno total que se libera en una digestión química, multiplicado por el factor 6.25 proveniente de un cálculo realizado, donde 100 g de proteína contienen 16 g de nitrógeno, 100 ÷ 16 = 6.25, siendo este un valor constante. Como limitante de este análisis, está la no diferenciación entre el nitrógeno no proteico y el proteico, ya que el no proteico no es absorbido por los monogástricos.
                  p.mb-0(style="color: #12263f;") Ejemplo: Proteína bruta 
                  p.mb-0(style="color: #12263f;") 1 gramo de maíz --------- 7.68 % de nitrógeno
                  p.mb-0.text-center(style="color: #12263f;")   % PB= 7.68 x 6.25 =48 % de proteína bruta.
              .row
                .col-md-12
                  .h5.mb-2(style="color: #12263f;") Tercera muestra
                  p.mb-4(style="color: #12263f;") Se somete por medio de un disolvente a la extracción del extracto etéreo o componente grasa de la materia prima, teniendo en cuenta que se realiza la extracción de aceites y todos los componentes liposolubles. El restante se somete al componente ácido y, después, al componente alcalino, para obtener la fibra bruta o cruda.
                  p.mb-0(style="color: #12263f;") El extracto libre de nitrógeno se obtiene del faltante para llegar a 100%, después de los procedimientos anteriores, siendo estos principalmente los componentes glucósidos solubles. 
                    
          .tarjeta.color-acento-contenido.p-3(x="92.8%" y="70.7%" numero="")(style=" border-top-right-radius: 0px; border-bottom-left-radius: 0px")
            .h5.mb-2(style="color: #12263f;") Método análisis de van Soest
            p.mb-4(style="color: #12263f;") Es utilizado en el manejo de forrajes y pastos. El método propone una separación de los componentes de la fibra que ayudan a determinar mejor cada uno, porque el análisis proximal no los diferencia como primer procedimiento para la determinación de estos componentes. El análisis de van Soest realiza una separación de las capas fibrilares del forraje, por medio de una sustancia detergente neutra. El resultado de esto es llamado fibra detergente neutra (FDN) y el restante que desaparece se presume que es el componente digestible. Seguido a esto, al componente de hemicelulosa se le aplica una solución ácida detergente, la cual es digerida, y al resultado se le llama fibra detergente ácido. En el último paso, se oxida, para disolver la lignina, y se obtiene la celulosa como remanente, que después se incinera. Los pasos anteriores son calculados de acuerdo con su desaparición.
              
          .tarjeta.color-acento-botones.p-3(x="35.2%" y="69%" numero="")(style="background-color: #ffebb8; border-top-right-radius: 0px; border-bottom-left-radius: 0px")
            .h5.mb-2(style="color: #12263f;") Diferencias entre el análisis proximal y el método de van Soest
            figure.mb-4
              img(src='@/assets/curso/tema3/img3.svg', alt='imagen ambiental', style="").m-auto
            .p-4(style="background-color: #5F9025")
              p.mb-0.text-white El análisis proximal no diferencia entre el componente de hemicelulosa y lignina (fibras insolubles), unificándolo todo en el extracto libre de nitrógeno, al lado de los carbohidratos (fuente de energía).




    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      .h2 3.1 Técnica y métodos de elaboración
    

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0
        .p-4.fondo-hoja.mb-3(style="background-color: #E8EEF3; border-top-right-radius: 60px; border-bottom-left-radius: 60px; background-size: 70px")(:style="{'background-image': `url(${require('@/assets/curso/tema1/bg-hoja.png')})`}")
          p.mb-0 Las técnicas y métodos de elaboración de raciones pueden ser simples, complejos y tecnificados; pueden ejecutarlos desde una persona sin conocimientos técnicos hasta los operarios de una industria alimentaria. Independientemente de la elección, tienen como objetivo suplir las necesidades nutricionales de los animales. Recuerde que es necesario que la persona reconozca la composición de los ingredientes o materias primas utilizadas.
            
        p.mb-5.pt-2(style="border-top: 1px solid #78b62e") 
          b-none La gran mayoría de animales requiere energía para sus procesos de mantenimiento o metabolismo normal; además, para su crecimiento, reproducción y sus capacidades productivas, que son de gran importancia para la explotación pecuaria. En 1945, el NRC (<em>National Research Council</em>: Consejo Nacional de Investigación) propuso un sistema de formulación que expone los valores de las energías de las materias primas, entre ellas: energía animal como calorías (CAL), energía bruta (EB), energía digestible (ED), energía metabolizable (EM) y energía neta (EN). Este fue un gran avance para la formulación de raciones, porque entender cómo separar cada componente energético permite atender necesidades alimentarias de las especies animales.  A continuación, se caracterizan cada una de las energías que usted debe comprender para su actividad laboral. 
        
      .col-9.col-lg-5
        figure
          img(src='@/assets/curso/tema3/img4.png', alt='imagen ambiental', style="width: 510px;").m-auto

    .row.justify-content-center.mb-5
      .col-lg-12
        TabsA.color-acento-contenido
          .tarjeta.color-secundario.p-4(titulo="Calorías (CAL)")(style="border-radius: 10px; background-color: #e2e9f0;")
            h5 Calorías (CAL)
            p.mb-0 Es la cantidad de calor necesaria para elevar un grado centígrado una molécula de H2O, por ejemplo, para pasar de 14.5 ºC a 15.5 ºC. Se pueden medir en kilocalorías, que son 1000 calorías (o 4.184 julios), o en megacalorías, que son 1.000.000 de calorías. 
              
          .tarjeta.color-secundario.p-4(titulo="Total de nutrimentos <br>digestibles (TDN)")(style="border-radius: 10px; background-color: #e2e9f0;")
            h5 Total de nutrimentos digestibles (TDN)
            p.mb-0 Los nutrientes digestibles totales es un método en el cual se utilizan las matemáticas para tener un cálculo aproximado de la energía liberada por un ingrediente o materia prima, teniendo en cuenta los valores obtenidos por el análisis proximal.
              
          .tarjeta.color-secundario.p-4(titulo="Energía bruta (EB)")(style="border-radius: 10px; background-color: #e2e9f0;")
            h5 Energía bruta (EB)
            p.mb-0 Es la energía que desprende un alimento al quemarse totalmente en una bomba calorimétrica. Es un parámetro aproximado de energía que se obtiene de forma rápida.
              
          .tarjeta.color-secundario.p-4(titulo="Energía digestible (ED)")(style="border-radius: 10px; background-color: #e2e9f0;")
            h5 Energía digestible (ED)
            p.mb-0 Se obtiene de la resta entre energía bruta y la energía eliminada por las heces. Esta energía es la que se encuentra disponible para el animal. 
              
          .tarjeta.color-secundario.p-4(titulo="Energía metabolizable (EM)")(style="border-radius: 10px; background-color: #e2e9f0;")
            h5 Energía metabolizable (EM)
            p.mb-0 Proceso de pérdida producido por la orina y los gases de la digestión (rumiantes). Se observó para los rumiantes que el valor de energía metabolizable representa alrededor del 82% de la energía digestible, por lo que la EM se puede estimar con tan solo multiplicar ED x 0.82. En cerdos y aves, la relación es mucho más variable, pero está cerca del 92%, ED x 0.92 = EM. 
              
          .tarjeta.color-secundario.p-4(titulo="Energía neta (EN)")(style="border-radius: 10px; background-color: #e2e9f0;")
            h5 Energía neta (EN)
            p.mb-0 La energía neta es la energía metabolizable a la cual se le resta el incremento calórico del animal; esta energía es destinada para dos tipos de necesidades: la producción y el mantenimiento.
              


    p.mb-5 De acuerdo con la última actualización de la NRC, la energía que más se utiliza para la elaboración de raciones es la energía metabolizable (EM). Esta se divide en dos: 1. Energía para ganancia/producción y 2. Energía neta para producción o para mantenimiento. A medida que avanza la edad, el peso y la producción de los animales, cambia la composición de ganancia o producción. Es importante tener en cuenta el peso, la edad productiva y la ganancia deseada del animal, para así elaborar o adecuar una ración óptima. Las guías de NRC en sus diferentes tablas suministran la EM de los animales en megacalorías/día (Mcal/día), siendo de gran importancia conocer la densidad energética de los diferentes alimentos, donde la EM del animal se divide por la EM del alimento, dando como resultado la cantidad de alimento suministrado en el día. Recuerde que debe tener en cuenta cómo se presenta la materia prima o alimento: seco o fresco, para así determinar si tiene la humedad o no.

    .row.mb-5
      .col-lg-12
        .p-5(style="background-color: #ddedcb; border-top-left-radius: 50px; border-bottom-right-radius: 50px;")
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              p.mb-0
                b Ejemplo. 
              p.mb-0
                b Fórmula.
              p.mb-4
                b EM animal ÷ EM alimento
              p.mb-3 Un ternero de 45 kilogramos necesita ser alimentado, para ello, se selecciona leche entera, esta tiene una capacidad del 12 % de humedad, aproximadamente, 5,37 Mcal de energía por kilogramo de materia seca, con un aumento de 600 gramos PC/día. Su requerimiento será de 3,50 según tablas NRC.
              p.mb-4
                b Desarrollo de la formulación. 
              p.mb-0 3.50 requerimiento animal ÷ 5.37 Mcal de alimento = 0.6517 kilogramos de materia seca de leche/día, que se podría expresar como 0.6517 kg ÷ 0.12 de humedad = 5,43 kilogramos de leche entera en materia fresca al día. 
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/img5.png', alt='imagen ambiental', style="width: 400px;").m-auto


    p.mb-4 Sumado a lo expuesto, se le sugiere observar el siguiente gráfico, que presenta la distribución de la energía.

    .row.fondo1.mb-4
      .col-lg-12.px-md-5.py-5
        .row.justify-content-center
          .col-lg-8
            figure
              img(src='@/assets/curso/tema3/img6.svg', alt='imagen ambiental', style="").m-auto

    p(style="margin-bottom: 5rem") Retomando los métodos que nos convoca la presente sección de información, se continúa caracterizando métodos de elaboración de las raciones animales. 



    .row.justify-content-center.mb-0
          .col-lg-12
            .contenedor-texto2
              p.mb-0 Es un método de formulación de raciones de elaboración manual, en el cual se utilizan las proteínas brutas de dos materias primas, donde es importante contar con una fuente energética y una fuente proteica. Se debe realizar un cuadro, donde se separan los alimentos, la proteína bruta del alimento, la concentración deseada, las partes y proporción de las fuentes alimenticias. Posterior a esto, se toma la proteína bruta del maíz, cuyo valor es 7.5%, y la proteína bruta de la soja tostada, que es de 36,8%; donde el maíz cumple el requerimiento energético y la soja tostada, el proteico. Seguidamente, se elige la concentración deseada, según el requerimiento del animal; en este caso, será de 18%. Teniendo estos valores, se procede a restar los valores de proteína bruta y concentración deseada; es importante restar primero el número mayor, ambos resultados se suman. Finalmente, se realiza una ecuación, donde se toma cada valor de las partes lo multiplicamos por 100 y lo dividimos por la sumatoria total de ambas partes; este resultado lo multiplicamos por la cantidad total de alimento a realizar, para obtener cuánto debemos agregar de dicho alimento. A continuación, se presenta un ejemplo: 
              .contenedor-title2
                p.mb-0.text-center.text-white
                  b Método de cuadrado de Pearson Simple 



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
