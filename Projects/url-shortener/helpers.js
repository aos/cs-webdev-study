// Test for correct URL
const testURL = (url) => {
  let isURL = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}(:[0-9]+)?\b([-a-zA-Z0-9@:%_\+~#?&//=]*)/g.test(url);

  return isURL;
}

// Super simple hash function to shorten URL
const shortenURL = (url) => {
  let sum = 0;
  let urlWithoutHTTP = url.slice(6);
  for (let i = 0, len = urlWithoutHTTP.length; i < len; i++) {
    sum += urlWithoutHTTP.charCodeAt(i) * i;
  }
  return sum >> 2;
}

module.exports = {
  test: testURL,
  shorten: shortenURL
}