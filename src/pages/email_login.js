const EmailPage = ({ location: { search } }) => {
  if (typeof window !== "undefined") {
    window.location.href = `https://app.santiment.net/email_login${search}`;
  }
  return null;
};

export default EmailPage;
