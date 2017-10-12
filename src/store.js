import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pageData: {
      title: 'Anthony Balmeo Home'
    },
    userInfo: {
      name: 'Anthony Balmeo',
      firstName: 'Anthony',
      lastName: 'Balmeo',
      email: 'anthonybalmeo@gmail.com',
      secondaryEmail: 'lifethruframes@gmail.com',
      phone: '6195187902',
      address: '12600 Braddock Drive, Los Angeles CA, 90066'
    }
  }
})
