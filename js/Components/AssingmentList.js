import AssingmentItem from "./AssingmentItem.js";
import AssignmentTag from "./AssignmentTag.js";

export default {
    components: { AssingmentItem, AssignmentTag },

    template: `
        <section v-show="assignments.length" class="mb-5">
            <h2>{{ title }}:
                <span>({{ filteredTasks.length }})</span>
            </h2>

            <span>
                <assignmentTag
                    :tags="assignments.map(a => a.tag)"
                    v-model="currentTag"
                    ></assignmentTag>
            </span>

            <ul>
                <assingmentItem
                    v-for="assignment in filteredTasks"
                    :key="assignment.id"
                    :assignment="assignment">
                </assingmentItem>
            </ul>

        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        filteredTasks() 
        {
            if(this.currentTag=='all')
            {
                return this.assignments
            }
            return this.assignments.filter(i => i.tag == this.currentTag);
        },
    },
}