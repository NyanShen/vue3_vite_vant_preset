
/**
 * Mutations of Vuex
 */
// 声明 mutations事件以使用actions提交
const mutations = {
    setCount: (state, value) => {
        state.count = value
    }
}

export default mutations
