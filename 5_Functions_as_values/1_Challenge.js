const notifyByEmail = (email) => {
  return "Email sent to: " + email;
};

const notifyByText = (phoneNumber) => {
  return "Text sent to: " + phoneNumber;
};

const notify = (contactDetail, notifyFunction) => {
  console.log(notifyFunction(contactDetail));
};

notify("hello@makers.tech.test", notifyByEmail);
notify("+10000000000", notifyByText);
