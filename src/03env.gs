const FILE_TYPE = {
  "THUMBNAIL": 0,
  "CHAT_PHOTO": 1, // ProfilePhoto
  "PHOTO": 2,
  "VOICE": 3, // VoiceNote
  "VIDEO": 4,
  "DOCUMENT": 5,
  "ENCRYPTED": 6,
  "TEMP": 7,
  "STICKER": 8,
  "AUDIO": 9,
  "ANIMATION": 10,
  "ENCRYPTED_THUMBNAIL": 11,
  "WALLPAPER": 12,
  "VIDEO_NOTE": 13,
  "SECURE_RAW": 14,
  "SECURE": 15,
  "BACKGROUND": 16,
  "DOCUMENT_AS_FILE": 17
}

const THUMBNAIL_SOURCE = {
  "LEGACY": 0,
  "THUMBNAIL": 1,
  "CHAT_PHOTO_SMALL": 2, // DialogPhotoSmall
  "CHAT_PHOTO_BIG": 3, // DialogPhotoBig
  "STICKER_SET_THUMBNAIL": 4
}

// Photo-like file ids are longer and contain extra info, the rest are all documents
const PHOTO_TYPES = [FILE_TYPE.THUMBNAIL, FILE_TYPE.CHAT_PHOTO, FILE_TYPE.PHOTO,
FILE_TYPE.WALLPAPER, FILE_TYPE.ENCRYPTED_THUMBNAIL];
const DOCUMENT_TYPES = [FILE_TYPE.VOICE, FILE_TYPE.VIDEO, FILE_TYPE.DOCUMENT,
FILE_TYPE.ENCRYPTED,FILE_TYPE.TEMP, FILE_TYPE.STICKER, FILE_TYPE.AUDIO,
FILE_TYPE.ANIMATION, FILE_TYPE.VIDEO_NOTE, FILE_TYPE.SECURE_RAW, FILE_TYPE.SECURE,
FILE_TYPE.BACKGROUND, FILE_TYPE.DOCUMENT_AS_FILE];

// Since the file type values are small enough to fit them in few bits, Telegram thought it would be a good idea to
// encode extra information about web url and file reference existence as flag inside the 4 bytes allocated for the field
const WEB_LOCATION_FLAG = 1 << 24;
const FILE_REFERENCE_FLAG = 1 << 25;

