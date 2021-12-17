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
                  | (Solo utilizado en las dietas para rumiantes) compuesto por urea, sales de amonio, nitritos, nitratos, entre otros.
              tr
                td 
                  b Gluc&oacute;sidos solubles 
                td Las hexosas, pentosas, las pectinas, amilopectina, amilasa.
              tr
                td 
                  b Gluc&oacute;sidos estructurales 
                td Solo para rumiantes, estructurados por hemicelulosa y celulosa.
              tr
                td 
                  b Lípidos- extracto etéreo
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
                  p.mb-0(style="color: #12263f;") El extracto libre de nitrógeno se obtiene del faltante para llegar a 100 %, después de los procedimientos anteriores, siendo estos principalmente los componentes glucósidos solubles. 
                    
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
            p.mb-0 Proceso de pérdida producido por la orina y los gases de la digestión (rumiantes). Se observó para los rumiantes que el valor de energía metabolizable representa alrededor del 82 % de la energía digestible, por lo que la EM se puede estimar con tan solo multiplicar ED x 0.82. En cerdos y aves, la relación es mucho más variable, pero está cerca del 92 %, ED x 0.92 = EM. 
              
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



    .row.justify-content-center(style="margin-bottom: 5rem")
          .col-lg-12
            .contenedor-texto2
              .contenedor-title2
                p.mb-0.text-center.text-white
                  b Método de cuadrado de Pearson Simple 
              p.mb-5 Es un método de formulación de raciones de elaboración manual, en el cual se utilizan las proteínas brutas de dos materias primas, donde es importante contar con una fuente energética y una fuente proteica. Se debe realizar un cuadro, donde se separan los alimentos, la proteína bruta del alimento, la concentración deseada, las partes y proporción de las fuentes alimenticias. Posterior a esto, se toma la proteína bruta del maíz, cuyo valor es 7.5 %, y la proteína bruta de la soja tostada, que es de 36,8 %; donde el maíz cumple el requerimiento energético y la soja tostada, el proteico. Seguidamente, se elige la concentración deseada, según el requerimiento del animal; en este caso, será de 18 %. Teniendo estos valores, se procede a restar los valores de proteína bruta y concentración deseada; es importante restar primero el número mayor, ambos resultados se suman. Finalmente, se realiza una ecuación, donde se toma cada valor de las partes lo multiplicamos por 100 y lo dividimos por la sumatoria total de ambas partes; este resultado lo multiplicamos por la cantidad total de alimento a realizar, para obtener cuánto debemos agregar de dicho alimento. A continuación, se presenta un ejemplo: 
              .row.justify-content-center.mb-4
                .col-lg-10
                  figure
                    img(src='@/assets/curso/tema3/img7.svg', alt='imagen ambiental', style="").m-auto
              .row.justify-content-center.mb-4
                .col-lg-10
                  .row.justify-content-center.mb-4
                    .col-lg-5.mb-4.mb-lg-0
                      figure
                        img(src='@/assets/curso/tema3/cajon1.svg', alt='imagen ambiental', style="width: 320px").m-auto
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema3/cajon2.svg', alt='imagen ambiental', style="width: 320px").m-auto
                  p.mb-4 Suponga que se quiere realizar una ración de 2.000 gr:
                    
                  .row.justify-content-center
                    .col-lg-8
                      .cajon.color-primario.p-4.fondo-hoja(style="border-radius: 12px; background-color: #E8EEF3;")(:style="{'background-image': `url(${require('@/assets/curso/tema1/bg-hoja.png')})`}")
                        p.mb-0.text-center 64.2 % ÷ 100 = 0.642 x 2.000gr = 1284 gr de maíz nacional 
                        p.mb-0.text-center 35.8 % ÷ 100= 0.358 x 2.000 gr = 716 gr de soja tostada
                      
    .row.justify-content-center(style="margin-bottom: 5rem")
          .col-lg-12
            .contenedor-texto2
              .contenedor-title2
                p.mb-0.text-center.text-white
                  b Cuadro de Pearson compuesto 
              p.mb-5 El cuadrado de Pearson compuesto tiene los mismos componentes del cuadrado de Pearson simple, pero con un mayor número de ingredientes, donde su única condición es que la cantidad de ingredientes sea par para poder lograr el resultado óptimo. La ejecución del método es la misma que la del cuadrado de Pearson simple.
                    
    .row.justify-content-center(style="margin-bottom: 5rem")
          .col-lg-12
            .contenedor-texto2
              .contenedor-title2
                p.mb-0.text-center.text-white
                  b Ecuaciones simultáneas
              p.mb-5 Este método requiere un poco más de conocimiento matemático y algebraico, donde es posible determinar dos o más ecuaciones con dos o más materias primas o ingredientes, cuyo objetivo es encontrar la incógnita, para lo cual se tienen, como primer paso, que determinar las materias primas a utilizar y el requerimiento del animal. Seguido a este paso, hay que convertir los datos a decimales; después, se expresan en las ecuaciones; posteriormente, se anula una incógnita y se despeja la siguiente; y por último, se hace el reemplazo de la incógnita. Es importante, después de terminar el proceso, hacer la comprobación de la formulación.
                    
    p.mb-4 Comprenda el paso a paso para hallar las ecuaciones. 
      
    .row.justify-content-center.mb-5
      .col-9.col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img8.png', alt='imagen ambiental', style="width: 475px;").m-auto
      .col-lg-7
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Paso 1. Determinación de la materia prima ")
            .col-md-12
              p.mb-0 Maíz grano--------------🡪 8.8 %
              p.mb-0 Torta de soya---------- 45 %
              p.mb-0 Requerimiento---------🡪 15 %
              
            
            
          .row(numero="2" titulo="Paso 2. Convertir a decimales ")
            .col-md-12
              p.mb-4 Se dividen estos porcentajes por 100 
              p.mb-0 Maíz grano-----------🡪 0.088
              p.mb-0 Torta de soya--------🡪 0.45
              p.mb-0 Requerimiento ------🡪 0.15
            
            
          .row(numero="3" titulo="Paso 3. Expresar las ecuaciones")
            .col-md-12
              p.mb-0 X = Maíz grano
              p.mb-0 Y = Torta de soya 
              p.mb-4 1 = 100 % de lo deseado, o sea, el requerimiento 
              p.mb-0 Donde la fórmula A es:&nbsp; X + Y = 1
              p.mb-0 Donde la fórmula B es:&nbsp; 0.0888X + 0.45Y = 0.15
                
          .row(numero="4" titulo="Paso 4. Anulación de la incógnita")
            .col-md-12
              p.mb-4 Se toma la fórmula A y se multiplica por el valor negativo del coeficiente de X en la fórmula B, expresándola de esta manera:
              p.mb-0.text-center
                b -0.088X - 0.088Y = - 0.088
              p.mb-0.text-center
                b +
              p.text-center.mb-0
                b  0.088X + 0.45Y = 0.15
              .row.justify-content-center
                .col-auto
                  p.mb-4.text-center(style="border-top: 2px solid #12263f")
                    b  0.362Y = 0.062
              p.mb-0 Se realiza una suma vertical de las dos fórmulas, donde se cancela  el valor X de ambas fórmulas y se resuelve el valor Y
                
          .row(numero="5" titulo="Paso 5. Despeje de la otra ecuación")
            .col-md-12
              p.text-center 0.362Y = 0.062
              p.text-center.mb-0 Donde Y es igua a:
              p.text-center
                b Y = (0.062/0.362)
              p.text-center
                b Y = 0.1713, 
                b-none este es el valor de Y
                
          .row(numero="6" titulo="Paso 6. Reemplazo de la incógnita")
            .col-md-12
              p Se toma la ecuación A y se reemplaza el valor de Y hallado previamente.
              p.text-center
                b A: X + 0.1713 = 1
              p.text-center
                b A: X = 1 - 0.1713 
              p el resultado de Y pasa al otro lado a restar, de esta manera resolviendo el valor de X
              p.text-center
                b X = 0.8287
              p Posterior a este proceso, los valores tanto de X como de Y se deben multiplicar por 100 para convertirlos en porcentajes, donde se sabe que :
              p.text-center
                b X = Maíz de grano 0.8287 -----🡪 82.87 %
              p.text-center.mb-4
                b Y = Torta de soya 0.1713 -----🡪 17.13 %
              p.mb-0 Para realizar la comprobación de la formulación, se realiza la sumatoria de los porcentajes, lo cual, como resultado, debe dar 100 %, o 99 % a causa de los decimales.

    .row.justify-content-center(style="margin-bottom: 5rem")
      .col-lg-10
        .p-5(style="background-color: #ddedcb; border-top-left-radius: 50px; border-bottom-right-radius: 50px;")
          p.mb-0
            b Con estos porcentajes, se puede empezar a realizar el racionamiento de las materias primas, dependiendo de la cantidad de alimento a suministrar, donde se multiplica el valor de X por la cantidad de kilos y el valor de Y por la cantidad de kilos de alimento a suministrar.

    .row.justify-content-center.mb-4
          .col-lg-12
            .contenedor-texto2
              .contenedor-title2
                p.mb-0.text-center.text-white
                  b Métodos computarizados
              p.mb-4 Existen métodos computarizados especializados para la formulación de raciones, los cuales emplean las grandes industrias alimenticias, para así generar una adición completa y exacta de vitaminas, minerales, proteínas, aditivos, aminoácidos esenciales, entre otros. Dentro de estos, se pueden encontrar las diferentes tablas de Excel, el componente SOLVER, entre otros. 
              p.mb-0 
                b Nota. 
                b-none  Las tablas de composición de los alimentos se anexan en el material complementario como documentos de apoyo.


    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      .h2 3.2 Tratamiento de ración
    
    

    .row.justify-content-center.align-items-center.mb-5
      .col-9.col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img9.png', alt='imagen ambiental', style="width: 500px;").m-auto
      .col-lg-7
        .p-4.mb-3(style="background-color: #d8e2eb; border-top-right-radius: 40px; border-bottom-left-radius: 40px;")
          p.mb-0 El tratamiento de las raciones está orientado a ofrecer inocuidad y confiabilidad de los alimentos cuando se asegura una ración alimenticia libre de patógenos que alteran el metabolismo animal. Esto genera retrasos e inconvenientes en la producción.
        p.mb-0.pt-2(style="border-top: 1px solid #78b62e") 
          b-none El tratamiento más utilizado en las industrias alimenticias es a base de calor, donde se realiza en corto tiempo la elevación de temperaturas, logrando un efecto de compresión y descompresión. Esto destruye los componentes bacterianos o microorganismo y se evita la pérdida de nutrientes de la ración o alimento. Dentro del tratamiento dado a las raciones, la eliminación de impurezas que pueden resultar del proceso es una actividad de importancia para asegurar la calidad del producto, ya que se pueden eliminar impurezas tales como metales, piedras, entre otros, de las materias primas utilizadas; esta puede ser realizada por métodos manuales, como el zarandeo, o tecnificados, como por aspiración.


    
    
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      .h2 3.3 Transformación materias primas
    

    p.mb-5 La transformación de las diferentes materias primas es un proceso a través del cual una materia prima de valores nutricionales y costos bajos logra convertirse en una ración alimenticia con un valor nutricional alto. Este valor de producción se adiciona por medio de diferentes técnicas que agregan un valor al componente nutricional e inocuo de las materias primas.  Dentro de las técnicas de transformación, se encuentran el lavar, pasteurizar, congelar, envasar, peletizar, extrudizar y la adición de conservantes, entre otros factores. Dentro de la transformación de los alimentos o raciones, los métodos más conocidos son los pellets y extrudes. A continuación, se describe cada uno de los métodos de transformación.

    SlyderB.mb-5(:datos="datosSlyder")

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0.onTop
        p.mb-2 Continuando en el contexto de las transformaciones, es importante comprender la mezcla de los ingredientes.  Su importancia está al nivel de la selección de las materias primas, porque, dependiendo de una mezcla adecuada, está el éxito de la ración elaborada. Sin duda, este proceso puede marcar la diferencia entre el éxito o el fracaso de la ración. Es importante tener un protocolo estándar en la preparación de las raciones, para así asegurar: 1.  La uniformidad de la ración preparada, 2. Uniformidad de los lotes, y 3. Información frente al uso de las materias primas. Esto sin duda ayuda a evitar la alteración de los diferentes sistemas digestivos de los animales y, por ende, afecta la producción.
        .neg--right.p-4.fondo-hoja(style="background-color: #E8EEF3;")(:style="{'background-image': `url(${require('@/assets/curso/tema1/bg-hoja.png')})`}")
          p.mb-0 La dieta o ración animal debe estar perfectamente formulada para las necesidades de los animales, para lograr los objetivos productivos deseados.  En la mezcla de los ingredientes, influyen muchos factores que pueden variar dependiendo del sistema productivo, donde muchas veces el orden de la mezcla está ligado a la practicidad del operario, del establecimiento, ubicación de las materias primas, disponibilidad, tiempos de mezclado, entre otros. De allí la importancia de la ubicación y la manera de almacenamiento de las materias primas, teniéndose en cuenta, desde el primer momento del proceso, para generar una comodidad del personal y un mínimo flujo de movimiento de maquinarias o equipo.
      .col-9.col-lg-5
        figure
          img(src='@/assets/curso/tema3/img13.png', alt='imagen ambiental', style="width: 500px").m-auto
    
    

    p.mb-5 Los diferentes ingredientes que componen la dieta varían y generan una gran diversidad de estados, pasando desde polvo hasta el líquido. Usted debe aprender a identificar la materia prima a partir de su tamaño, humedad, poder de colmatación, aglomeración, de resistencia al frío, al calor, entre otros. Todo ello define el orden de la ración, para entregar un alimento de calidad al animal y bajo condiciones estandarizadas. A continuación, se exponen algunos criterios que usted debe considerar en su zona de trabajo.

    .row.mb-4
      .col-lg-12
        .p-5(style="background-color: #d8e2eb; border-top-left-radius: 50px; border-bottom-right-radius: 50px;")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              ul.lista-ul
                li 
                  i.fas.fa-play(style="color: #FFB500")
                  p.mb-0 Los ingredientes de baja densidad deben agregarse primero. Entre ellos, se encuentra el heno o paja. Cuando se agrega de primero, se asegura una mezcla homogénea de los ingredientes y esto evita la selección por parte del animal.
                    
                    
                li 
                  i.fas.fa-play(style="color: #FFB500")
                  p.mb-0 Las materias primas que sean similares, frente a su tamaño y densidades, son propensas a mezclarse fácil y rápidamente. Por ejemplo: se pueden colocar los granos molidos, harinas, extruidos y pellets frente a densidades que son muy parecidas. Posteriormente a esto, se deben agregar los diferentes minerales y aditivos, todos los ingredientes que se usan en más bajas proporciones.
                    
                    
                li 
                  i.fas.fa-play(style="color: #FFB500")
                  p.mb-0 Cuando se adicionan minerales a las materias primas o ingredientes, se debe garantizar una mezcla homogénea. El tiempo de preparación es de tres (3) minutos.
                    
                    
                li 
                  i.fas.fa-play(style="color: #FFB500")
                  p.mb-0 Entregar al animal las materias primas húmedas con bajo componente aglutinante y alto nivel de humedad. Este puede ubicarse en el antepenúltimo orden. 
                    
                    
                li 
                  i.fas.fa-play(style="color: #FFB500")
                  p.mb-0 Los subproductos viscosos, pegajosos y/o húmedos, como la melaza o el gluten, se pueden agregar a la ración animal de últimos.
                    
                
                    
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/tema3/img14.svg', alt='imagen ambiental', style="width: 600px;").m-auto

    separador
    #t_3_4.titulo-segundo.color-acento-contenido
      .h2 3.4 Criterios e interpretación de fórmulas
    
    

    .row.justify-content-center.align-items-center.mb-5
      .col-9.col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img15.png', alt='imagen ambiental', style="width: 500px;").m-auto
      .col-lg-7
        .p-4.mb-3(style="background-color: #d8e2eb; border-top-right-radius: 40px; border-bottom-left-radius: 40px;")
          p.mb-0 Uno de los errores comunes en la nutrición animal es confundir alimentar con formular. Cualquier persona puede realizar una formulación sin un conocimiento previo de nutrición, siguiendo unos requerimientos dados; pero la verdadera aplicación de la formulación animal es comprender al animal, su estado fisiológico, su anatomía, su etapa de desarrollo y los diferentes requerimientos nutricionales que cada uno de estos factores genera en el animal. La importancia de este proceso es la aplicación de las fórmulas y los valores nutricionales adecuados para cada alimento animal. Las diferentes fórmulas empleadas deben tener los siguientes criterios:
          
        ul.lista-ul.pt-2(style="border-top: 1px solid #78b62e") 
          li 
            i.fas.fa-play(style="color: #78B62E")
            p.mb-0 Necesidades nutricionales del animal.
              
          li 
            i.fas.fa-play(style="color: #78B62E")
            p.mb-0 Alimentos y análisis de alimentos.
              
        p.mb-0 Con estos criterios, se debe interpretar la buena utilización de las fórmulas y los resultados esperados, buscando siempre satisfacer los requerimientos del animal, para así lograr un índice productivo mayor de los animales.


    
    
    separador
    #t_3_5.titulo-segundo.color-acento-contenido
      .h2 3.5 Buenas prácticas de fabricación de alimentos de uso animal


    .row.justify-content-center.mb-5
      .col-lg-5
        p.mb-0 Las buenas prácticas de elaboración de los alimentos de uso animal son todas las acciones involucradas en este aspecto que brindan un estándar de inocuidad y calidad, según las diferentes normas y lineamientos que ofrecen a las diferentes especies un alimento de calidad.
          
      .col-lg-7.mb-4.mb-lg-0
        .p-4.mb-3(style="background-color: #3c6d9d3f")
          .bloque-texto-b.p-4.px-0
            .bloque-texto-b__texto
              i.fas.fa-quote-left(style="color: #78B62E; font-size: 28px;")
              p.mb-0 Las buenas prácticas de fabricación de alimentos (BPFA) constituyen el factor tendiente para asegurar que los alimentos se fabriquen en forma uniforme y controlada, de acuerdo con normas de calidad, el uso que se pretende dar y conforme con las condiciones establecidas para su comercialización.
              i.fas.fa-quote-right(style="color: #78B62E; font-size: 28px;")
            .bloque-texto-d__autor.d-flex.justify-content-start
              p.mb-0 
                b (ICA, 1998).
        

    p.mb-5 Dentro de las buenas prácticas, existen unos lineamientos de garantía de calidad, los cuales se toman desde el concepto individual hasta el colectivo, estos son:

    .row.justify-content-center.mb-4
      .col-lg-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--acordion")
          .row.justify-content-center(titulo="Personal")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg.mb-4.mb-lg-0
                  p.mb-4 Un sistema productivo gestionado desde los estándares de las BPFA necesita un personal entrenado desde un método de evaluación y supervisión constante. Para la producción, la empresa debe contar con un organigrama o una programación de funciones específicas. Además de lo anterior, la empresa debe tener condiciones que favorezcan la salud del personal. Algunas prácticas que se deben fomentar son: la limpieza y desinfección de las diferentes áreas laborales, las condiciones de entrega de materias primas y traslado
                  p.mb-0 Cabe mencionar que el personal debe utilizar siempre todos los elementos de protección requeridos para la labor que está realizando, donde la empresa pecuaria será responsable de la capacitación en los temas de higiene, manipulación de alimentos, seguridad y elementos de protección personal, aparte de las especificaciones de las funciones a realizar.  Para la empresa, es importante tener en cuenta las diferentes políticas empresariales, los POE y las listas de chequeo.
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema3/img16.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    
          .row.justify-content-center(titulo="Instalaciones ")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg.mb-4.mb-lg-0
                  p.mb-0 Las instalaciones sugeridas en las buenas prácticas deben estar construidas, adaptadas, ubicadas y mantenidas con el propósito de beneficiar un proceso, al margen de errores mínimos de riesgos. Las instalaciones deben mantenerse limpias y desinfectadas, de acuerdo con protocolos. Además, tener las áreas con buena iluminación, temperatura, humedad y ventilación, para evitar plagas. Cuando planee una instalación, tenga presente: 1. Separación de las diferentes áreas productivas, 2. Almacenamiento, 3. Control de calidad, 4.  Descanso/Refrigerio y 5. Servicios sanitarios.
                    
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema3/img17.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    
          .row.justify-content-center(titulo="Equipos")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg.mb-4.mb-lg-0
                  p.mb-0 Las diferentes operaciones realizadas en el proceso de elaboración de raciones están determinadas por el diseño, construcción y ubicación de los diferentes equipos y maquinaria. Estos últimos se deben ubicar de tal manera que minimicen la pérdida de materia prima, mantenimiento, limpieza y desinfección.   Tenga presente establecer un adecuado programa de mantenimiento, que asegure la limpieza y el correcto funcionamiento de todos los equipos. De esta actividad, debe llevarse un registro completo. Esto es de vital importancia, sobre todo, en algunos equipos utilizados en la industria de alimentos para animales, como son peletizados, expansores y extrusores (ICA, 1998).
                    
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema3/img18.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    
          .row.justify-content-center(titulo="Materiales")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg.mb-4.mb-lg-0
                  p.mb-0 Las diferentes materias primas deben ser adquiridas de proveedores confiables, certificados y avalados por los diferentes medios de control, asegurando así su veracidad frente a la información suministrada y dando el parte de calidad de esta. Todas deben ser inspeccionadas bajo criterios de calidad e inocuidad, teniendo en cuenta los diferentes factores que puedan alterar la materia prima. El almacenamiento de dichas materias primas debe ser apropiado para cada una y asegurando que se realice el previo etiquetado, rotulado con número de lote, y toma de muestra. Cuando usted rechace un material, haga una rotación y almacene la materia en lugares determinados y restringidos. Finalmente, cuando manipule material de desecho, recoléctelo y empáquelo adecuadamente para ser llevado a los diferentes centros de disposición de residuos para realizar su tratamiento o eliminación.
                    
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema3/img19.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    
          .row.justify-content-center(titulo="Alimentos medicados")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg.mb-4.mb-lg-0
                  p.mb-0 Cada vez que se elaboran alimentos con fármacos veterinarios, se deben tener en cuenta condiciones importantes, como lo es la prescripción del médico veterinario. El utilizar medicamentos registrados es importante, así como el tiempo de retiro del medicamento y su rotulación en el alimento, para evitar contaminación. Según la FDA (2014), la contaminación de alimentos para uso animal producida por los fármacos veterinarios fue de 11 %, principalmente causada por el uso de implementos mal aseados, que contenían trazas de medicamentos, de allí la importancia de la limpieza o, si es posible, el uso único de implementos para estas labores de preparación. 
                    
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema3/img20.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    
          .row.justify-content-center(titulo="Documentos")
            .col-lg-12
              .row.justify-content-center.align-items-center
                .col-11.col-lg.mb-4.mb-lg-0
                  p.mb-0 La documentación es una de las partes fundamentales en el proceso de las Buenas Prácticas de Fabricación de Alimentos, porque el registro o recolección de datos de cada proceso es fundamental para realizar un análisis, evaluar indicadores, verificar el cumplimiento de muchas labores y fuentes de trazabilidad. Esta documentación de producción y control de calidad se debe actualizar y verificar de manera continua, para así generar un sistema de calidad íntegro y eficiente.
                  
                    
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema3/img21.svg', alt='imagen ambiental', style="width: 170px").m-auto
                    


    .row.mb-4
      .col-lg-12
        .p-5(style="background-color: #ddedcb; border-top-left-radius: 50px; border-bottom-right-radius: 50px;")
          .row.justify-content-center.align-items-center
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/tema3/img25.svg', alt='imagen ambiental', style="width: 580px;").m-auto
            .col-lg-6.mb-4.mb-lg-0
              p En resumen, las buenas prácticas de preparación de alimentos que usted debe fomentar y que fueron caracterizadas anteriormente son: 
              ul.lista-ul
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 Utilización de equipos e instalaciones adecuadas para la elaboración de alimentos.
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 Personal capacitado y procedimientos aprobados por el ente regulador.
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 Métodos de ensayo válidos.
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 Registros de todos los procedimientos y resultados obtenidos. 
                li 
                  i.fas.fa-play(style="color: #78B62E")
                  p.mb-0 Independencia o libre elección de las materias primas aprobadas o rechazadas después de que sea una materia prima aprobada para su uso en alimentos por el ente regulador.
                    
              p.mb-0 El estricto cumplimiento de ellas llevará, sin duda, al logro de la calidad total en la elaboración de los insumos, facilitando su acceso al comercio internacional (ICA, 1998). Dentro de las BPFA, es de fundamental comprender las diferentes enfermedades transmitidas por los alimentos (ETA) para su prevención. A continuación, se exponen los procesos que alteran la inocuidad de los alimentos.

    .row.justify-content-center
      .col-lg-12
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo="Malos procesos de limpieza y desinfección")
            .row.justify-content-center
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/tema3/img26.png', alt='imagen ambiental', style="").m-auto
                ul.lista-ul
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Mala higiene del personal.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Operarios enfermos.
                      
                
          .py-3.py-md-4(titulo="Manipulación inadecuada")
            .row.justify-content-center
              .col-lg-8
                figure.mb-4
                  img(src='@/assets/curso/tema3/img27.png', alt='imagen ambiental', style="").m-auto
                ul.lista-ul
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Productos químicos en los alimentos.
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Temperaturas inadecuadas.
                      
                  li 
                    i.fas.fa-play(style="color: #78B62E")
                    p.mb-0 Contaminación cruzada.
                      


    

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Molienda',
        texto:
          'Proceso que se le realiza a las materias primas, en especial a los granos, a través de herramientas o máquinas que fracturan el producto,  para lograr una mejor mezcla en la ración y digestibilidad por parte de los animales. <br>La molienda se puede separar en pre-molienda y post-molienda. La pre-molienda se realiza principalmente a materias primas que posteriormente serán almacenadas, y la post-molienda es antes del proceso de mezcla.',
        imagen: require('@/assets/curso/tema3/img10.jpg'),
      },
      {
        titulo: 'Pellets',
        texto:
          'El peletizado es un proceso que toma las materias primas seleccionadas y pesadas. Estas se pueden encontrar en polvo con baja palatabilidad, lo que lo hace difícil de suministrar al animal; por eso, a través del aumento de temperatura y manejo de la humedad, se ejerce una fuerza mecánica, para transformar la materia prima en partículas mucho más grandes, que son fáciles de ingerir por el animal. <br> El tamaño del pellet puede variar según el tamaño y las condiciones fisiológicas de la ingesta del animal. Estos son usualmente formados cilíndricamente y varían desde 3/32" (2,38 mm) hasta 1 3/8” (34,9mm), a pesar de que hay tamaños más grandes, pero que resultan poco frecuentes. (Muñoz, 2004).',
        imagen: require('@/assets/curso/tema3/img11.jpg'),
      },
      {
        titulo: 'Extruido',
        texto:
          'Es un proceso adicional dado a los pellets. Se caracteriza por transformarse en extrusión, donde un proceso de cocción continua y pareja producen una unión, cambios de forma, estructura, flotabilidad y composición de la materia prima.  Es muy utilizado en la acuicultura, por su característica flotabilidad debido a la formación de lipo-carbohidratos.',
        imagen: require('@/assets/curso/tema3/img12.jpg'),
      },
    ],
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
