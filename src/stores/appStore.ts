import { defineStore } from 'pinia';
import axios from 'axios';
import { User } from 'app/src/components/models';
const api = axios.create({
  baseURL: 'http://localhost:3000',
});
api.defaults.headers.common['x-api-key'] =
  '70335667-2408-4011-a994-ea3e7042d96f';
export const useAppStore = defineStore('appStore', {
  state: () => ({
    counter: 0,
    userList: [] as User[],
    userDetails: {
      active: false,
      created_at: '',
      email: '',
      id: 0,
      name: '',
      role: '',
    } as User,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    getUsers() {
      api
        .get<User[]>('/users')
        .then((response) => {
          console.log(response.data);
          this.userList = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUserDetails(userId: string) {
      api
        .get<User>('/users/' + userId)
        .then((response) => {
          console.log(response.data);
          this.userDetails = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
