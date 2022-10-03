let app = Vue.createApp({
    data: function() {
        return {
            title: "Elite Conditioning",
            showPassword: false,
            password: null,
            accountTitle: "Login"

        }
    },
    computed: {
        buttonLabel() {
            return (this.showPassword) ? "Hide" : "Show";
        }
    },
    methods: {
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        say(message) {
            alert(message)
        },

    }
})

app.component('account-form', {
    template: `
        <form>
            <h1> {{title}}</h1>
            <custom-input 
                v-for="(input, i) in inputs"
                :key="i"
                v-model="input.value" 
                :label="input.label"
                :type="input.type"
                :placeholder="input.placeholder"
            />
            <button type=button onclick="window.location.href='EC.html'".style.display='block'style="width:100%;">Create Account</button>
            </form>

    `,
    //registering custom-input component so account-form component can use it
    components: ['custom-input'],
    data() {
        return {
            title: 'Create Account',
            inputs: [
                {
                    label: 'Username',
                    value: '',
                    type: 'text',
                    placeholder: 'Enter Username...'
                },
                {
                    label: 'Email',
                    value: '',
                    type: 'email',
                    placeholder: 'Enter Email...'
                },
                {
                    label: 'Password',
                    value: '',
                    type: 'password',
                    placeholder: 'Enter Password...'
                },
                {
                    label: 'Re-Enter Password',
                    value: '',
                    type: 'password',
                    placeholder: 'Re-Enter Password...'
                }
            ],
        }
    },
})
app.component('custom-input', {
    template: `
        <label>
            {{ label }}
            <input :type="type" :placeholder="placeholder" v-model="inputValue">
        </label>
    `,
    props: ['label', 'type','modelValue', 'placeholder'  ],
    computed: {
        inputValue: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
})




app.mount('#app')





