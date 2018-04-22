<template>
    <div class="card mt-5">
      <div class="card-header">
        My Contacts
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  Id
                </th>
                <th>
                  Name
                </th>
                <th>
                  Records
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td><input v-model="editContactData.id" type="number"></td>
                  <td><input v-model="editContactData.name" type="text"></td>
              </tr>
              <tr v-for="contact in filterContacts" v-bind:key="contact.id">
                  <td>
                    {{contact.id}}
                  </td>
                  <td>
                    {{contact.name}}
                  </td>
                  <td>
                    <router-link
                    :to="{
                      name:'Communications',
                      params:{id: contact.id}
                    }"
                    class="icon">
                    <i class="fa fa-eye"></i>
                    </router-link>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Contacts',
  data () {
    return {
      contactData: {
        'id' : '',
        'name': '',
      },
      editContactData: {
        'id' : null,
        'name': '',
      },
      contacts: [],
    }
  },
  mounted() {
    axios({ method: "GET", "url": this.$hostname + "/contacts/611222333" })
      .then(result => {
        this.contacts = result.data.contacts;
    }, error => {
        console.error(error);
    });
  },
  created() {
    // this.getContacts()
  },
  computed: {
    filterContacts(){
      return this.contacts
      .filter(item =>(item.name.toLowerCase().indexOf(this.editContactData.name.toLowerCase()) > -1))
      .filter(item =>(item.id == this.editContactData.id || !this.editContactData.id));
    },
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
.icon{
  margin-right: 10px;
}
.icon i{
  cursor: pointer;
}
</style>
