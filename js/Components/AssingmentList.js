import AssingmentItem from "./AssingmentItem.js";

export default {
    components: { AssingmentItem },

    template: `
        <section v-show="assignments.length" class="mb-5">
            <h2>{{ title }}:</h2>

            <ul>
                <assingmentItem
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment">
                </assingmentItem>
            </ul>

        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    }
}