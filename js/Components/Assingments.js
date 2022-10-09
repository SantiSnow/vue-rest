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
            assignments: [ ]
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.assignments = data;
            });
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
        add(name, tag) {
            this.assignments.push({
                id: this.assignments.length + 1,
                title: name,
                complete: false,
                tag: tag
            });

            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: this.assignments.length + 1,
                    title: name,
                    complete: false,
                    tag: tag
                }),
            }

            fetch("http://localhost:3001/assignments", options)
                .then((response) => response.text())
                .then(
                    (result) => {
                        console.log(result);
                    },
                    (error) => {
                        console.log(error);
                        return;
                    });
        }
    }
}