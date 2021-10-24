import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
// import cart from "./modules/cart";
import { ADD_CART, SUBSTRATE_CART } from "./mutation-types";

interface ICart {
  id: Number; // 商品ID
  cartCount: Number; //购物车数量
}

export interface State {
  cartList: Array<ICart>;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      cartList: [],
    };
  },
  mutations: {
    [ADD_CART](state: object | any, playload: object | any) {
      // 添加其他商品前，检查购物车是否有过该商品添加记录
      const newBookArr = state.cartList?.filter((item, index) => {
        return state.cartList[index].id === playload.id;
      });
      // 先判断，购物车是否为空；接着在判断，添加第二种商品购物车是否为空
      state.cartList?.length === 0
        ? state.cartList.push(playload)
        : newBookArr.length === 0
        ? state.cartList.push(playload)
        : state.cartList.find((item, index) => {
            item.id === newBookArr[0].id ? (item.cartCount += 1) : null;
          });
      console.log(state.cartList);
    },
    [SUBSTRATE_CART](state: object | any, { id }: object | any) {
      state.cartList?.find((item, index) => {
        item.id === id && item.cartCount > 0 ? (item.cartCount -= 1) : null;
      });
      console.log(state.cartList);
    },
  },
  actions: {
    getCountCart({ commit }, playload) {
      commit(ADD_CART, playload);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
