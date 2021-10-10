import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store} from "vuex";
// import cart from "./modules/cart";

export interface State {
    cartCount: Number, //购物车数量
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state() {
        return {
            cartCount: 100
        }
    }
})

export function useStore() {
    return baseUseStore(key)
}