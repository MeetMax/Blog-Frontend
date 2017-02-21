import api from "../../api";
const state={
	lists:[],
}

const actions={
	async ['getCategoryList'] ({commit}){
		const {data,status}=await api.get('category');
		if(status===200){
      commit('receiveCategoryList',data)
    }
	}
}

const mutations = {
	['receiveCategoryList'](state,payload) {
		state.lists=payload;
	}
}

const getters={
	['getCategoryList'](state){
		return state.lists;
	}
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
