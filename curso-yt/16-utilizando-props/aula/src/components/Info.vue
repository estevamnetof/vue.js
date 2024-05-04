<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>utilizo as seguintes tecnologias para back-end:</p>
        <ul>
            <!-- Laço para cada tecnologia no array backend_technologies -->
            <!-- Usa-se (technology, index) para ter acesso ao item e ao índice -->
            <!-- Atribui uma chave para cada item para otimização do Vue -->
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">
                <!-- Exibe o nome da tecnologia -->
                {{ technology }}
            </li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end</p>
        <ul>
            <!-- Laço para cada item no array frontend_technologies -->
            <!-- Atribui-se a chave com base no ID único de cada objeto -->
            <li v-for="technology in frontend_technologies" :key="technology.id">
                <!-- Exibe a propriedade 'language' do objeto 'technology' -->
                {{ technology.language }}
            </li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">Basta clicar aqui</a></p>
        <Picture />
    </div>
</template>

<script>
    import Picture from './Picture.vue'

    export default {
        name: 'Info',
        components: {
            Picture
        },
        props: {
            email: String,
            esta_trabalhando: Boolean
        },
        data() {
            return {
                mostrar_email: false,
                meu_link: 'https://google.com',
                textoBotao: 'Mostrar e-mail',
                backend_technologies: ['JavaScript', 'PHP', 'Python'],
                frontend_technologies: [
                    {id: 1, language: 'HTML'},
                    {id: 2, language: 'CSS'},
                    {id: 3, language: 'Vue'},
                ]
            }
        },
        methods: {
            showEmail() {
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email) {
                    this.textoBotao = 'Mostrar e-mail'
                } else {
                    this.textoBotao = 'Esconder e-mail'
                }
            }
        }
    }
</script>

<style>
    .paragrafo-pai {
        background-color: red;
    }
</style>