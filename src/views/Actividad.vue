<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Forrajes y aforos de pradera',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los forrajes, su clasificación, manejo, valor nutritivo y las técnicas de aforo, con el fin de reforzar el conocimiento sobre la importancia de estos recursos en la producción ganadera.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal de los forrajes en la alimentación animal?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nutrir a los rumiantes con nutrientes esenciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proporcionar una dieta económica y accesible.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Proteger los suelos de erosiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Favorecer el crecimiento de las gramíneas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cómo se clasifican los forrajes según su contenido de agua?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Forrajes anuales y bienales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Forrajes verdes y secos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Forrajes naturales y artificiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Forrajes estivales e invernales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué caracteriza a los pastos mejorados o introducidos?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crecen de forma natural en praderas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tienen un mayor crecimiento y responden bien a fertilizantes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Son de baja productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requieren intervención humana.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es el principal valor nutritivo de la alfalfa?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bajo contenido de proteínas y sales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alto contenido en proteínas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rica en carbohidratos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Escaso contenido de nitrógeno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué técnica se utiliza para medir la cantidad de pasto disponible en una pradera?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Método de zig-zag.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Método en X o en cruz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aforo de pastos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Corte de forraje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el mejor tipo de pasto para terrenos fértiles?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Guinea y marandú.</em>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<em>Brachiaria humidicola.</em>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Setaria kazungula.</em>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<em>Pasto imperial.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la desventaja de cosechar los pastos durante la floración?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta la palatabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pierden un 30% de su valor nutricional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejora la digestibilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumenta la producción de forraje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de leguminosa es recomendada para climas moderados con suelos fértiles?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Kudzú.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Trébol blanco.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fríjol gandul.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alfalfa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué característica tienen los pastos rústicos?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Requieren abundante fertilización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crecen solo en suelos fértiles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No necesitan aportes adicionales de nutrientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La rotación de cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué factor es clave para la fotosíntesis en los pastos?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de riego.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La calidad del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La intensidad de la luz solar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La rotación de cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
