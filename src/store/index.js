import Vue from "vue";
import Vuex from "vuex";
import frontendArticle from "./modules/frontend-article";
import frontendCategory from "./modules/frontend-category"
Vue.use(Vuex);
export default new Vuex.Store({
	modules:{
		frontend:{
			namespaced:true,
			modules:{
				article:frontendArticle,
				category:frontendCategory
			}
		}
	}
})
