import {Component, Vue} from 'vue-property-decorator';

@Component
export default class App extends Vue {
    protected created() {
        console.log('STOVE Front Study...');
    }
}
