import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	// 状态属性 : 组件之间需要传送的数据 , 所有组件需要共享的数据 .
	state: {
		count: 0,
	},
	// 定义获取数据的属性 , 写成方法 , 用成属性
	getters: {
		showCount: (state) => {
			return state.count;
		},
	},
	// 改变共享数据的方法(同步修改)
	mutations: {
    // 给计数器+的运算
		// 第一个参数是固定的 , 引用状态的属性
		add(state, step) {
      state.count += step;
		},
		sub(state, step) {
      state.count -= step;
		},
	},
  // 改变共享数据的方法(支持异步修改)
	actions: {
    subAsync(context,step){
      setTimeout(() => {
        // 调用mutation中的同步方法来处理
        context.commit('sub',step)
      }, 1000);
    }
  },
	modules: {},
});
