<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Tipos de pastos
    
    .fondo-personalizado-1.size-full.med.f2
      .fondo-personalizado-1__contenido.pt-4
        .row.mb-4
          .col-lg-8
            .row(data-aos="fade-right")
              .col-md-auto.d-none.d-lg-block
                figure
                  img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
              .col
                p.mb-0 El pasto es una gramínea utilizada para la alimentación animal, ya que provee nutrientes como carbohidratos, proteínas, aminoácidos, minerales y vitaminas, lo que lo convierte en un alimento completo y económico. Las pasturas crecen en áreas destinadas a la crianza de ganado bovino. El pasto debe considerarse una unidad dentro del sistema de producción, por lo que es importante conocer la disponibilidad de este recurso en cada predio.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 400px;")
        
        p.mb-5(data-aos="fade-top") Los invitamos a escuchar el podcast, donde hablaremos sobre la importancia de los pastos en la ganadería, por qué son una fuente esencial de alimentación para el ganado y cómo factores como el suelo, el clima y el manejo pueden afectar su producción.

        .row.align-items-center
          .col-lg-7(data-aos="fade-top")
            .fondo-color-sistema-p.p-4.borde-15
              .row.align-items-center
                .col-lg-5
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/temas/43.svg",style="max-width: 270px;")
                .col-lg-7
                  h3.c-color-secundario.mb-4 ¿Sabías qué?
                  p.mb-4.text-white Lo invitamos a escuchar el siguiente Pódcast:
                  TarjetaAudio.tarjeta-p-1(
                    texto="Tipos de pastos"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    tiempo
                  )
          .col-lg-5.order-first.order-lg-last(data-aos="fade-bottom")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/42.png",style="max-width: 505px;")

    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Selección de especies de pasto según las condiciones de la finca
    
    .row.mb-4(data-aos="fade-left")
      .col-lg-8
        .row
          .col-md-auto.d-none.d-lg-block
            figure
              img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
          .col
            p.mb-0 Las gramíneas se dividen en naturales y mejoradas (o introducidas). Las gramíneas naturales, conocidas como criollas, crecen de manera espontánea, y el único control que se realiza es mediante el pastoreo. La mayoría de las ganaderías del país dependen de estos pastos naturales, que tienen baja productividad, pero son las únicas especies que se adaptan a condiciones hostiles de clima y suelo.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/44.png",style="max-width: 400px;")
    
    .row.align-items-center.mb-5(data-aos="fade-bottom")
      .col-md-auto
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 94px;")
      .col
        p.mb-4 Las gramíneas mejoradas son seleccionadas por sus características como forrajes. En este caso, el ser humano interviene directamente, seleccionando las semillas para mejorar la producción. Estas plantas mejoradas tienen un mayor crecimiento y responden bien a la aplicación de fertilizantes.
        p.mb-0 Al seleccionar los pastos, es importante considerar:
    
    .fondo-personalizado-1.top-1.f6
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center(data-aos="zoom-in-out")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 1.] Consideraciones para la selección de los pastos
            
            .tabla-a.color-acento-contenido.bg-white.tabla-p-1
              table
                thead
                  tr
                    th Criterio
                    th Descripción
                tbody
                  tr
                    td Sistema de producción.
                    td Pastoreo o corte.
                  tr
                    td Forma de crecimiento.
                    td Erecto o rastrero.
                  tr
                    td Condiciones agroecológicas.
                    td Cantidad de lluvia, temperatura y fertilidad del suelo.
                  tr
                    td Valor nutritivo.
                    td Las gramíneas tienen bajo contenido de proteínas en comparación con las leguminosas como el fríjol, alfalfa, kudzu y centrosema. En la época de prefloración, el contenido de proteínas es entre el 10 % y el 15 %, disminuyendo a medida que la planta crece.
                  tr
                    td Producción.
                    td Determinada por la cantidad de hectáreas destinadas a la obtención de pasto.
                  tr
                    td Palatabilidad.
                    td Determina si el pasto es agradable para el consumo del animal.
                  tr
                    td Tiempo de recuperación.
                    td Es el período que se deja descansar el potrero para que el pasto se recupere. Este tiempo está relacionado con el crecimiento y desarrollo de la especie.
                  tr
                    td Facilidad de propagación.
                    td Capacidad del pasto para propagarse eficientemente.
                  tr
                    td Tolerancia a plagas y enfermedades.
                    td Capacidad de la especie para resistir plagas y enfermedades comunes.
                  tr
                    td Capacidad de competencia.
                    td Competencia de la especie con otras durante el crecimiento.

    .row.mb-5.align-items-center(data-aos="fade-down")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
      .col
        p.mb-0 Recomendaciones para seleccionar pastos que se adapten mejor a su finca:

    .fondo-personalizado-1.size-full.f2.top-2.mt-3.mb-5
      .fondo-personalizado-1__contenido
        .row.justify-content-center.align-items-center(data-aos="flip-up")
          .col-lg-6
            .fondo-color-sistema-j.borde-11.p-2.px-3.mb-2
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/46.svg",style="max-width: 85px;")
                .col
                  p.mb-0 Conozca la capacidad de crecimiento del pasto en su suelo. Para esto, es necesario conocer las condiciones físicas y químicas del suelo (fertilidad, humedad y topografía).
            .fondo-color-sistema-j.borde-11.p-2.px-3.mb-2
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 85px;")
                .col
                  p.mb-0 En suelos fértiles, se recomienda sembrar guinea y #[em marandú].
            .fondo-color-sistema-j.borde-11.p-2.px-3.mb-2
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 85px;")
                .col
                  p.mb-0 En suelos de baja fertilidad, se deben usar #[em brachiaria humidicola, andropogon y brachiaria decumbens].
            .fondo-color-sistema-j.borde-11.p-2.px-3.mb-2
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/49.svg",style="max-width: 85px;")
                .col
                  p.mb-0 En suelos con mal drenaje, use pasto jazmín, #[em setaria kazungula y brachiaria humidicola].
            .fondo-color-sistema-j.borde-11.p-2.px-3.mb-2
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/50.svg",style="max-width: 85px;")
                .col
                  p.mb-0 Para terrenos de uso intensivo en verano y altos niveles de fertilización, utilice pasto #[em tanzania] y elefante.
            .fondo-color-sistema-j.borde-11.p-2.px-3.mb-2
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/51.svg",style="max-width: 85px;")
                .col
                  p.mb-0 Si hay problemas por insectos como el salivazo, se recomienda usar #[em andropogon] y pasto #[em marandú].
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/52.png",style="max-width: 400px;")

    .fondo-personalizado-1.top-3.f4
      .fondo-personalizado-1__contenido.pb-5
        .titulo-decorativo.mb-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Pasto de corte
        
        .row.mb-5.align-items-center(data-aos="fade-down")
          .col-md-auto.d-none.d-lg-block
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
          .col
            p.mb-0 En Colombia, los pastos de corte se conocen con los siguientes nombres:
        
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-bottom")
          .col-lg-3
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/53.png",style="max-width: 295px;")
          .col-lg-4
            .fondo-color-sistema-j.p-3.borde-6.mb-2
              .d-flex.align-items-center
                i.fas.fa-circle.c-color-acento-contenido
                p.mb-0.ms-2 Elefante, sorgo o mijo perla.
            .fondo-color-sistema-j.p-3.borde-6.mb-2
              .d-flex.align-items-center
                i.fas.fa-circle.c-color-acento-contenido
                p.mb-0.ms-2 Pampa verde, #[em indú, camerún y king grass].
            .fondo-color-sistema-j.p-3.borde-6
              .d-flex.align-items-center
                i.fas.fa-circle.c-color-acento-contenido
                p.mb-0.ms-2 Pasto imperial, morado, #[em taiwan, gramalote, maralfalfa, brasil] y cuba 22.

        .row.align-items-center(data-aos="fade-down")
          .col-md-auto.d-none.d-lg-block
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
          .col
            p.mb-0 A continuación se describen las características específicas de los diferentes tipos de pastos de corte:
    
    .row
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/54.png",style="max-width: 221px;")
      .col-lg-9
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Pasto elefante")
            .ps-md-5.ms-md-3
              ul.lista-ul
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Género]: #[em Pennisetum] 
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Especie]: #[em Purpureum] 
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre científico]: #[em Pennisetum purpureum]
                li.mb-0
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre común]: Elefante o pasto napier
              p Este pasto es de origen africano y tiene la característica de crecer de manera recta, alcanzando alturas de 1.8 a 2 metros. En la etapa de mayor crecimiento se desarrollan los tallos y hojas. La madurez en la cosecha está determinada por la región y la época, con una producción que oscila entre 60 y 90 toneladas de pasto por hectárea. 
          .div(titulo="Sorgo o mijo")
            .ps-md-5.ms-md-3
              ul.lista-ul
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Género]: #[em Pennisetum]
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Especie]: Typhoides, glaucum y americanum
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre científico]: #[em Pennisetum glaucum] (sorgo) y #[em Pennisetum typhoides] o mijo (perla)
                li.mb-0
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre común]: Sorgo, mijo (perla), indú o camerún 

              p Este pasto crece de 1.5 a 2 metros de altura, con un buen desarrollo de follaje, y se adapta bien a alturas de 1.800 m.s.n.m. a 2.500 m.s.n.m. Es de fácil digestión para los rumiantes, con un alto contenido de carbohidratos solubles en el rumen, principalmente azúcares simples. La producción oscila entre 50 y 80 toneladas de forraje por hectárea.
          .div(titulo="Pasto <em>king grass</em>")
            .ps-md-5.ms-md-3
              ul.lista-ul
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Género]: #[em Pennisetum]
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Especie]: #[em Pennisetum purpureum]
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre científico]: #[em Pennisetum sp].
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre común]: King grass 

              p Este pasto es un híbrido, resultado del cruzamiento de dos o más especies, en este caso entre el pasto elefante y el sorgo forrajero. Puede alcanzar una altura de 3 metros, es frondoso y se adapta a climas templados entre 1.800 m.s.n.m. y 0 m.s.n.m. Su producción por hectárea está estimada en 200 toneladas.
    .row.mb-5
      .col-lg-9
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Pasto maralfalfa")
            .ps-md-5.ms-md-3
              ul.lista-ul
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Género]: #[em Pennisetum]
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Especie]: #[em Pennisetum purpureum]
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre científico]: #[em Pennisetum sp].
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre común]: Maralfalfa

              p Este pasto se cultiva a alturas de 0 m.s.n.m. hasta 3.000 m.s.n.m. Al ser un híbrido, puede alcanzar de 1.5 a 2.2 metros de altura. Su primer corte se realiza a los 90 días y, una vez establecido el cultivo, su producción se estima entre 50 y 120 toneladas de pasto fresco por hectárea. Es importante tener precaución con la floración precoz, que puede afectar el rendimiento y la calidad nutricional del cultivo.
          .div(titulo="Pasto imperial")
            .ps-md-5.ms-md-3
              ul.lista-ul
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Género]: Axonopus
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Especie]: #[em Axonopus scoparius]
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre científico]: #[em Axonopus scoparius]
                li.mb-1
                  .d-flex.align-items-center
                    img.me-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
                    span #[b Nombre común]: Imperial

              p Este pasto crece entre 1 y 2 metros. La mayor tasa de crecimiento se da entre los 40 y 50 días, alcanzando la floración entre los 70 y 90 días, después de la cosecha anterior. Su producción por hectárea está entre 40 y 70 toneladas de pasto fresco.
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/56.png",style="max-width: 293px;")

    .row.mb-5.align-items-center(data-aos="fade-down")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
      .col
        p.mb-0 Las generalidades del pasto de corte son:

    .fondo-personalizado-1.f7.mb-2
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4.overflow-hidden.position-relative(data-aos="flip-up")
          PasosB.pasos-personalizado-1
            .row.justify-content-center.pt-lg-4(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Adaptación a pisos térmicos
                p.mb-0.me-lg-4 Las especies de pastos se adaptan a alturas desde los 0 m.s.n.m. hasta los 1.800 m.s.n.m. Por encima de los 1.800 metros, la producción se reduce por la menor radiación solar, lo que afecta la fotosíntesis, aunque algunas especies se adaptan bien.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/58.png",style="max-width: 419px;")
            .row.justify-content-center.pt-lg-4(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Requerimiento de agua
                p.mb-0.me-lg-4 Los pastos producen una gran biomasa, lo que implica un alto requerimiento de agua. Cuanto más cerca del nivel del mar, mayor es la necesidad de riego.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/59.png",style="max-width: 419px;")
            .row.justify-content-center.pt-lg-4(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Resistencia a plagas y sequías
                p.mb-0.me-lg-4 Algunas especies de pastos han sido mejoradas genéticamente para resistir plagas y sequías, considerándose rústicas, ya que no requieren nutrientes adicionales más allá de los que el suelo les proporciona.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/60.png",style="max-width: 419px;")
            .row.justify-content-center.pt-lg-4(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Adaptabilidad a suelos inundados
                p.mb-0.me-lg-4 Los pastos no se adaptan bien a suelos inundados, aunque son de alta extracción.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 419px;")
            .row.justify-content-center.pt-lg-4(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Pérdida de calidad durante la floración
                p.mb-0.me-lg-4 Los pastos pierden un 30% de su calidad nutricional al comenzar la floración debido a la lignificación, lo que reduce su digestibilidad.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/62.png",style="max-width: 419px;")
            .row.justify-content-center.pt-lg-4(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Etapa juvenil
                p.mb-0.me-lg-4 No deben cosecharse en la etapa juvenil, ya que esto puede causar problemas digestivos o intoxicación en el ganado.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/63.png",style="max-width: 419px;")
            .row.justify-content-center.pt-lg-4(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Forrajes y concentrados
                p.mb-0.me-lg-4 Ningún forraje cubre el 100% de los requerimientos nutricionales del ganado, pero tampoco se puede reemplazar completamente el forraje por concentrados.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 419px;")
    
    .fondo-personalizado-1.bottom-1.f6
      .fondo-personalizado-1__contenido
        .titulo-decorativo.my-5
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Leguminosas forrajeras
        
        .row.align-items-center.mb-5
          .col-lg-7
            p.mb-0(data-aos="fade") Las leguminosas forrajeras presentan diferentes tipos de crecimiento, entre ellas se encuentran plantas rastreras y trepadoras. Entre las especies trepadoras están el fríjol, las #[em semiarbustivas] como el gandul y la #[em crotalaria], mientras que entre las rastreras se encuentran el #[em kudzú] y el maní forrajero. Aunque el rendimiento de las leguminosas es tres o cuatro veces menor que el de las gramíneas, son especiales por su valor alimenticio, ya que contienen nitrógeno y minerales esenciales para los bovinos.
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="fade-right")
              img.mx-auto(src="@/assets/curso/temas/65.png",style="max-width: 505px;")
        
        TabsB.color-acento-contenido.tabs-p-1(data-aos="flip-up")
          .fondo-color-sistema-o.p-4.pt-5(titulo="Alfalfa " :icono="require('@/assets/curso/temas/67.svg')")
            .row.mb-4
              .col-12
                h4.mb-0 Alfalfa
            .row
              .col-lg-8
                p.mb-0 La alfalfa es una especie forrajera perenne de raíces profundas y se considera el cultivo forrajero más importante del mundo debido a su alta calidad nutricional para cualquier tipo de bovinos. Según la historia, fue la primera especie cultivada, difundida más tarde en el sur de Europa. La alfalfa requiere poca humedad, suelos drenados y alcalinos o moderadamente ácidos. No soporta climas húmedos, pero sí altas temperaturas. Para su cultivo, se deben seleccionar terrenos adecuados, ya que las raíces pueden alcanzar profundidades de 3 a 5 metros.
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/66.png",style="max-width: 295px;")
          .fondo-color-sistema-o.p-4.pt-5(titulo="Trébol blanco" :icono="require('@/assets/curso/temas/67.svg')")
            .row.mb-4
              .col-12
                h4.mb-0 Trébol blanco
            .row
              .col-lg-8
                p.mb-0 Esta leguminosa rastrera de flores blancas es recomendable para el pastoreo y es comúnmente usada en asociación con gramíneas, aunque también se emplea en la henificación. El trébol blanco crece en climas moderados con suelos fértiles y adecuada humedad. No se desarrolla bien en suelos pobres y secos, ya que esto detiene su crecimiento.
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 295px;")
          .fondo-color-sistema-o.p-4.pt-5(titulo="<em>Kudzú</em>" :icono="require('@/assets/curso/temas/67.svg')")
            .row.mb-4
              .col-12
                h4.mb-0 #[em Kudzú]
            .row
              .col-lg-8
                p.mb-0 El #[em kudzú] es una leguminosa trepadora que crece aproximadamente 5 metros y se desarrolla bien en zonas húmedas con una precipitación anual de 1.500 mm. Es un forraje rico en proteínas y minerales, y puede sembrarse en asociación con #[em andropogon]. Su buen contenido nutricional mejora la producción de carne y leche en bovinos.
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 295px;")
          .fondo-color-sistema-o.p-4.pt-5(titulo="Fríjol gandul" :icono="require('@/assets/curso/temas/67.svg')")
            .row.mb-4
              .col-12
                h4.mb-0 Fríjol gandul
            .row
              .col-lg-8
                p.mb-0 Es una planta arbustiva perenne que crece en temperaturas entre los 18 °C y los 30 °C. Se desarrolla en cualquier tipo de suelo, desde arenosos hasta arcillosos. Sus hojas contienen un 16 % de proteínas, lo que le otorga un gran valor nutricional para el ganado bovino de carne y leche.
              .col-lg-4
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/70.png",style="max-width: 295px;")

         
                


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
