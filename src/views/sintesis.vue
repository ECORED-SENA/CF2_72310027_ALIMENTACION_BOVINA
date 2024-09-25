<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.borde-20.p-4.p-md-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis sobre la importancia del forraje en la producción bovina. Se centra en el suministro del forraje, constituido por pastos, heno y raíces. Además, muestra cómo el tipo de pasto utilizado en el proceso de producción es determinado por factores climáticos, del terreno y de manejo, donde se destacan las especies adaptativas y la selección de especies forrajeras según los aportes nutricionales de cada especie. También se mencionan los métodos de aforo de pradera y los beneficios asociados a este procedimiento.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
