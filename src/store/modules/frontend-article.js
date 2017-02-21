import api from "../../api";
const state={
  lists:{
    data:[],
    page:1,
    hasNext:0
  },
  hot:[],
  item:''
}

const actions={
  async ['getArticleList'] ({commit},config){
    const {data,status}=await api.get('article',config);
    if(status===200){
      commit('receiveArticleList',data);

    }
  },
  async ['getHot'] ({commit}){
    const {data,status}=await api.get('article/hot');
    if(data&&status===200){
      commit('receiveHot',data)
    }
  },
  async ['getArticleItem']({commit},{id}){
    const {data,status}=await api.get(`article/${id}`);
    if(data&&status===200){
      commit('receiveArticleItem',data);
    }
  }
}

const mutations = {
  ['receiveArticleList'](state,payload) {
    state.lists.data=payload;
  },
  ['receiveHot'] (state,payload){
    state.hot=payload;
  },
  ['receiveArticleItem'](state,payload){
    state.item=payload;
  }
}

const getters={
  ['getArticleList'](state){
    return state.lists;
  },
  ['getHot'](state){
    return state.hot
  },
  ['getArticleItem'](state){
    return state.item;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

