const config = require('../config');

const requestBody = {
  "name": "Bananas",
  "cardID": 8
};

test('Response body should contain "Bananas" or "For the situation...', async () => {
  let responseStatus;
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    responseStatus = response.status;
    actualResponseBody = await response.json();

    
  } catch (error) {
    console.error('Error occurred:', error);
  }

  // Ensure the status is 201 (Created)
  expect(responseStatus).toBe(201);

  // Ensure the response body contains the correct data
  expect(actualResponseBody).toHaveProperty('name', 'Bananas');
  expect(actualResponseBody).toHaveProperty('card');
  expect(actualResponseBody.card).toHaveProperty('id', 8);
  expect(actualResponseBody.card).toHaveProperty('name', 'For the situation');
});