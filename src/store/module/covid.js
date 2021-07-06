import axios from "axios";

export const covid = {
  namespaced: true,
  state: {
    all_covid_data:[],
    all_countries_covid_data:[]
  },
  getters:{
   
  },
  mutations: {
    allCovidData(state,payload) {
      state.all_covid_data = payload
    },
    allCountriesCovidData(state,payload) {
      state.all_countries_covid_data = payload
    }
  },
  actions: {
       //   Fetch covid data
       fetchAllCovidData({commit}) {
        const options = {
          method: "GET",
          url: "https://corona.lmao.ninja/v2/all?yesterday",
          headers: {
            "content-type": "application/json",
          },
        };
  
        axios
          .request(options)
          .then((response) => {
            commit('allCovidData',response.data)
          })
          .catch((error) => {
            console.error(error);
          });
      },
    //   Fetch covid data
    fetchCountriesCovidData({commit}) {
        const options = {
          method: "GET",
          url: "https://corona.lmao.ninja/v2/countries?today&sort",
          headers: {
            "content-type": "application/json",
          },
        };
  
        axios
          .request(options)
          .then((response) => {
            commit('allCountriesCovidData',response.data)
          })
          .catch((error) => {
            console.error(error);
          });
      }

  },
};
