//loading.js

const state={
    show: false, // 展示
    type: 0,    // 1:上传中;
    load: 0,    // 进度
};
const getters={ // 获取
    getShow(state){ 
        return state.show;
    },
    getType(state){
        return state.type;
    },
    getLoad(state){
        return state.load;
    },
};
const mutations={   // 变化
    setShow(state, data){
        state.show = data;
    },
    setType(state, data){
        state.type = data;
    },
    setLoad(state, data){
        data = data * 100;
        data = parseInt(data);
        state.load = data;
    },
};

const actions={ // 触发
    setOfShow(context, data){
        context.commit('setShow', data);
    },
    setOfType(context, data){
        context.commit('setType', data);
    },
    setOfLoad(context, data){
        context.commit('setLoad', data);
    },
};
export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}