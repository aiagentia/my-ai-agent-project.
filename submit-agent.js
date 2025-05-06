// Function to submit the form data
async function submitAgentData(formData) {
  const response = await fetch('https://your-n8n-instance.com/webhook/submit-agent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  console.log(result); // Handle the result (success/error)
}
