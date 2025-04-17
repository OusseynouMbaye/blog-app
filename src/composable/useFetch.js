import { ref, watch } from 'vue';

export default function useFetch(url) {
  const status = ref('loading');
  const data = ref(null);

  watch(
    url,
    (urlValue) => {
      fetch(urlValue)
        .then((r) => {
          if (r.ok) {
            return r.json();
          }
          throw new Error('Failed to fetch posts');
        })
        .then((v) => {
          data.value = v;
          status.value = 'idle';
        })
        .catch((e) => {
          // console.error(e);
          status.value = 'idle';
        })
        .catch((e) => {
          status.value = 'error';
        });
    },
    { immediate: true }
  );

  return { data, status };
}
