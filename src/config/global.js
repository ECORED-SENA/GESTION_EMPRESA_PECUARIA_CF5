export default {
  global: {
    componenteFormativo:
      'Generalidades en la preparación de raciones para especies animales',
    descripcionCurso:
      'El presente componente de formación surge de la necesidad de aproximarse a la alimentación animal como un componente importante en la producción porque es la base fundamental para la expresión genética de los mismos. La preparación de raciones es un componente importante en la nutrición animal para llegar a alcanzar los diferentes requerimientos energéticos, proteicos, vitamínicos y minerales, logrando así un sistema productivo rentable, bajo los lineamientos de unas buenas prácticas de alimentación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Materias primas para el alimento animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Métodos de acopio e inspección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de la perecibilidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Técnicas de selección, adecuación, recepción y evaluación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Higienización de las materias primas para ración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ración animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnica y métodos de elaboración',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tratamiento de ración',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Transformación materias primas',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Criterios e interpretación de fórmulas',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Buenas prácticas de fabricación de alimentos de uso animal',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Áreas de proceso de ración animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Equipos para la ración animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Elementos de protección personal ',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Técnicas de evaluación',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },*/
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aguilar, J. (2012). Métodos de conservación de alimentos. Red Tercer Milenio.',
    },
    {
      referencia:
        'Cerdas, R. (2013).  Formulación de raciones para carne y leche. Desarrollo de un módulo práctico para técnicos y estudiantes de ganadería de Guanacaste, Costa Rica. InterSedes, 14(29), p. 128-153.',
      link: 'https://www.redalyc.org/pdf/666/66629448009.pdf',
    },
    {
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Sistemas de gestión de la seguridad y salud en el trabajo [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=5CF3HZdu6Bc',
    },
    {
      referencia:
        'EEA INTA Balcarce. (2002). Composición de alimentos para rumiantes. Sitio Argentino de Producción Animal.',
      link:
        'https://www.produccion-animal.com.ar/tablas_composicion_alimentos/01-alimentos_rumiantes.pdf',
    },
    {
      referencia:
        'FAO. (2020). Codex Alimentarius. Principios generales de higiene de los alimentos. OMS.',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/es/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B1-1969%252FCXC_001s.pdf',
    },
    {
      referencia:
        'Fundación CESFAC. (2007). Guía para el desarrollo de normas de higienización de los piensos. Ministerio de Agricultura, Pesca y Alimentación.',
      link:
        'https://cesfac.es/media/attachments/2019/08/08/guia-higienizacin.pdf',
    },
    {
      referencia:
        'González, M. (2013). Recepción, organización y control de materias primas. Slideshare.',
      link:
        'https://es.slideshare.net/ManoloGonzalez4/recepcion-organizacion-y-control-de-materias-primas',
    },
    {
      referencia:
        'ICA. (1998). Buenas Prácticas en la Fabricación de Alimentos en Colombia. Grupo de regulación y control de alimentos',
      link:
        'http://www.ucv.ve/fileadmin/user_upload/facultad_agronomia/BPF_Alimentos_Balanceados.pdf',
    },
    {
      referencia: 'ICA. (2021). Alimentos. Gov.co.',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/alimentos-para-animales.aspx',
    },
    {
      referencia:
        'Madigan, M., Martinko, J., y Parker, J. (2000). <em>Brock biology of microorganisms. Prentice Hall Internatio</em>',
    },
    {
      referencia:
        'Ministerio del Trabajo [Mintrabajo]. (2016). Sistema de gestión de seguridad y salud en el trabajo SG-SST.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59614744/Programa+Sistema+de+Gestion+de+Seguridad+y+Salud+en+el+Trabajo.pdf/cb0222ac-ca46-d3ad-ab49-0099c0051b39?version=1.0',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2021). Gestión integral de elementos de protección personal (EPP).',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia:
        'Muñoz, O. (2004). Comparación entre Extruido y Pelletizado en Alimentos de Camarones. VII Simposium Internacional de Nutrición Acuícola.',
      link: 'http://eprints.uanl.mx/8392/1/22Osvaldo_Munoz.pdf',
    },
    {
      referencia:
        'Rodríguez, A., López, N., Quintero, H. y Canales, R. (2002). Compuestos Orgánicos e Inorgánicos. En A. Rodríguez, Ciencia, Tecnología y Ambiente (p. 37-45). Cengage Learning.',
      link:
        'https://link.gale.com/apps/doc/CX3003700023/GVRL?u=sena&sid=bookmark-GVRL&xid=6ea6e595',
    },
    {
      referencia:
        'Universidad Industrial de Santander [UIS]. (2008). Guía de almacenamiento seco, refrigerado y congelado.',
      link:
        'https://www.uis.edu.co/intranet/calidad/documentos/bienestar_estudiantil/guias/GBE.27.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aditivo',
      significado:
        'Ingrediente adicionado a los productos, ya sea para aumentar su palatabilidad o su transformación, así como su componente nutricional.',
    },
    {
      termino: 'Aguas duras y blandas',
      significado:
        'Es principalmente dado por la cantidad de minerales o compuestos minerales que contiene el agua, si contiene muchos, se denomina agua dura, y si son pocos, se denomina agua blanda.',
    },
    {
      termino: 'Almacén',
      significado:
        'Lugar o espacio donde se organizan las materias primas, subproductos o productos.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Proceso donde se altera un producto o materia prima, ya sea por bacterias, otra materia prima, medicamentos, etc. Se produce principalmente por el manipulador de alimentos.',
    },
    {
      termino: 'Formula alimenticia',
      significado:
        'Es una secuencia de elementos llamados ingredientes, en los cuales se relacionan cantidades de los mismos.',
    },
    {
      termino: 'Fuerza centrífuga',
      significado:
        'Es la fuerza ejercida en un cilindro o círculo del centro hacia afuera.',
    },
    {
      termino: 'Lote',
      significado:
        'Cantidad de producto o insumo que se fabrica en un solo ciclo (fecha de fabricación es la misma), la característica especial es ser homogéneo.',
    },
    {
      termino: 'Peletizar',
      significado:
        'Es un proceso mecánico donde se realiza una mezcla de ingredientes previamente molidos; son humedecidos y calentados con vapor, luego, son compactados en pequeños cilindros.',
    },
    {
      termino: 'Registro',
      significado:
        'Acción de registrar una actividad, acción, comportamiento, eventualidad, entre otros.',
    },
    {
      termino: 'Suplemento alimenticio',
      significado:
        'Son adicionales a la alimentación, principalmente contienen gran cantidad de minerales, proteínas, vitaminas, aminoácidos, enzimas, entre otros.',
    },
    {
      termino: 'Sustancia activa',
      significado:
        'Molécula que tiene un medicamento como ingrediente esencial.',
    },
    {
      termino: 'Vida útil',
      significado: 'Duración estimada que tiene un producto o alimento.',
    },
  ],
  complementario: [
    {
      texto:
        'FAO. (2020). <em>Codex Alimentarius</em>. Principios generales de higiene de los alimentos. OMS.',
      tipo: 'Texto Digital',
      descarga: '/downloads/codex-alimentarius.pdf',
    },
    {
      texto: 'ICA. (2021). Alimentos. Gov.co. ',
      tipo: 'Página web',
      link:
        'https://www.ica.gov.co/areas/pecuaria/servicios/alimentos-para-animales.aspx',
    },
    {
      texto:
        'EEA INTA Balcarce. (2002). Composición de alimentos para rumiantes. Sitio Argentino de Producción Animal.',
      tipo: 'Repositorio Abierto',
      descarga: '/downloads/alimentos.pdf',
    },
    {
      texto:
        'Cerdas, R. (2013).  Formulación de raciones para carne y leche. Desarrollo de un módulo práctico para técnicos y estudiantes de ganadería de Guanacaste, Costa Rica. InterSedes, 14(29), p. 128-153.',
      tipo: 'Texto Digital',
      descarga: '/downloads/formulacion-raciones.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Manuel Loaiza Trujillo',
        cargo: 'Experto temático instructor',
        centro: 'Centro latinoamericano de especies menores Tuluá- SENA.',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica del SENA - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodología y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Eulises Orduz Amezquita'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Arnulfo Beltrán Mojica',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
