export default {
    template: `
        <li>
            <label>
                {{ assignment.title }}
                <input type="checkbox" v-model="assignment.complete" />
            </label>
        </li>
    `,

    props: {
        assignment: Object,
    }
}