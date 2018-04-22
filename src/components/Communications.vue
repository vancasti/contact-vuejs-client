<template>
<div class="card mt-5">
  <div class="card-header">
    Communications by contact {{ contactId }}
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>
              Type
              <span class="fa fa-sort" v-on:click="sortBy('type')"/>
            </th>
            <th>
              Origin
              <span class="fa fa-sort" v-on:click="sortBy('origin')"/>
            </th>
            <th>
              Destiny
              <span class="fa fa-sort" v-on:click="sortBy('destiny')"/>
            </th>
            <th>
              Incoming
              <span class="fa fa-sort" v-on:click="sortBy('incoming')"/>
            </th>
            <th>
              Datetime
              <span class="fa fa-sort" v-on:click="sortBy('datetime')"/>
            </th>
            <th>
              Duration
              <span class="fa fa-sort" v-on:click="sortBy('duration')"/>
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
import axios from 'axios';
import {_} from 'vue-underscore';;
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
      sortKey: ['type'],
      sortOrder: ['asc']
    }
  },
  mounted() {
    axios({ method: 'GET', 'url': this.$hostname + '/communications/611222333' })
      .then(result => {
        this.communications = result.data.communications;
    }, error => {
        console.error(error);
    });
  },
  computed: {
    filteredCommunications() {
      this.filteredData = this.communications.filter(item => {
         return item.contact == this.contactId;
      });
      this.sortedData = _.sortBy(this.filteredData, this.sortKey);
      return (this.sortOrder === 'asc') ? this.sortedData : this.sortedData.reverse();
    },
  },
  methods: {
    sortBy: function(key) {
        if (key == this.sortKey) {
            this.sortOrder = (this.sortOrder == 'asc') ? 'desc' : 'asc';
        } else {
            this.sortKey = key;
            this.sortOrder = 'asc';
        }
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
