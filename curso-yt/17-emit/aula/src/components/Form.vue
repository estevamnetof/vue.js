<template>
    <div>
        <h2>Meu formulário</h2>
          <!-- Este formulário chama o método 'enviarFormulario' quando é enviado -->
        <form action="" @submit="enviarFormulario($event)">
            <div>
            <!-- O 'v-model' cria uma ligação entre o campo de entrada e a propriedade 'name'.
            Isso significa que qualquer valor inserido aqui será atribuído a 'name'. -->
                <input type="text" :v-model="name" placeholder="Nome">
            </div>
            <div>
            <!-- O 'v-model' conecta este campo de entrada à propriedade 'email'.
            Assim, quando o usuário digita algo, a propriedade 'email' é atualizada. -->
                <input type="text" :v-model="email" placeholder="Email">
            </div>
            <div>
                <Submit />
            </div>
        </form>
    </div>
</template>

<script>
    import InputText from './form/InputText.vue'
    import Submit from './form/Submit.vue'

    export default {
        name: 'Form',
        components: {
            InputText,
            Submit
        },
        data() {
            return {
                name: "", // Armazena o valor do campo 'name'
                email: "" // Armazena o valor do campo 'email'
            }
        },
        methods: {
            enviarFormulario(e) {
                e.preventDefault()
                const name = this.name
                const email = this.email

                console.log('Formulário enviado!')
                console.log('O nome é: ' + name)
                console.log('O email é: ' + email)

                // Ajax

                // Inserir no banco de dados
            }
        }
    }
</script>