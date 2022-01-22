<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      prd_code: this.$route.params.productCode,
    }
  },
  computed: {
    ...mapGetters({
      get_productwithcode: 'get_productwithcode',
    }),
  },
  methods: {
    get_product() {
      return this.get_productwithcode(this.prd_code)
    },
    ...mapActions({
      addToCart: 'addToCart',
    }),
  },
}
</script>