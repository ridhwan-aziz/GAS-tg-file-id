function decode(file_id) {
  const decoded = rle_decode(b64_decode(file_id));

  // region read version
  // File id versioning. Major versions lower than 4 don't have a minor version
  let major = decoded[decoded.length - 1];

  if (major < 4) {
    var minor = 0;
    var buffer = decoded.slice(0, decoded.length - 1);
  } else {
    var minor = decoded[decoded.length - 2];
    var buffer = decoded.slice(0, decoded.length - 2);
  }
  // endregion

  let str = Utilities.newBlob(buffer.slice(0, 8)).getDataAsString();
  buffer = buffer.slice(8);

  let [file_type, dc_id] = struct("<ii").unpack(Buffer(str));
  
  // region media type flags
  // Check for flags existence
  const hasWebLocation = Boolean(file_type & WEB_LOCATION_FLAG);
  const hasFileReference = Boolean(file_type & FILE_REFERENCE_FLAG);

  // Remove flags to restore the actual type id value
  file_type &= ~WEB_LOCATION_FLAG;
  file_type &= ~FILE_REFERENCE_FLAG;
  // endregion

  try {
    file_type = Object.keys(FILE_TYPE)[file_type];
  } catch(e) {
    throw ReferenceError(`Unknown file_type ${file_type} of file_id ${file_id}`);
  }

  const data = {
    file_type: file_type,
    dc_id: dc_id,
    has_web_location: hasWebLocation,
    has_file_reference: hasFileReference
  }

  return data;
}

