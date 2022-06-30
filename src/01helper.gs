const Buffer = function (string) {
  // Source: https://stackoverflow.com/a/63406339
  const buf = new ArrayBuffer(string.length);
  const ar = new Uint8Array(buf);

  for (var i = 0; i < ar.length; i++) {
    ar[i] = string.charCodeAt(i);
  }

  return buf;
}

const trim = function (string, char) {
  let text = string;

  for (i = 0; i < text.length; i++) {
    if (string[i] === char) {
      text = text.slice(1);
    } else {
      break;
    }
  }

  text = text.split("").reverse().join("");

  for (j = 0; j < text.length; j++) {
    if (text[j] === char){
      text = text.slice(1);
    } else {
      break;
    }
  }

  text = text.split("").reverse().join("");

  return text;
}

const mod = function (n, m) {
  // Source: https://stackoverflow.com/a/17323608
  return ((n % m) + m) % m;
}

const objectIsEmpty = function(object) {
  if (typeof object === "object" && Object.keys(object).length === 0) {
    return true;
  } else return false;
}

const createJSONOutput = function(json) {
  let JSONString = JSON.stringify(json);
  let JSONOutput = ContentService.createTextOutput(JSONString);
  JSONOutput.setMimeType(ContentService.MimeType.JSON);
  return JSONOutput;
}

