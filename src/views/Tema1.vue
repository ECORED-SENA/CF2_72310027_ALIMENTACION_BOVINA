<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Forrajes
    
    .fondo-personalizado-1.size-full.f2.mb-5
      .fondo-personalizado-1__contenido.pt-4
        .row.mb-5
          .col-lg-8(data-aos="fade-right")
            .row.mb-4
              .col-md-auto.d-none.d-lg-block
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 85px;")
              .col
                p.mb-0 Los forrajes componen la dieta básica de los rumiantes, entre los cuales están incluidas las gramíneas y leguminosas, plantas que se caracterizan por tener una masa vegetal con gran contenido de agua. Este tipo de alimentación es viable para los bovinos porque los nutre, además de ser económico para el productor, ya que muchos predios cuentan con pasturas nativas.
            p.mb-0 Los forrajes se pueden clasificar por su contenido de agua:
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 400px;")
        
        .fondo-personalizado-1.no-tam-full.f1
          .fondo-personalizado-1__contenido.px-4
            .row.justify-content-center
              .col-lg-4.col-md-9.pb-4.pb-lg-0(data-aos="fade-up")
                .fondo-color-sistema-k.p-4.text-center.borde-23.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 90px;")
                  h4.mb-0.text-white.fondo-color-sistema-l.d-inline-flex.mb-4.px-2 Forrajes verdes
                  p Pueden ser de pastoreo o de corte, y son aquellos que el animal consume cuando están en el punto de cosecha.
              .col-lg-4.col-md-9(data-aos="fade-down")
                .fondo-color-sistema-j.p-4.text-center.borde-23.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 90px;")
                  h4.mb-0.text-white.fondo-color-sistema-l.d-inline-flex.mb-4.px-2 Forrajes secos
                  p Son cortados y secados; son más conocidos como heno. En este grupo también están incluidos los cereales, leguminosas y los residuos de cosecha, como el tamo.
    
    p.mb-0(data-aos="fade") La forma más conocida de utilizar los forrajes es suministrarlos al animal picados o en pastoreo.

    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Criterios de clasificación de las plantas que son utilizadas como forrajes
    
    p.mb-5(data-aos="fade-left") Las plantas forrajeras se clasifican de la siguiente manera:

    .fondo-personalizado-1.f3
      .fondo-personalizado-1__contenido.pb-4
        .row
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 352px;")
          .col-lg-8(data-aos="fade-left")
            SlyderF.slider-personalizado-1(columnas="col-lg-6",data-aos="flip-up")
              .fondo-color-sistema-l.p-4.h-100.borde-18
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 90px;")
                .text-center.mb-4
                  h5.fondo-color-secundario.px-3.d-inline-flex.mb-0 Ciclo evolutivo
                p.text-white.mb-4 #[b Anuales:] crecen cada año. Ejemplos: maíz, cebada, avena, trigo, centeno, sorgo y especies como sudán, trébol y cebadilla criolla.
                p.text-white.mb-4 #[b Bienales:] crecen cada dos años. Ejemplo: meliloto blanco y trébol de color.
                p.text-white.mb-0 #[b Perennes:] duran más de dos años. Ejemplos: alfalfa, pasto azul, guinea y elefante.
              .fondo-color-sistema-l.p-4.h-100.borde-18
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/12.svg",style="max-width: 90px;")
                .text-center.mb-4
                  h5.fondo-color-secundario.px-3.d-inline-flex.mb-0 Naturaleza
                p.text-white.mb-4 #[b Naturales:] crecen de forma silvestre en las praderas y se conocen como autóctonas.
                p.text-white.mb-0 #[b Artificiales:] requieren intervención humana para su siembra, riego y fertilización. Ejemplos: alfalfa, #[em ray-grass] y trébol.
              .fondo-color-sistema-l.p-4.h-100.borde-18
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 90px;")
                .text-center.mb-4
                  h5.fondo-color-secundario.px-3.d-inline-flex.mb-0 Destino y uso
                p.text-white.mb-4 #[b Pastoreo:] el animal se lleva a un predio para que consuma los forrajes directamente del suelo.
                p.text-white.mb-0 #[b Pasto de corte:] se corta el pasto fresco, se ensila o henifica, y luego se suministra al animal.
              .fondo-color-sistema-l.p-4.h-100.borde-18
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 90px;")
                .text-center.mb-4
                  h5.fondo-color-secundario.px-3.d-inline-flex.mb-0 Época de crecimiento
                p.text-white.mb-4 #[b Estivales:] no resisten bajas temperaturas. Ejemplo: sorgos subtropicales.
                p.text-white.mb-0 #[b Invernales:] crecen a pesar de las bajas temperaturas. Ejemplo: cereales forrajeros.
              .fondo-color-sistema-l.p-4.h-100.borde-18
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 90px;")
                .text-center.mb-4
                  h5.fondo-color-secundario.px-3.d-inline-flex.mb-0 Composición química
                p.text-white.mb-4 #[b Completos:] tienen un balance adecuado de hidratos de carbono, grasas y proteínas. Ejemplo: alfalfa, con alto contenido proteico.
                p.text-white.mb-0 #[b Incompletos:] contienen menor cantidad de proteínas y sales. Ejemplo: gramíneas.
    
    .titulo-decorativo.mb-5(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Valor nutritivo de los forrajes
    
    .row.justify-content-center.align-items-center(data-aos="fade-down")
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 295px;")
      .col-lg-3.col-md-6
        .fondo-color-sistema-l.p-2.borde-30.mb-2
          .row.align-items-center
            .col-md-3.col-sm-3
              figure.mb-4.mb-sm-0
                img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 47px;")
            .col-md-9.col-sm-9
              p.mb-0.text-white.px-3.px-md-0 Composición química.
        .fondo-color-sistema-l.p-2.borde-30.mb-2
          .row.align-items-center
            .col-md-3.col-sm-3
              figure.mb-4.mb-sm-0
                img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 47px;")
            .col-md-9.col-sm-9
              p.mb-0.text-white.px-3.px-md-0 Digestibilidad.
        .fondo-color-sistema-l.p-2.borde-30
          .row.align-items-center
            .col-md-3.col-sm-3
              figure.mb-4.mb-sm-0
                img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 47px;")
            .col-md-9.col-sm-9
              p.mb-0.text-white.px-3.px-md-0 Palatabilidad.
    
    .fondo-personalizado-1.f3
      .fondo-personalizado-1__contenido.pb-1
        .titulo-decorativo.my-5(data-aos="fade")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Carbohidratos
        
        .row
          .col-lg-8
            .row.mb-4(data-aos="fade-up")
              .col-md-auto.d-none.d-lg-block
                figure.mb-4.mb-lg-0
                  img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
              .col
                p.mb-0 Estos compuestos se encuentran en grandes cantidades en las especies forrajeras. Los bovinos los sintetizan de manera diversa durante la digestión.
            
            .fondo-color-sistema-j.borde-11.mb-4(data-aos="fade-up")
              .row.align-items-center
                .col-md-auto
                  figure.pt-4.pt-md-0
                    img.mx-auto(src="@/assets/curso/temas/23.png",style="max-width: 190px;")
                .col
                  p.mb-0.p-3.ps-md-0 Por ejemplo, #[b los azúcares y ácidos orgánicos] son digeridos en un 100 % por los microorganismos ruminales. La digestibilidad de #[b los almidones y pectinas] solubles oscila entre un 80 % y un 100 %. Para la hemicelulosa, la digestibilidad varía entre un 20 % y un 60 %. Por esto, los carbohidratos aportan la mitad de la energía que requieren los rumiantes.
            
            p.mb-0(data-aos="fade-right") Los forrajes como las gramíneas contienen más azúcares que muchas leguminosas, debido a que crecen en climas templados. Ejemplo: el #[b fructosano] es un carbohidrato presente en las gramíneas de clima templado o frío, mientras que el almidón es el carbohidrato de reserva de las gramíneas tropicales.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 400px;")

    
    .titulo-decorativo.my-5(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Proteínas
    
    .row.mb-5(data-aos="fade-down")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
      .col
        p.mb-0 El contenido de proteínas en los forrajes es variado y cada proteína se comporta de manera diferente tanto en el rumen como en el intestino. Estas se clasifican según su estructura y forma de fermentación y absorción en el animal. A continuación se explican las diferentes fracciones:
    
    .fondo-personalizado-1.size-full.med.pos-bottom.f4.mb-4
      .fondo-personalizado-1__contenido.pb-4
        .row.justify-content-center(data-aos="flip-up")
          .col-lg-8.px-0.borde-31.overflow-hidden
            .row.mb-3
              .col-lg-4.pe-lg-0
                .fondo-color-secundario.p-4.py-3.h-100.align-content-center.text-center
                  p.texto-p-1.mb-0 Fracción A1
              .col-lg-8.ps-lg-0
                .fondo-color-sistema-j.p-4.h-100.align-content-center
                  p.mb-0 Incluye el nitrógeno no proteico soluble presente en la planta, como aminoácidos libres, pequeños péptidos y nitratos.
            .row.mb-3
              .col-lg-4.pe-lg-0
                .fondo-color-sistema-k.p-4.py-3.h-100.align-content-center.text-center
                  p.texto-p-1.mb-0 Fracción B1
              .col-lg-8.ps-lg-0
                .fondo-color-sistema-j.p-4.h-100.align-content-center
                  p.mb-0 Proteínas solubles que se fermentan casi en su totalidad en el rumen.
            .row.mb-3
              .col-lg-4.pe-lg-0
                .fondo-color-secundario.p-4.py-3.h-100.align-content-center.text-center
                  p.texto-p-1.mb-0 Fracción B2
              .col-lg-8.ps-lg-0
                .fondo-color-sistema-j.p-4.h-100.align-content-center
                  p.mb-0 Proteínas insolubles que no están ligadas a la fibra, con una tasa de degradación más lenta.
            .row.mb-3
              .col-lg-4.pe-lg-0
                .fondo-color-sistema-k.p-4.py-3.h-100.align-content-center.text-center
                  p.texto-p-1.mb-0 Fracción B3
              .col-lg-8.ps-lg-0
                .fondo-color-sistema-j.p-4.h-100.align-content-center
                  p.mb-0 Proteínas de la pared celular, degradables potencialmente en el rumen.
            .row
              .col-lg-4.pe-lg-0
                .fondo-color-secundario.p-4.py-3.h-100.align-content-center.text-center
                  p.texto-p-1.mb-0 Fracción C
              .col-lg-8.ps-lg-0
                .fondo-color-sistema-j.p-4.h-100.align-content-center
                  p.mb-0 Proteínas ligadas a la fibra, consideradas indigeribles.
        
        .titulo-decorativo.mt-5(data-aos="fade")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Minerales
    
    .row.align-items-center.mb-5
      .col-lg-8
        p.mb-4(data-aos="fade") Los forrajes contienen entre un 5 % y un 10 % de cenizas. En las gramíneas, los minerales están presentes cuando la planta alcanza su madurez, mientras que en las leguminosas se encuentran a lo largo de todo el ciclo del cultivo.
        p.mb-4(data-aos="fade-right") Los minerales presentes en los forrajes se dividen en macroelementos y microelementos:
        .fondo-color-sistema-n.borde-12.p-3(data-aos="fade-right")
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/26.svg",style="max-width: 65px;")
            .col
              p.mb-0 #[b Macroelementos:] en este grupo se encuentran el calcio, fósforo, potasio, magnesio, sodio, cloro, azufre y silíceo. Estos se explican a continuación:
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0(data-aos="fade-left")
          img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 400px;")
    
    .row.mb-5
      .col-lg-4(data-aos="fade-up")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 352px;")
      .col-lg-8(data-aos="fade-down")
        SlyderF.slider-personalizado-1(columnas="col-lg-6 py-4",data-aos="flip-up")
          .bg-white.p-4.h-100.borde-18.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/28.svg",style="max-width: 91px;")
            .text-center.mb-4
              h4.fondo-color-secundario.px-4.d-inline-flex.mb-0 Calcio
            p.text-center Se encuentra en forrajes entre 0,3% y 2,5%, más abundante en plantas jóvenes y leguminosas. Es esencial para la fijación de nitrógeno.
          .bg-white.p-4.h-100.borde-18.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/29.svg",style="max-width: 91px;")
            .text-center.mb-4
              h4.fondo-color-secundario.px-4.d-inline-flex.mb-0 Fósforo
            p.text-center Contenido entre 0,1% y 0,5% en hojas y tallos, favorece el desarrollo radicular y la supervivencia de la planta.
          .bg-white.p-4.h-100.borde-18.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/30.svg",style="max-width: 91px;")
            .text-center.mb-4
              h4.fondo-color-secundario.px-4.d-inline-flex.mb-0 Potasio
            p.text-center Se encuentra entre 1% y 4%, disminuyendo con la madurez de la planta. Mayor en leguminosas; su ingesta puede tener un efecto laxante.
          .bg-white.p-4.h-100.borde-18.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 91px;")
            .text-center.mb-4
              h4.fondo-color-secundario.px-4.d-inline-flex.mb-0 Magnesio
            p.text-center Varía entre 0,1% y 0,7% en forrajes. Deficiencia puede causar hipomagnesemia en rumiantes, clave para el metabolismo de carbohidratos.
          .bg-white.p-4.h-100.borde-18.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/32.svg",style="max-width: 91px;")
            .text-center.mb-4
              h4.fondo-color-secundario.px-4.d-inline-flex.mb-0 Sodio y Cloro
            p.text-center Presentes en forma de sales, pero en cantidades insuficientes para cubrir las necesidades de los bovinos.
          .bg-white.p-4.h-100.borde-18.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/33.svg",style="max-width: 91px;")
            .text-center.mb-4
              h4.fondo-color-secundario.px-4.d-inline-flex.mb-0 Azufre
            p.text-center Contenido entre 0,1% y 0,4%, utilizado por los microorganismos del rumen para sintetizar proteínas.
          .bg-white.p-4.h-100.borde-18.sombra-p-1
            figure.mb-4
              img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 91px;")
            .text-center.mb-4
              h4.fondo-color-secundario.px-4.d-inline-flex.mb-0 Silíceo
            p.text-center Absorbido por las raíces y acumulado en gramíneas, almacenado en la pared celular, lo que afecta la digestibilidad en los animales.
    
    .fondo-color-sistema-n.borde-12.p-3(data-aos="fade-down")
      .row.align-items-center
        .col-md-auto
          figure.mb-4.mb-md-0
            img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 65px;")
        .col
          p.mb-0 #[b Microelementos:] en este grupo se encuentran el cobre, manganeso, hierro, molibdeno, cobalto y yodo. Estos elementos son esenciales para el metabolismo de los animales. Los microelementos se encuentran en pequeñas cantidades en los forrajes.
    
    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Vitaminas
    
    .row.mb-5(data-aos="fade-right")
      .col-md-auto.d-none.d-lg-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 85px;")
      .col
        p.mb-0 Las vitaminas se encuentran en forma de carotenos en los forrajes. Estos se transforman en vitaminas dentro del organismo del animal, y son esenciales para su desarrollo y salud.
    
    .fondo-personalizado-1.size-full.med.pos-bottom.f4
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center
          .col-lg-8
            figure.mb-4.mb-lg-0(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 820px;")
        
        .titulo-decorativo.my-5(data-aos="fade")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Modelos de suministro de forraje
        
        .row.align-items-center
          .col-lg-8
            p.mb-0(data-aos="fade-down") El forraje, compuesto por #[b pastos, heno y raíces], es el alimento principal del ganado bovino y es fundamental para la rentabilidad en la producción de carne y leche. Un suministro constante de forraje de alta calidad asegura una base sólida para mantener un hato saludable. La importancia del forraje hace necesario planificar su producción adecuadamente, de acuerdo con la capacidad de la finca y los requerimientos nutricionales del ganado.
          .col-lg-4
            figure.mb-4.mb-lg-0(data-aos="fade-up")
              img.mx-auto(src="@/assets/curso/temas/37.png",style="max-width: 400px;")
    
    .fondo-personalizado-1.size-full.pos-bottom.f5
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center
          .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
            .fondo-color-sistema-o.borde-17.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/38.png")
              .p-4
                .text-center
                  h4.fondo-color-secundario.d-inline-flex.px-3.mb-5 Bancos forrajeros
                p Son áreas dedicadas a la siembra de forrajes de alta calidad, que se cosechan y conservan para ser usados en épocas críticas, mejorando la nutrición del ganado cuando la producción de la finca disminuye. Aunque requieren inversión, evitan pérdidas económicas por baja productividad.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
            .fondo-color-sistema-o.borde-17.h-100
              figure
                img.mx-auto(src="@/assets/curso/temas/39.png")
              .p-4
                .text-center
                  h4.fondo-color-secundario.d-inline-flex.px-3.mb-5 Forraje de flujo
                p Se refiere a la planificación del suministro mensual de forraje en la finca, buscando igualar la oferta con el consumo del ganado. Estrategias como el sacrificio estratégico o la planificación de partos ayudan a equilibrar la demanda.

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
