# N8N Webhook Implementation Plan

## Data Flow
1. **Frontend (React/Vite)**: The user clicks "Start a Project" on the website, which opens the Tally form (`https://tally.so/r/q4E799`) in a new tab.
2. **Tally Form Submission**: The user completes the questionnaire and submits the form directly on Tally's platform.
3. **Tally Webhook Integration**: Tally is configured internally to send a webhook to the n8n Production Webhook URL upon form submission.
4. **n8n Processing**: The n8n webhook node receives the submitted form payload directly from Tally, triggering the workflow to capture the lead, send an automated email, and process any CRM updates.

## Testing Procedure
* **Important**: Do NOT test the workflow by clicking the "Start a Project" button on the website. The button merely acts as an external link to the form.
* **To Test**: Open the published Tally form URL, fill out the answers, and submit the form. Verify that the n8n webhook receives the data and continues the workflow.

## Required Setup (External)
1. In your **n8n workflow**, create a Webhook trigger node and copy the **Production URL**.
2. In your **Tally workspace**, navigate to your form's Settings > Integrations > Webhooks.
3. Paste the n8n Production Webhook URL into the Tally webhook configuration.
4. Ensure the webhook is activated in Tally and the n8n workflow is active (or listening for a test event) to receive the data.
