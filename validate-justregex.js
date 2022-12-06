const telephoneCheck = (str) => {
  let regexArr = [
    /^1?\([0-9]{3}\)\s?[0-9]{3}-?[0-9]{4}$/,
    /^1\s?\([0-9]{3}\)\s?[0-9]{3}-?[0-9]{4}$/,
    /^1?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/,
    /^1\s[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/,
    /^1\s[0-9]{3}\s?[0-9]{3}\s?[0-9]{4}$/
    ];
  for (let rx of regexArr) {
    if (rx.test(str))
      return true;
  }
  return false;
};



