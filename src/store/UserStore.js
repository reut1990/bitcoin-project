import UserService from '../services/UserService';
import BitcoinService from '../services/BitcoinService';
import { observable, action, computed } from 'mobx';

export default class UserStore {
    @observable
    user = {};

    loading = false;

    // @computed--- not the best way-better as in contacts page
    // get userObj() {
    //     return {
    //         user: this.user,
    //         coinsRate: this.coinsRate
    //     }
    // }

  

    constructor(rootStore) {
        this.rootStore = rootStore;
        // this.fetchUser();
        // this.fetchCoinsRate();
    }

    @action
    async fetchUser() {
        this.loading = true;
        this.user = await UserService.loadUser();
        this.loading = false;
    }
    @action
    async fetchSignUp(userName){
        UserService.signUp(userName);
    }

    // @action
    // async fetchCoinsRate() {
    //     await BitcoinService.getRate(this.user.coins)
    //         .then(res => {
    //             console.log('fetch cpins rate',res)
    //             this.coinsRate = res;
    //         })
    // }
}