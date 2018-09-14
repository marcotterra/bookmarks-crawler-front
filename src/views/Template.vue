<template>
  <div class="container">

    <div class="content">

      <div class="columns">

        <div class="column is-8">
          <div class="box">

            <b-table :data="data" :columns="columns" striped hoverable mobile-cards>

              <template scope="props">

                <b-table-column>
                  <span>{{ props.row.id}}</span>
                </b-table-column>

                <b-table-column>
                  <span>{{ props.row.title}}</span>
                </b-table-column>

                <b-table-column>
                  <span>{{ props.row.url}}</span>
                </b-table-column>

                <b-table-column>
                  <span>{{ props.row.date}}</span>
                </b-table-column>

                <b-table-column>
                  <span>{{ props.row.category}}</span>
                </b-table-column>

                <b-table-column field="actions" label="Actions">
                  <button class="button is-small is-light" @click="openCell(props.row)">
                    <b-icon icon="pencil"></b-icon>
                  </button>

                  <button class="button is-small is-light" @click="openCell(props.row)">
                    <b-icon icon="delete"></b-icon>
                  </button>
                </b-table-column>
              </template>

            </b-table>

          </div>
        </div>

        <div class="column is-4">
          <div class="box">
            Menor
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: [
      {
        id: 1,
        title: "Jesse",
        url: "Simmons",
        date: "2016-10-15 13:43:27",
        category: "Geral"
      },
      {
        id: 1,
        title: "Jesse",
        url: "Simmons",
        date: "2016-10-15 13:43:27",
        category: "Geral"
      },
      {
        id: 1,
        title: "Jesse",
        url: "Simmons",
        date: "2016-10-15 13:43:27",
        category: "Geral"
      }
    ],
    columns: [
      {
        field: "id",
        label: "ID",
        width: "40",
        numeric: true
      },
      {
        field: "title",
        label: "Title"
      },
      {
        field: "url",
        label: "Url"
      },
      {
        field: "date",
        label: "Date"
      },
      {
        field: "category",
        label: "Category"
      }
    ]
  }),

  methods: {
    openCell(cell) {
      console.log(cell);
    }
  }
};
</script>

<style lang="stylus">
.st
  // background-color #1f262f
  border-radius 5px
  box-shadow 0 20px 40px -15px rgba(0, 0, 0, 0.13)

.box
  padding 15px
  margin 15px
  width 100%
  background-color #111721

.a
  padding 15px
</style>
