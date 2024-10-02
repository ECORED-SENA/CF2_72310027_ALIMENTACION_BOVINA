<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Aforo de pastos
    
    .row
      .col-lg-8
        .row.mb-4(data-aos="fade-right")
          .col-md-auto.d-none.d-lg-block
            figure
              img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
          .col
            p.mb-0 El aforo es una técnica utilizada para calcular la cantidad total de pasto producida en una pradera. Para realizar este procedimiento, se utiliza un metro cuadrado, y se toman entre 3 y 15 muestras, dependiendo de lo que requiera el aforo. Es importante considerar los niveles de crecimiento del pasto (alto, medio y bajo) antes de cortar el pasto dentro del área donde se realiza el aforo. Posteriormente, el material recolectado se pesa y se divide entre la cantidad de muestras tomadas.
        .fondo-color-sistema-j.borde-14(data-aos="fade-left")
          .row.align-items-center
            .col-md-auto
              figure
                img.mx-auto(src="@/assets/curso/temas/72.svg",style="max-width: 190px;")
            .col
              p.mb-0.p-4.ps-md-0.py-md-3 El aforo no es una medición exacta, sino un muestreo que se realiza en una zona determinada. Esta técnica permite estimar la producción total de forraje para la alimentación animal. Para determinar la cantidad de pasto en un área, se han empleado varios métodos que comparten ciertos parámetros, pero difieren en el procedimiento de campo.
      .col-lg-4.order-first.order-lg-last(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/71.png",style="max-width: 400px;")
    
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1 Métodos de aforo por doble muestreo
    
    .row.mb-5.align-items-center(data-aos="fade-down")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
      .col
        p.mb-0 Este es el método más común y consiste en tomar tres o más submuestras en diferentes puntos del área a analizar, haciéndolo visualmente y teniendo en cuenta el crecimiento del pasto (alto, medio y bajo). Para realizar el muestreo en terreno bajo el método común, se debe seguir el siguiente procedimiento:
    
    .bloque-texto-g.fondo-color-sistema-l.p-3.p-sm-4.p-md-5.bloque-texto-p-1.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/73.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul
          li
            .d-flex.align-items-start.mb-4
              img.me-2.mt-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
              span Construir un marco de un metro cuadrado (1 m x 1 m). Para esto, se recomienda comprar un tubo de PVC de media pulgada, partirlo en cuatro pedazos de un metro y formar un cuadrado. También se necesita una báscula y un objeto para cortar, como un machete, cuchillo o tijeras de jardinería.
          li
            .d-flex.align-items-start.mb-4
              img.me-2.mt-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
              span Colocar el marco en el área donde está el pasto, abarcando aproximadamente dos surcos. Cortar el pasto dentro del cuadrado.
          li
            .d-flex.align-items-start.mb-0
              img.me-2.mt-2(src="@/assets/curso/temas/55.svg",style="max-width: 16px;")
              span Pesar cada muestra, sumar los pesos y dividir por la cantidad de muestras tomadas.
    
    .row.align-items-center(data-aos="fade-down")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
      .col
        p.mb-0 Este procedimiento debe repetirse para cada especie de pasto, a partir de los 15 días después de la cosecha, y continuar haciéndolo cada 10 días. Con los datos recolectados, se elabora un gráfico, colocando el peso en kilogramos del aforo en el eje Y y el día en que se realizó la muestra en el eje X, para determinar la curva de crecimiento de cada especie de pasto. Cuantas más submuestras se tomen, más preciso será el promedio.
    
    .titulo-decorativo.my-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Ejemplo de aforo
    
    .row.mb-5
      .col-lg-8
        .row.mb-4(data-aos="fade-right")
          .col-md-auto.d-none.d-lg-block
            figure
              img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 85px;")
          .col
            p.mb-0 Supongamos que quien realiza el aforo clasifica el pasto en dos alturas de crecimiento: pasto alto y pasto bajo. Si observa que predomina el pasto bajo, otorgándole una calificación del 90 %, y al pasto alto un 10 %, esto implica que el pasto alto representa solo el 10 % de la población, mientras que el 90 % restante es pasto bajo. El evaluador toma 10 muestras, obteniendo los siguientes resultados: 1.0, 1.3, 1.0, 1.1, 1.1, 1.2, 1.5, 1.5, 4.5, 5.0. Para ponderarlos, se ordenan de la siguiente manera:
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/74.png",style="max-width: 400px;")
    
    .fondo-personalizado-1.f6
      .fondo-personalizado-1__contenido.pt-5.pb-5
        .row.justify-content-center
          .col-lg-7
            .titulo-sexto.color-acento-contenido(data-aos="fade")
              p.mb-0 #[b Tabla 2.] Submuestras de un aforo clasificadas por pesos y cantidad por cada categoría
            
            .row(data-aos="flip-up")
              .col-lg-11
                .tabla-a.color-acento-contenido.bg-white.tabla-p-1
                  table
                    thead
                      tr
                        th Aforo (kg/m²)
                        th Submuestras
                        th Valor total
                    tbody
                      tr
                        td 1.0
                        td 2
                        td 2.0
                      tr
                        td 1.1
                        td 2
                        td 2.2
                      tr
                        td 1.2
                        td 1
                        td 1.2
                      tr
                        td 1.3
                        td 1
                        td 1.3
                      tr
                        td 1.5
                        td 2
                        td 3.0
                      tr
                        td P. ponderado
                        td 8
                        td 9.7
                      tr
                        td 4.5
                        td 1
                        td 4.5
                      tr
                        td 5.0
                        td 1
                        td 5.0
                      tr
                        td P. ponderado
                        td 2
                        td 9.5

    .row.mb-5.align-items-center(data-aos="fade-down")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
      .col
        p.mb-0 De esta tabla podemos deducir lo siguiente:

    .row.align-items-center.mb-5(data-aos="zoom-in-out")
      .col-lg-1
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/75.png",style="max-width: 400px;")
      .col-lg-5
        .fondo-color-sistema-o.p-4.borde-6.mb-2
          .d-flex
            .fas.fa-circle.c-color-acento-contenido.me-2
            p.mb-0 Se tienen 8 submuestras con un peso total de 9.7 kg, representando el 90 % de la población.
        .fondo-color-sistema-j.p-4.borde-6.mb-2
          .d-flex
            .fas.fa-circle.c-color-acento-contenido.me-2
            p.mb-0 El promedio ponderado de estas submuestras es: 9.7 kg ÷ 8 submuestras = 1.2125  kg × 90 % = 1.091  kg.
        .fondo-color-sistema-o.p-4.borde-6.mb-2
          .d-flex
            .fas.fa-circle.c-color-acento-contenido.me-2
            p.mb-0 También hay 2 submuestras con un peso total de 9.5 kg, representando el 10 % de la población. El promedio ponderado de estas submuestras es: 9.5 kg ÷ 2 submuestras = 4.75 kg × 10 % = 0.475 kg.
        .fondo-color-sistema-j.p-4.borde-6.mb-2
          .d-flex
            .fas.fa-circle.c-color-acento-contenido.me-2
            p.mb-0 El aforo promedio ponderado de la población es: 1.091 + 0.475 = 1.566  kg.

    .row.mb-5.align-items-center(data-aos="fade-down")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/76.svg",style="max-width: 85px;")
      .col
        p.mb-0 Este valor refleja una medida más representativa de la producción del potrero, con una diferencia de apenas 66 gramos respecto al valor más alto del pasto de crecimiento bajo. Aunque en áreas más grandes esta diferencia puede ser significativa, sigue siendo un resultado mucho más preciso de la producción total de la pastura.

    .row.justify-content-center
      .col-lg-8
        .fondo-color-sistema-j.borde-11.mb-4(data-aos="fade-up")
          .row.align-items-center
            .col-md-auto
              figure.pt-4.pt-md-0
                img.mx-auto(src="@/assets/curso/temas/77.png",style="max-width: 190px;")
            .col
              p.mb-0.p-3.ps-md-0 Cuanto mayor sea el número de submuestras obtenidas en el área, mayor será la precisión del aforo. Además, es recomendable aplicar un promedio ponderado en lugar de un promedio aritmético, utilizando una escala cualitativa de las alturas del pasto para obtener un resultado más representativo de la producción total del predio.
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Método de zigzag o aforo en Z para recorrido del lote
    
    .bloque-texto-g.fondo-color-sistema-l.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/78.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este método es similar al que se utiliza para tomar muestras de suelo. Consiste en hacer entre 15 y 20 submuestras en un área de 1 m² por cada 10 hectáreas de pasto, recorriendo el terreno en forma de zigzag o Z. Los puntos donde se toman las muestras deben ubicarse de manera aleatoria para que la muestra sea representativa. Luego, las submuestras se pesan y se dividen por el número de submuestras para obtener el promedio en kg/m².
    
    Separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Método en X o en cruz para el recorrido del lote
    
    .fondo-personalizado-1.top-3.f6
      .fondo-personalizado-1__contenido.pb-5
        .bloque-texto-g.fondo-color-sistema-l.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/79.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Este método consiste en recorrer el terreno en forma de X, tomando submuestras cada cinco pasos, colocando el marco de 1 m², y cortando todo el pasto dentro del marco. Posteriormente, se suman todas las submuestras y se divide entre el total para obtener el promedio aritmético en kg/m².

        .row.mb-5.align-items-center(data-aos="fade-down")
          .col-md-auto.d-none.d-lg-block
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
          .col
            p.mb-0 ¿Por qué se debe realizar un aforo en un potrero?
    
        .row
          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/80.png",style="max-width: 352px;")
          .col-lg-8
            SlyderF.slider-personalizado-1(columnas="col-lg-6 py-4",data-aos="flip-up")
              .borde-14.bg-white.sombra-p-1.h-100
                figure
                  img.mx-auto(src="@/assets/curso/temas/81.png")
                p.p-4.pb-5.text-center La razón más importante es determinar la cantidad de pasto disponible por lote y planificar de manera eficaz el pastoreo.
              .borde-14.bg-white.sombra-p-1.h-100
                figure
                  img.mx-auto(src="@/assets/curso/temas/82.png")
                p.p-4.pb-5.text-center Este método es útil para hacer un pastoreo continuo, rotando lotes.
              .borde-14.bg-white.sombra-p-1.h-100
                figure
                  img.mx-auto(src="@/assets/curso/temas/83.png")
                p.p-4.pb-5.text-center Ayuda a controlar la cantidad de pasto disponible, evitando el agotamiento de este recurso en las zonas de pastoreo.
              .borde-14.bg-white.sombra-p-1.h-100
                figure
                  img.mx-auto(src="@/assets/curso/temas/84.png")
                p.p-4.pb-5.text-center Al determinar la cantidad de pasto producida por hectárea, se puede calcular la carga animal óptima para el terreno.

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
