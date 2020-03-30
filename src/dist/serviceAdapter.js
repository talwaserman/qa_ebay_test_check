/* istanbul ignore file */
export async function postAdapter({ url, payload, mockResponse, mockMessage }) {
  if (window.BackendApi) {
    return await window.BackendApi.post(url, payload);
  } else if (process.env.NODE_ENV === 'development' && mockResponse) {
    if (mockMessage) {
      alert(mockMessage);
    }
    if (mockResponse) {
      return mockResponse;
    }
  } else {
    return [];
  }
}

export async function formMultiPartAdapter({
  url,
  payload,
  mockResponse,
  mockMessage
}) {
  if (window.BackendApi) {
    return await window.BackendApi.upload(url, payload, () => {});
  } else if (process.env.NODE_ENV === 'development' && mockResponse) {
    if (mockMessage) {
      alert(mockMessage);
    }
    if (mockResponse) {
      return mockResponse;
    }
  } else {
    return [];
  }
}

export async function getAdapter({ url, mockResponse, mockMessage }) {
  if (window.BackendApi) {
    return await window.BackendApi.get(url);
  } else if (process.env.NODE_ENV === 'development' && mockResponse) {
    if (mockMessage) {
      alert(mockMessage);
    }
    if (mockResponse) {
      return mockResponse;
    }
  } else {
    return [];
  }
}

export async function deleteAdapter({
  url,
  payload,
  mockResponse,
  mockMessage
}) {
  if (window.BackendApi) {
    return await window.BackendApi.delete(url, payload);
  } else if (process.env.NODE_ENV === 'development' && mockResponse) {
    if (mockMessage) {
      alert(mockMessage);
    }
    if (mockResponse) {
      return mockResponse;
    }
  } else {
    return [];
  }
}
