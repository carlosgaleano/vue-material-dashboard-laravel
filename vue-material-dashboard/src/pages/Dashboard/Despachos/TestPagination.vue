<template>


  <div>
    {{users}}
    <md-table v-model="paginatedUsers" md-card md-sort="name" md-sort-order="asc">
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Job Title">{{ item.title }}</md-table-cell>
      </md-table-row>

      <md-table-pagination
        :md-page-size="2"
        :md-page-options="[1,2,3,4,5,6]"
        :md-update="updatePagination"
        :md-data="users"
        :md-paginated-data.sync="paginatedUsers" />
    </md-table>
  </div>
</template>

<script>
  export default {
    name: 'TablePagination',
    data: () => ({
      users: [
        {
          id: 1,
          name: "Shawna Dubbin",
          email: "sdubbin0@geocities.com",
          gender: "Male",
          title: "Assistant Media Planner"
        },
        {
          id: 2,
          name: "Odette Demageard",
          email: "odemageard1@spotify.com",
          gender: "Female",
          title: "Account Coordinator"
        },
        {
          id: 3,
          name: "Vera Taleworth",
          email: "vtaleworth2@google.ca",
          gender: "Male",
          title: "Community Outreach Specialist"
        },
        {
          id: 4,
          name: "Lonnie Izkovitz",
          email: "lizkovitz3@youtu.be",
          gender: "Female",
          title: "Operator"
        },
        {
          id: 5,
          name: "Thatcher Stave",
          email: "tstave4@reference.com",
          gender: "Male",
          title: "Software Test Engineer III"
        },
      ],
      paginatedUsers: [],
    }),
    methods: {
      updatePagination (page, pageSize, sort, sortOrder) {
        console.log('pagination has updated', page, pageSize, sort, sortOrder);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .md-table + .md-table {
    margin-top: 16px
  }
</style>