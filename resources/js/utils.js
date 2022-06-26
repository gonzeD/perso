

export async function http(url,method,data)
{
  const headers = new Headers({
      'Content-Type': 'application/json',
      "accept": "application/json"
    });
  try {
     const response = await fetchWithTimeout(url,{body : JSON.stringify(data),method: method,
        headers,credentials: 'include'});


    data = null;
    if(response.status !== 204 && response.status !== 403 && response.status !== 500 && response.status !== 409 && response.status !== 404)
         data = await response.json();
     if(typeof window.TH_callbackConnection === 'function')window.TH_callbackConnection();
     return { data : data, status: response.status }
  }
  catch (e) {
    if(typeof window.TH_callbackNoConnection === 'function')window.TH_callbackNoConnection();
     throw e;
  }
}


async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 3000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal
  });
  clearTimeout(id);
  return response;
}
