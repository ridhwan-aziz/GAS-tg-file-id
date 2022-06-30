const doGet = function(data) {
  const parameter = data.parameter;
  const notes = [
    "FYI, You can use post method too!",
    null,
    null,
    null
  ]

  if (objectIsEmpty(parameter) || !Object.keys(parameter).includes("file_id")) {
    return createJSONOutput({
      ok: false,
      description: "Parameter file_id is empty!",
      result: null,
      notes: null
    });
  } else {
    try {
      return createJSONOutput({
        ok: true,
        description: null,
        result: decode(parameter.file_id),
        notes: notes[Math.ceil(Math.random()*3)]
      });
    } catch(e) {
      return createJSONOutput({
        ok: false,
        description: e.message,
        result: null,
        notes: "If you think it's a bug, report it to @ridhwan_aziz"
      })
    }
  }
}

const doPost = function(data) {
  const parameter = data.parameter;
  if (!data.postData) {
    if (objectIsEmpty(parameter) || !Object.keys(parameter).includes("file_id")) {
      return createJSONOutput({
        ok: false,
        description: "Parameter file_id is empty!",
        result: null,
        notes: null
      });
    }

    var fileId = parameter.file_id;

    const notes = [
      "Recommended to use post payload instead of url parameter.",
      null,
      null,
      null
    ]
    var note = notes[Math.ceil(Math.random()*3)];
  } else {
    const postDataContent = JSON.parse(data.postData.contents);
    if (!Object.keys(postDataContent).includes("file_id")) {
      return createJSONOutput({
        ok: false,
        description: "Parameter file_id is empty!",
        result: null,
        notes: null
      })
    }

    var fileId = postDataContent.file_id;
    var note = null;
  }

  try {
    return createJSONOutput({
      ok: true,
      description: null,
      result: decode(fileId),
      notes: note
    });
  } catch(e) {
    return createJSONOutput({
      ok: false,
      description: e.message,
      result: null,
      notes: "If you think it's a bug, report it to @ridhwan_aziz"
    });
  }
}

