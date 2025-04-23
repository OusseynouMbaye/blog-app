import { ref, watch } from 'vue';

export default function useFetch(url, options = {}) {
  const status = ref('loading');
  const data = ref(null);
  const error = ref(null);

  async function fetchData(urlValue, method = 'GET', body = null) {
    status.value = 'loading';
    try {
      const fetchOptions = {
        method,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        ...options,
      };

      if (body) {
        fetchOptions.body = JSON.stringify(body);
      }

      const response = await fetch(urlValue, fetchOptions);
      if (!response.ok) {
        throw new Error(`Failed to ${method} data: ${response.status}`);
      }
      const result = await response.json();
      if (!result) {
        throw new Error('No data found');
      }
      data.value = result;
      status.value = 'idle';
      return result;
    } catch (e) {
      error.value = e.message;
      status.value = 'error';
      data.value = null;
      throw e;
    }
  }

  watch(
    url,
    (urlValue) => {
      fetchData(urlValue);
    },
    { immediate: true }
  );

  return {
    data,
    status,
    error,
    update: (body) => fetchData(url.value, 'PUT', body),
  };
}
