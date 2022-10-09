export default {

    template: `
        <button 
            class="button-tag"
            @click="$emit('update:modelValue', tag)"
            v-for="tag in allTags"
            :class="{
                'red-text': tag == modelValue
            }"
            >{{ tag }}
        </button>
    `,

    props: {
        tags: Array,
        modelValue: String,
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        allTags() 
        {
            return ['all', ...new Set(this.tags)];
        }
    },

    methods: {
        changeTag() {
            this.$emit('change', tag)
        }
    }
}