export default {
    template: `
        <form class='mt-5 col-6' @submit.prevent="addAssignment">
            <h2>Crear nueva tarea</h2>
            <input v-model="nuevaTarea"  placeholder="Titulo de la nueva tarea" class="form-control" />

            <button class="btn btn-primary mt-3">Crear</button>
        </form>
    `,

    data() {
        return {
            nuevaTarea: "",
        }
    },

    methods: {
        addAssignment() 
        {
            console.log("agregando... " + this.nuevaTarea);
            this.$emit('add', this.nuevaTarea)
            this.nuevaTarea= '';
            console.log("Listo");
        }
    }
}