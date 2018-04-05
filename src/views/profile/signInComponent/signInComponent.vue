<script lang="ts">
  import { Vue, Component, Prop } from "vue-property-decorator";
  const template = require('./signInComponent.html')

  @Component({
    template: template
  })
  export default class signInComponent extends Vue {
    
  }
</script>

<style lang="scss">
  @import "src/styles/variables","src/styles/mixins";
  @import "./signInComponent.scss";
</style>