// Self-hosted, cookieless analytics (Umami) — see musios/backend's
// docker-compose.prod.yaml for the service definition. Umami doesn't set
// tracking cookies or fingerprint visitors, so no consent banner is needed
// here; see the Privacy Policy's Cookies section.
//
// After deploying Umami, log into its dashboard, create a "website" entry
// for musios.io, and paste the generated website ID below. Until then this
// deliberately renders nothing rather than pointing at a site that doesn't
// exist yet.
const UMAMI_SCRIPT_SRC = "https://analytics.musios.io/script.js";
const UMAMI_WEBSITE_ID = "REPLACE_WITH_WEBSITE_ID_FROM_UMAMI_DASHBOARD";

const Analytics = () => {
  if (!UMAMI_WEBSITE_ID || UMAMI_WEBSITE_ID.startsWith("REPLACE_")) {
    return null;
  }

  return (
    <script defer src={UMAMI_SCRIPT_SRC} data-website-id={UMAMI_WEBSITE_ID} />
  );
};

export default Analytics;
