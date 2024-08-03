const config = require('../config');

// Test for response status code and body
test('DELETE request to /api/v1/kits/7 should return status 200 and a valid response body', async () => {
  let responseStatus;
  let data;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'manual'
    });

    responseStatus = response.status;
    data = await response.json(); // Handle the response body as JSON
  } catch (error) {
    console.error('Error occurred:', error);
  }

  // Ensure the status is 200
  expect(responseStatus).toBe(200);
  
  // Ensure the response body has the correct structure
  expect(data).toEqual({ ok: true });
});