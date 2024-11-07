export default {
  global: {
    componenteFormativo: 'Los forrajes y aforos de pradera',
    descripcionCurso:
      'El componente formativo describe los forrajes, su clasificación, valor nutricional y uso en la alimentación animal. Aborda tipos de pastos y leguminosas, así como el aforo de praderas para medir la producción forrajera. También explica el suministro de forraje, factores agroecológicos que afectan su crecimiento, y la importancia de una correcta gestión para mantener la salud y productividad en sistemas ganaderos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Forrajes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de pastos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aforo de pastos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Métodos de aforo por doble muestreo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Método de zigzag o aforo en Z para recorrido del lote',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Método en X o en cruz para el recorrido del lote',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/72310027_CF02_DU.pdf',
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
  complementario: [
    {
      tema: 'Forrajes',
      referencia:
        'Agrotendencia. (2021). Producción de pastos y forrajes en 2 minutos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Rp8HhwNaZ6s',
    },
    {
      tema: 'Tipos de pastos',
      referencia:
        'Aprendizaje Ganadero SL (2023).Top 5 pastos para tu ganadería. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KS8Fq3oq7_A',
    },
    {
      tema: 'Aforo de pastos',
      referencia:
        'Omar Augusto Losada Hurtado (2020). AFORO DE PRADERAS Y CARGA ANIMAL. TUTORIAL. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=a1ZPgVGryDc',
    },
    {
      tema: 'Métodos de aforo por doble muestreo',
      referencia:
        'Vladimir Sánchez M. (2018). Aforo de un potrero o Prueba de Disponibilidad de Forraje.  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dwcA2StqHF0',
    },
    {
      tema: 'Método de zigzag o aforo en Z para recorrido del lote',
      referencia:
        'Rua, M. (2015). <em>Cómo aforar un potrero</em>. BM Editores. jairocairo.com, Cultura Empresarial Ganadera.',
      tipo: 'Articulo',
      link:
        'https://www.produccion-animal.com.ar/produccion_y_manejo_pasturas/pastoreo%20sistemas/192-Como_aforar.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aforo de pastos',
      significado:
        'técnica utilizada para medir la cantidad de pasto disponible en una pradera a través de muestreo en áreas definidas.',
    },
    {
      termino: 'Banco forrajero',
      significado:
        'área de la finca destinada a la producción de forrajes de alta calidad para ser utilizados en épocas de escasez.',
    },
    {
      termino: 'Carbohidratos',
      significado:
        'compuestos presentes en gran cantidad en los forrajes que proporcionan energía a los rumiantes.',
    },
    {
      termino: 'Digestibilidad',
      significado:
        'capacidad de los forrajes de ser descompuestos y absorbidos en el sistema digestivo de los rumiantes, afectando la calidad nutricional del alimento.',
    },
    {
      termino: 'Floración',
      significado:
        'etapa de crecimiento de las plantas en la que se producen flores; en los forrajes, esto puede reducir su valor nutricional.',
    },
    {
      termino: 'Forrajes',
      significado:
        'alimento vegetal utilizado en la alimentación de rumiantes, compuesto principalmente por pastos y leguminosas.',
    },
    {
      termino: 'Forrajes secos',
      significado:
        'forrajes que han sido cortados y secados, como el heno o los residuos de cosecha.',
    },
    {
      termino: 'Macroelementos',
      significado:
        'minerales presentes en los forrajes en grandes cantidades, como el calcio, fósforo y potasio, que son esenciales para el crecimiento animal.',
    },
    {
      termino: 'Microelementos',
      significado:
        'minerales presentes en los forrajes en pequeñas cantidades, como el cobre y el hierro, necesarios para el metabolismo animal.',
    },
    {
      termino: 'Pasto rústico',
      significado:
        'pasto que ha sido mejorado genéticamente para resistir condiciones adversas, como plagas o sequía, sin necesidad de muchos aportes externos.',
    },
  ],
  referencias: [
    {
      referencia:
        'FAO. (2014). Capítulo VI cultivos para heno - leguminosas forrajeras y legumbres.',
      link: 'http://www.fao.org/docrep/007/x7660s/x7660s0a.htm',
    },
    {
      referencia: 'Fondo Ganadero de Honduras (s.f.). Manejo de praderas.',
      link: '',
    },
    {
      referencia:
        'Pozzolo, O. (2007). Cosecha de Forrajes. Argentina: Universidad Nacional de Entre Ríos.',
      link: '',
    },
    {
      referencia:
        'Rúa, M. (2010). Cómo aforar un potrero para pastorear correctamente. Argentina: Cultura empresarial ganadera.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional Abierta y a Distancia. (s.f.). Manejo de praderas y pastos.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Germán Acosta Ramos',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
