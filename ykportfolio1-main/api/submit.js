export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, serviceOfInterest, budgetRange, projectDetails, gdprConsent } = req.body;

    if (!firstName || !lastName || !email || !phone || !serviceOfInterest || !budgetRange || !gdprConsent) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('N8N_WEBHOOK_URL is not defined in environment variables.');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        serviceOfInterest,
        budgetRange,
        projectDetails,
        gdprConsent,
        source: 'YK Digitals Website',
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      console.error('Error forwarding to n8n webhook:', response.statusText);
      return res.status(500).json({ error: 'Failed to process inquiry' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('API Route Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
