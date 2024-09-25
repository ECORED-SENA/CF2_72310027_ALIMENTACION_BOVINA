<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4
      .col-lg-8
        .row.mb-4(data-aos="fade-up")
          .col-md-auto.d-none.d-lg-block
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
          .col
            p.mb-0 Los forrajes son la base fundamental en la alimentación de los rumiantes, como bovinos y ovinos, y están compuestos principalmente por pastos y leguminosas. Estos recursos naturales no solo aportan nutrientes esenciales, sino que también son una opción económica y accesible para los productores ganaderos. Su correcta utilización permite mejorar la productividad del ganado y proteger los suelos de erosiones.

        .fondo-color-sistema-j.borde-14
          .row.align-items-center(data-aos="zoom-in-out")
            .col-md-auto
              figure.pt-4.pt-md-0
                img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 190px;")
            .col
              p.mb-0.p-4.ps-md-0 La clasificación de los forrajes se basa en factores como el contenido de agua, el ciclo de crecimiento y su composición nutricional. Los pastos pueden ser verdes o secos, mientras que las leguminosas complementan la dieta con su alto contenido en proteínas. Un manejo adecuado de estos forrajes, según las características del terreno y el clima, es esencial para mantener una producción eficiente.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 400px;")
    
    .row.align-items-center(data-aos="fade-right")
      .col-md-auto
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/4.svg",style="max-width: 85px;")
      .col
        p.mb-0 El aforo de pastos, por su parte, es una técnica crucial para estimar la cantidad de forraje disponible en una pradera. A través de esta medición, los productores pueden planificar el pastoreo y gestionar mejor los recursos, evitando el sobrepastoreo y asegurando la sostenibilidad de sus fincas.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
