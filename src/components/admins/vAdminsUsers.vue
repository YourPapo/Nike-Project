<template>
  <div class="show-users animate-fade">
    <h2>All users</h2>
    <div class="cards">
      <div class="card" v-for="user in users" :key="user.id">
        <p><span>email:</span> {{ user.email }}</p>
        <p><span>role:</span> {{ user.role }}</p>
        <div class="actions">
          <button @click="makeAdmin(user)" v-if="user.role !== 'admin'">
            Make Admin
          </button>
          <button @click="removeAdmin(user)" v-if="user.role === 'admin'">
            Remove Admin
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./styles/AdminsUsers.scss";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapActions(["fetchUsers", "updateUser"]),
    makeAdmin(user) {
      user.role = "admin";
      this.updateUser(user).then(() => {
        this.fetchUsers();
      });
    },
    removeAdmin(user) {
      user.role = "user";
      this.updateUser(user).then(() => {
        this.fetchUsers();
      });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
