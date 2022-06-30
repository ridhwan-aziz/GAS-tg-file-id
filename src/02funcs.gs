const b64_encode = function (bytes) {
  /* Encode bytes into a URL-safe Base64 string without padding
  
  Parameters:
    bytes:
      Bytes to encode
  
  Returns:
    str: The encoded bytes
  */

  const encoded = Utilities.base64EncodeWebSafe(bytes);
  const stringData = Utilities.newBlob(encoded).getDataAsString();
  return trim(stringData, "=");
}

const b64_decode = function(str) {
  /* Decode a URL-safe Base64 string without padding to bytes
  
  Parameters:
    str:
      String to decode
  
  Returns:
    bytes: The decoded string
   */

  const decoded = Utilities.base64DecodeWebSafe(str + "=".repeat(mod(-str.length, 4)));
  return Utilities.newBlob(decoded).getBytes();
}

const rle_encode = function(s) {
  /* Zero-value RLE encoder
  
  Parameters:
    s:
      Bytes to encode

  Returns:
    bytes: The encoded bytes
   */

  let r = [];
  let n = 0;

  s.forEach(b => {
    if (!b) {
      n++;
    } else {
      if (n) {
        r.push(...[0,n]);
        n = 0;

        r.push(b);
      }
    }
  })

  if (n) {
    r.push(...[0,n]);
  }

  return r;
}

const rle_decode = function(s) {
  /* Zero-value RLE decoder 
  
  Parameters:
    s:
      Bytes to decode

  Returns:
    bytes: The decoded bytes
  */

  let r = [];
  let z = false;

  for (var i = 0; i < s.length; i++) {
    let b = s[i];

    if (!b) {
      z = true;
      continue;
    }

    if (z) {
      r.push(...new Array(b).fill([0]).flat());
      z = false;
    } else {
      r.push(b);
    }
  }

  return r;
}

