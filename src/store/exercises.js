import api from "../api.js";

const ExercisesApi = {
  state: {
    AllStaduims: [],
    AllTeams: [],
    SelectedStaduim: {},
    SelectedTeam: {},
  },
  mutations: {
    SetAllStaduims: (state, data) => {
      state.AllStaduims = data;
    },
    SetAllTeams: (state, data) => {
      state.AllTeams = data;
    },
    SetSelectedStaduim: (state, data) => {
      state.SelectedStaduim = data;
    },
    SetSelectedTeam: (state, data) => {
      state.SelectedTeam = data;
    },
  },
  getters: {
    GetAllStaduims: (state) => state.AllStaduims,
    GetAllTeams: (state) => state.AllTeams,
    GetSelectedStaduim: (state) => state.SelectedStaduim,
    GetSelectedTeam: (state) => state.SelectedTeam,
  },
  actions: {
    async AllStaduims({ commit }) {
      try {
        const res = await api.get("/todos");

        if (res.data.StatusCode === "200") {
          commit("SetAllStaduims", res.data);
        }

        return res.data;
      } catch (error) {
        console.error(error);
        throw error; // rethrow the error for consistency
      }
    },

    async AllTeams({ commit }) {
      try {
        const res = await api.get("/Teams/GetAll");

        if (res.data.StatusCode === "200") {
          commit("SetAllTeams", res.data);
        }

        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};

export default ExercisesApi;
