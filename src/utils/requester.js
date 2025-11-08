const request = async (method, url, data, options = {}) => {
  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: JSON.stringify(data),
    };
  }

  
  const response = await fetch(url, options);
  const responseContentType = response.headers.get("Content-Type");

  if (!responseContentType) {
    return null;
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }
  return result;
};

export default {
  get: (url, options) => request("GET", url, options),
  post: (url, data, options) => request("POST", url, data, options),
  put: (url, data, options) => request("PUT", url, data, options),
  del: (url, options) => request("DELETE", url, null, options),
};
