# N8N Webhook Implementation Plan

## Data Flow
The integration works purely between Tally and n8n. The website button only acts as a link to the form.

1. **Frontend (Website)**: The user clicks the "Start a Project" button on the website.
2. **Form Opens**: The website opens the Tally form (`https://tally.so/r/q4E799`) in a new tab.
3. **Form Submission**: The user fills out and submits the Tally form directly on Tally's platform.
4. **Tally Webhook**: Tally sends a POST request with the form payload directly to the n8n Production Webhook URL.
5. **n8n Processing**: The n8n workflow triggers, capturing the lead and processing automation steps.

## Required Setup (External)

### 1. n8n Setup
1. Create a Webhook trigger node in your n8n workflow.
2. **Method**: Ensure it is set to **POST**.
3. **URL**: Copy and use the **Production URL** only (do NOT use the test URL). It should look like:
   `http://n8n-l8wsok88cs80gss8kgk80c8g.34.10.246.13.sslip.io/webhook/fca8130d-08ee-43cb-9914-722abe920063`
4. **Response**: Set it to respond immediately with status 200.
5. **Activate**: The workflow **must be published and active** to receive production webhooks. Do NOT rely on "Execute workflow" or "Listen for test event".

### 2. Tally Setup
1. In your Tally workspace, navigate to your form's **Settings > Integrations > Webhooks**.
2. Paste the exact **n8n Production URL** into the Tally webhook configuration.
3. Ensure the webhook is enabled in Tally.
4. Republish the Tally form to ensure changes are applied.

## Testing Procedure
* **Important**: Testing from the website button will only test the link, not the webhook.
* **To Test**: Open the published Tally form URL directly (or via the website link), fill out the answers, and submit the live Tally form. Verify that an execution appears in the n8n executions list.
