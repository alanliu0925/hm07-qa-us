const config = require('../config');

const requestBody = {
  "productsList": [
    {
      "id": 1,
      "quantity": 1
    }
  ],
  "name": "For movies and series"
};

// Test for response status code
test('PUT request to /api/v1/kits/2 should return status 200', async () => {
  let responseStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
      redirect: 'manual'
    });

    responseStatus = response.status;
    expect(responseStatus).toBe(200);
  } catch (error) {
    console.error('Error occurred:', error);
  }
});

// Test for response body structure and content
test('Response should contain ok and _req_id', async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
      redirect: 'manual'
    });

    actualResponseBody = await response.json();
  } catch (error) {
    console.error('Error occurred:', error);
  }

  // Ensure the actualResponseBody has the correct structure
  expect(actualResponseBody).toHaveProperty('ok');
  expect(actualResponseBody).toHaveProperty('_req_id');
  // Add other assertions as needed based on the actual response structure
});