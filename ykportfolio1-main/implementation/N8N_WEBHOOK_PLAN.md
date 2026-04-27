# N8N Webhook Implementation Plan

## Data Flow
1. **Frontend (React/Vite)**: The user submits the project questionnaire form on the website (e.g., via the Contact page or "Start a Project" modal).
2. **Vercel Serverless Function**: The form submission is POSTed to a Vercel API route (e.g., `/api/submit-inquiry`). This API route hides the n8n webhook URL from the frontend and avoids CORS issues.
3. **n8n Webhook**: The Vercel function formats the data and makes a backend POST request to the `N8N_WEBHOOK_URL`.
4. **n8n Processing**: n8n captures the lead, sends an automated email response to the user, and triggers any internal follow-ups or CRM updates.

## Required Fields
When the user submits an inquiry, we will capture the following fields:
* **First Name** (Required)
* **Last Name** (Required)
* **Email Address** (Required)
* **Phone** (Required)
* **Service of Interest** (Required, Dropdown: New Website, Redesign, Automation)
* **Budget Range** (Required, Dropdown: <$1k, $1k-$5k, $5k+)
* **Questionnaire Responses** (e.g., project details, timeline)
* **GDPR Consent** (Required, boolean: "I agree to be contacted regarding my project and understand my information will be handled securely.")

## Error Handling
* **Frontend**: 
  * Validate all required fields (using `zod` and `react-hook-form` or native HTML validation) before submission.
  * Show a clear error message in the UI if the submission fails.
  * Disable the submit button and show a loading spinner during the network request.
* **Backend (Vercel)**:
  * Validate incoming payload to ensure required fields exist.
  * Wrap the `fetch` to the n8n webhook in a `try...catch` block.
  * Log any errors securely (e.g., `console.error` which goes to Vercel logs) and return a safe `500` response to the frontend without exposing webhook details.

## Success / Redirect Behavior
* Upon receiving a `200` success response from the Vercel API, the frontend will programmatically redirect the user to `/thank-you` (using `react-router-dom`'s `useNavigate`).
* Webhook response data from n8n will not be exposed or rendered to the user.
