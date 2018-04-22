<template>
<div class="card mt-5">
  <div class="card-header">
    Communications by contact {{ contactId }}
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>
              Type
            </th>
            <th>
              Origin
            </th>
            <th>
              Destiny
            </th>
            <th>
              Incoming
            </th>
            <th>
              Datetime
            </th>
            <th>
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="communication in filteredCommunications">
              <td v-if="communication.type == 'C'">
                Call
              </td>
              <td v-else>
                SMS
              </td>
              <td>
                {{communication.origin}}
              </td>
              <td>
                {{communication.destiny}}
              </td>
              <td>
                {{communication.incoming}}
              </td>
              <td>
                {{communication.datetime}}
              </td>
              <td>
                {{communication.duration}}
              </td>
          </tr>

        </tbody>
      </table>
      <p>{{ filteredCommunications.length }} items</p>
      <router-link :to="'/'" class="btn btn-primary"> Back </router-link>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Communications',
  data () {
    return {
    	type:'',
    	origin: '',
    	destiny: '',
      incoming: '',
      contact: '',
      datetime: '',
      duration: '',
      communications: [],
      contactId: this.$route.params.id,
    }
  },
  mounted() {
    axios({ method: "GET", "url": this.$hostname + "/communications/611222333" })
      .then(result => {
        this.communications = result.data.communications;
    }, error => {
        console.error(error);
    });
  },
  computed: {
    filteredCommunications() {
      return this.communications.filter(item => {
         return item.contact == this.contactId;
      })
    },
  },
  beforeCreate () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>
