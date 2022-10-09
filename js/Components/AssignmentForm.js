export default {
    template: `
        <form class='mt-5 col-6' @submit.prevent="addAssignment">
            <h2>Crear nueva tarea</h2>
            <input v-model="nuevaTarea" placeholder="Titulo de la nueva tarea" class="form-control" />
            <br />
            <input v-model="nuevoTag" placeholder="Tag de la nueva tarea" class="form-control" />
            <button class="btn btn-primary mt-3">Crear</button>
        </form>
    `,

    data() {
        return {
            nuevaTarea: "",
            nuevoTag: "",
        }
    },

    methods: {
        addAssignment() 
        {
            console.log("agregando... " + this.nuevaTarea);
            this.$emit('add', this.nuevaTarea, this.nuevoTag)
            this.nuevaTarea= '';
            this.nuevoTag= '';
            console.log("Listo");
        }
    }
}