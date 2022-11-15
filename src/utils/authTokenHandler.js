import { decode } from "base-64";

const base64Urldecode = function (input) {
    // Replace non-url compatible chars with base64 standard chars
    input = input
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    // Pad out with standard base64 required padding characters
    var pad = input.length % 4;
    if (pad) {
      if (pad === 1) {
        throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
      }
      input += new Array(5 - pad).join('=');
    }
  
    return input;
  }

  export function getAuth(authToken) {
    const authArr = authToken.split(".");
    const info = JSON.parse(decode(base64Urldecode(authArr[1])));
    console.log(info);
    return info.authorities[0];
  }
  