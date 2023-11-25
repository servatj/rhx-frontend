export type methodType = "GET" | "POST" | "PUT" | "DELETE";

export async function apiFetch(
  url: string,
  method: methodType,
  payload,
  headers
) {
  // Set default headers and override with any custom headers
  const defaultHeaders = {
    "Content-Type": "application/json"
  };

  // Combine default and custom headers
  const combinedHeaders = { ...defaultHeaders, ...headers };

  // Prepare the request options
  const requestOptions = {
    method,
    headers: combinedHeaders
  };

  // If there's a payload, add it to the request options
  if (payload) {
    requestOptions.body = JSON.stringify(payload);
  }

  try {
    const response = await fetch(url, requestOptions);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Assuming the response is in JSON format
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Re-throw the error for further handling
  }
}
