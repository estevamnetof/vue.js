<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>Python</li>
    </ul>
    <div>
      <button @click="showEmail">Mostrar e-mail</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: estevam@email.com</p>
    <p>Para acessar meu portfólio <a v-bind:href="url_portfolio">basta clicar aqui</a></p>
    <Picture />
  </div>
</template>
<script>
import Picture from './Picture'

export default {
  name: 'Info',
  components: {
    Picture
  },
  data() {
    return { 
      esta_trabalhando: false,
      mostrar_email: false,
      url_portfolio: "https://www.google.com"
    }
  },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email
    }
  }
}
</script>