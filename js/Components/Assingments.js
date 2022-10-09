import AssingmentList from "./AssingmentList.js";
import AssignmentForm from "./AssignmentForm.js";

export default {
    components: { AssingmentList, AssignmentForm },
    template: `

        <section>
            <assingmentList
                :assignments="getInProgressAssignments"
                title="Tareas pendientes">
            </assingmentList>

            <assingmentList
                :assignments="getCompletedAssignments"
                title="Tareas completadas">
            </assingmentList>

            <assignmentForm @add="add"></assignmentForm>
        </section>

    
    `,

    data() {
        return {
            assignments: [
                {id: 1, title: "Learn PHP", complete: true},
                {id: 2, title: "Learn JavaScript", complete: true},
                {id: 3, title: "Learn Laravel", complete: true},
                {id: 4, title: "Learn Vue.js", complete: false},
                {id: 5, title: "Learn Inertia.js", complete: false},
            ]
        }
    },

    computed: {
        getInProgressAssignments() 
        {
            return this.assignments.filter(assignment => !assignment.complete);
        },

        getCompletedAssignments() 
        {
            return this.assignments.filter(assignment =>  assignment.complete);
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                title: name,
                complete: false,
            });
        }
    }
}