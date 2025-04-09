import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
  const freeDomainsMap = freeEmailDomains.reduce((acc, domain) => {
    acc[domain] = true;

    return acc;
  }, {});

  return emails.reduce((acc, email) => {
    const domain = email.split('@')[1];
    if (freeDomainsMap[domain]) { 
      acc[domain] = (acc[domain] || 0) + 1;
    }

    return acc;
  }, {});
};

export default getFreeDomainsCount;
// END