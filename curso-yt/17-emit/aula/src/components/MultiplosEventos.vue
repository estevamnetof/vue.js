<template>
    <div>
        <button @click="primeiro($event), segundo(txt2, $event), terceiro()">Ativar múltiplos eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MultiplosEventos',
        // Dados do componente
        data() {
            return {
                multiplos_eventos: '',
                // Um texto que será usado como argumento para o método 'segundo'
                txt2: 'Segundo evento!'
            }
        },
        // Métodos do componente
        methods: {
            // Método chamado ao clicar no botão
            primeiro(e) {
                this.multiplos_eventos = "Primeiro evento ativado!"
            },
            // Método chamado ao clicar no botão
            segundo(txt, e) {
                // Define um atraso de 500ms antes de atualizar 'multiplos_eventos'
                setTimeout(() => {
                    this.multiplos_eventos = txt; // Define 'multiplos_eventos' com o valor do argumento 'txt'
                }, 500) // Atraso de 500 milissegundos
            },
            // Método chamado ao clicar no botão
            terceiro() {
                // Define um atraso de 1500ms antes de limpar 'multiplos_eventos'
                setTimeout(() => {
                    this.multiplos_eventos = ''; // Limpa o valor de 'multiplos_eventos'
                }, 1500) // Atraso de 1500 milissegundos (1,5 segundos)
            }
        }
    }
</script>
<style scoped>
    div {
        margin: 100px;
    }
</style>