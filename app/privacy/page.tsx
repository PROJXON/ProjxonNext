import './PrivacyPage.css';

export default function () {
  const date = new Date(2025, 8, 5);

  return (
    <div className="container" id="privacyPageContainer">
      <h1>Privacy Policy — PROJXON Mobile App</h1>
      <p id="lastUpdated">
        Last updated:{' '}
        {new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        }).format(date)}
      </p>

      <h2>What this app does</h2>
      <p>
        The PROJXON mobile app displays public posts from the PROJXON LinkedIn Page to keep users up
        to date with our latest news.
      </p>

      <h2>Data we collect</h2>
      <p>
        We do not collect, store, or process personal data from users of this app. We do not require
        account creation or sign-in.
      </p>

      <h2>LinkedIn content</h2>
      <p>
        The app fetches publicly available content from LinkedIn and displays it in-app. That
        content remains subject to LinkedIn’s terms and policies. We do not scrape LinkedIn.
      </p>

      <h2>Analytics & logs</h2>
      <p>
        Our servers may generate basic, non-identifying logs (e.g., request timestamps, error codes)
        to ensure reliability and security. These logs are retained for up to 90 days and then
        deleted.
      </p>

      <h2>Third parties</h2>
      <p>
        LinkedIn Corporation provides the platform hosting the original posts we display. We do not
        sell or share user personal information.
      </p>

      <h2>Your choices</h2>
      <p>
        If you prefer not to view LinkedIn content, you can stop using the app. We do not have any
        user data to access, correct, or delete.
      </p>

      <h2>Contact</h2>
      <p>For questions, contact: @projxon.com</p>
    </div>
  );
}
