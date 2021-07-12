//loading.js

const state={
    person: '',         // 负责人
    disAddAll: false,   // 是否遮罩禁止项目概况
    over: 0,            // 项目是否完成
};
const getters={ // 获取
    getP(state){ 
        return state.person;
    },
    getDis(state){ 
        return state.disAddAll;
    },
    getOver(state){ 
        return state.over;
    },
};
const mutations={   // 变化
    setP(state, data){
        state.person = data;
    },
    setDis(state, data){
        state.disAddAll = data;
    },
    setOver(state, data){
        state.over = data;
    },
};

const actions={ // 触发
    setOfP(context, data){
        context.commit('setP', data);
    },
    setOfDis(context, data){
        context.commit('setDis', data);
    },
    setOfOver(context, data){
        context.commit('setOver', data);
    },
};
export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}