import { ref } from 'vue';

export let releases = ref([]);
export let endOfList = ref(false);
export let fetching = ref(false);
export let getNewsletters = async () => {
  fetching.value = true;
  fetching.value = false;
};
