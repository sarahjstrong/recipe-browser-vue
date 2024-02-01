import axios from "axios";

export function searchMeals({ commit }, keyword) {
    axios.Client.get(`search.php?s=${keyword.value}`)
    .then(({ data }) => {
        debugger;
        commit('setSearchedMeals', data)
    })
}