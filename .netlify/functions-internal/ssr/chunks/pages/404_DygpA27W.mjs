import '@astrojs/internal-helpers/path';
/* empty css                          */
import { A as AstroError, c as InvalidImageService, d as ExpectedImageOptions, E as ExpectedImage, F as FailedToFetchRemoteImageDimensions, e as createAstro, f as createComponent, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as createTransitionScope, j as renderComponent, k as renderSlot, l as renderTransition, n as renderHead } from '../astro_CEi4LUy3.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
import { r as resolveSrc, i as isRemoteImage, a as isESMImportedImage, b as isLocalService, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_CPQjeDaQ.mjs';
/* empty css                        */

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4)
    return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize)
    return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box)
      break;
    if (box.name === boxName)
      return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1)
      return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0)
      return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength)
      return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1)
      return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox)
      return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(1);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = toUTF8String(input).match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.indexOf(type) > -1) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done)
      break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_CPQjeDaQ.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$a = createAstro("https://castelll0009.github.io");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/node_modules/astro/components/Image.astro", void 0);

const $$Astro$9 = createAstro("https://castelll0009.github.io");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && originalSrc.format in specialFormatsFallback) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$Astro$8 = createAstro("https://castelll0009.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a$5 || (_a$5 = __template$5(["", '<footer class="bg-white  shadow m-0 p-4 pt-0 dark:bg-gray-800"> <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">\xA9 <span id="current-year"></span> <a', ` class="hover:underline">CAD\u2122</a>. All Rights Reserved.
<script>
        // Obtener y mostrar el a\xF1o actual
        document.getElementById('current-year').textContent = new Date().getFullYear();
      <\/script> </span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"> <li> <a href="/" class="hover:underline me-4 md:me-6">About</a> </li> <li> <a href="privacy_policy" class="hover:underline me-4 md:me-6">Privacy Policy</a> </li> <li> <a href="web" class="hover:underline me-4 md:me-6">webs</a> </li> <li> <a class="hover:underline" type="button" data-drawer-target="drawer-contact" data-drawer-show="drawer-contact">Contact</a> </li> </ul> </div> </footer>`])), maybeRenderHead(), addAttribute(`/`, "href"));
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/Footer.astro", void 0);

const web_name = "Unikit";
const subtitle = "Crea tus Estilos y Outfits en 2024!";
const phone = "+573202486769";
const email = "webcadscastell@gmail.com";
const instagram = "Systems Engineer";
const facebook = "Systems Engineer";
const clientsData = {
	web_name: web_name,
	subtitle: subtitle,
	phone: phone,
	email: email,
	instagram: instagram,
	facebook: facebook
};

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$7 = createAstro("https://castelll0009.github.io");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", '<button id="themeToggle" data-astro-cid-htzy5xbu', `> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-htzy5xbu> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-htzy5xbu></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-htzy5xbu></path> </svg> </button>  <script>    
function  setDarkMode(){
    const theme = (() => {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
        return 'light';
    })();
  
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  
    window.localStorage.setItem('theme', theme);
  
    const handleToggleClick = () => {
      const element = document.documentElement;
      element.classList.toggle("dark");
  
      const isDark = element.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  
    document.getElementById("themeToggle").addEventListener("click", handleToggleClick);
    }

    window.addEventListener("DOMContentLoaded", function () {setDarkMode();});
    // document.addEventListener('astro:page-load', setDarkMode);
    document.addEventListener('astro:after-swap', setDarkMode);
  <\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "j2vkbfoz"), "data-astro-transition-persist"));
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/ui/ThemeIcon.astro", "self");

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$6 = createAstro("https://castelll0009.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  const headerNavs = [
    { url: "/kit", label: "kit" },
    { url: "/carnetdigital", label: "carnet digital" },
    { url: "/formatos", label: "formatos" },
    { url: "/links", label: "links" },
    { url: "/dev", label: "dev" },
    { url: "/api/signin", label: "iniciar sesion" }
    // {"url": "/gallery", "label": "Gallery"},
    // {"url": "/testimonials", "label": "Testimonials"}
  ];
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<header class="bg-white md:bottom-auto bottom-0 w-full fixed z-40 border-gray-200 dark:bg-gray-900 text-secondary dark:text-primary" data-astro-cid-3ef6ksr2', '> <div class="max-w-screen flex flex-wrap items-center justify-between mx-10 p-4" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 20 20" data-astro-cid-3ef6ksr2><path fill="currentColor" d="M8.7 7A1.7 1.7 0 0 0 7 8.7A1.3 1.3 0 0 0 8.3 10h3.4A1.3 1.3 0 0 0 13 8.7A1.7 1.7 0 0 0 11.3 7zM8 8.7a.7.7 0 0 1 .7-.7h2.6a.7.7 0 0 1 .7.7a.3.3 0 0 1-.3.3H8.3a.3.3 0 0 1-.3-.3M10 2a2.5 2.5 0 0 0-2.5 2.5v.044A6.001 6.001 0 0 0 4 10v5a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-5a6.001 6.001 0 0 0-3.5-5.456V4.5A2.5 2.5 0 0 0 10 2m5 10H5v-2a5 5 0 0 1 10 0zm-8 2.5a.5.5 0 0 0 1 0V13h7v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h2zM10 4a6.05 6.05 0 0 0-1.466.18a1.5 1.5 0 0 1 2.932 0C10.996 4.063 10.506 4 10 4" data-astro-cid-3ef6ksr2></path></svg> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" data-astro-cid-3ef6ksr2> ', '</span> </a> <!-- toogle navbar mobiles --> <button id="mobile-menu-toggle" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" data-astro-cid-3ef6ksr2> <span class="sr-only" data-astro-cid-3ef6ksr2>Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-astro-cid-3ef6ksr2> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-astro-cid-3ef6ksr2></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="navbar-default" data-astro-cid-3ef6ksr2> <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2> <a href="/" class="block py-2 px-3 text-third rounded md:bg-transparent md:text-secondary md:p-0 dark:text-white" aria-current="page" data-astro-cid-3ef6ksr2> <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" data-astro-cid-3ef6ksr2><rect width="4" height="8" x="10" y="13" fill="currentColor" fill-opacity="0" data-astro-cid-3ef6ksr2><animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3" data-astro-cid-3ef6ksr2></animate></rect><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-3ef6ksr2><path stroke-dasharray="15" stroke-dashoffset="15" d="M4.5 21.5h15" data-astro-cid-3ef6ksr2><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="15;0" data-astro-cid-3ef6ksr2></animate></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M4.5 21.5V8M19.5 21.5V8" data-astro-cid-3ef6ksr2><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="15;0" data-astro-cid-3ef6ksr2></animate></path><path stroke-dasharray="24" stroke-dashoffset="24" d="M9.5 21.5V12.5H14.5V21.5" data-astro-cid-3ef6ksr2><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0" data-astro-cid-3ef6ksr2></animate></path><path stroke-dasharray="30" stroke-dashoffset="30" stroke-width="2" d="M2 10L12 2L22 10" data-astro-cid-3ef6ksr2><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="30;0" data-astro-cid-3ef6ksr2></animate></path></g></svg> </a> </li> ', " <!-- dark mode toggle button --> ", ` </ul> </div> </div> </header> <script>
  function hiddeNavbar() {
    var header = document.querySelector("header");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      var isMobile = window.innerWidth <= 768;

      if (st > lastScrollTop) {
        // Desplazamiento hacia abajo
        header.style.transform = isMobile
          ? "translateY(100%)"
          : "translateY(-100%)";
      } else {
        // Desplazamiento hacia arriba
        header.style.transform = isMobile ? "translateY(0)" : "translateY(0%)";
      }

      lastScrollTop = st;
    });
  }

  function toggleShowNavMobil() {
    // Agregar un event listener para el clic en el bot\xF3n de alternancia del men\xFA m\xF3vil
    var navbarToggle = document.getElementById("mobile-menu-toggle"); // Seleccionar el bot\xF3n por su id
    navbarToggle.addEventListener("click", function () {
      var navbar = document.getElementById("navbar-default");
      navbar.classList.toggle("hidden"); // Alternar la clase 'hidden' para mostrar/ocultar el men\xFA});
    });
  }


  window.addEventListener("DOMContentLoaded", function () {
  toggleShowNavMobil();    
  hiddeNavbar();  
  }); 

//   document.addEventListener('astro:page-load', () => {     
//    toggleShowNavMobil();    
//    hiddeNavbar();
  
//  });
  document.addEventListener("astro:after-swap", () => {
    toggleShowNavMobil();
    hiddeNavbar();    
   
  });
<\/script>`])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "7zjuvqpw"), "data-astro-transition-persist"), clientsData.web_name, headerNavs.map((nav) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(nav.url, "href")} class="block py-2 capitalize px-3 text-secondary  rounded md:bg-transparent  md:p-0 dark:text-white" aria-current="page" style="    text-transform: capitalize;" data-astro-cid-3ef6ksr2> ${nav.label} </a> </li>`), renderComponent($$result, "ThemeIcon", $$ThemeIcon, { "data-astro-cid-3ef6ksr2": true }));
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/Header.astro", "self");

const $$Astro$5 = createAstro("https://castelll0009.github.io");
const $$Whatsapp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  const { w, h, bg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="none"${addAttribute(w, "width")}${addAttribute(h, "height")} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="_icon_ahikl_6"><path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"${addAttribute(bg, "fill")}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M35.5449 12.7502C32.672 9.87378 28.8462 8.288 24.7751 8.288C16.384 8.288 9.55378 15.1147 9.55022 23.5058C9.55022 26.1867 10.2507 28.8071 11.584 31.1147L9.42578 39.0009L17.4969 36.8853C19.7191 38.0978 22.2258 38.7378 24.7716 38.7378H24.7787C33.1698 38.7378 40 31.9111 40.0036 23.5164C40.0036 19.4489 38.4213 15.6267 35.5484 12.7502H35.5449ZM24.7751 36.1671H24.7716C22.4996 36.1671 20.2738 35.5556 18.3324 34.4036L17.8702 34.1298L13.0809 35.3849L14.3609 30.7164L14.0587 30.2364C12.7929 28.224 12.1244 25.8951 12.1244 23.5058C12.1244 16.5298 17.8027 10.8551 24.7858 10.8551C28.1671 10.8551 31.3422 12.1742 33.7316 14.5636C36.1209 16.9564 37.4364 20.1316 37.4329 23.5129C37.4329 30.4889 31.7547 36.1636 24.7787 36.1636L24.7751 36.1671ZM31.7156 26.6916C31.3351 26.4996 29.4649 25.5822 29.1164 25.4542C28.768 25.3262 28.5156 25.2622 28.2596 25.6462C28.0071 26.0267 27.2782 26.8836 27.0542 27.136C26.8338 27.3884 26.6098 27.4204 26.2293 27.232C25.8489 27.04 24.6222 26.6418 23.1716 25.344C22.0409 24.3342 21.2764 23.0898 21.056 22.7093C20.8356 22.3289 21.0311 22.1227 21.2231 21.9342C21.3938 21.7636 21.6036 21.4898 21.792 21.2693C21.9804 21.0489 22.0444 20.8889 22.1724 20.6364C22.3004 20.384 22.2364 20.16 22.1404 19.9716C22.0444 19.7796 21.2836 17.9093 20.9671 17.1484C20.6578 16.4053 20.3449 16.5084 20.1102 16.4942C19.8898 16.4836 19.6338 16.48 19.3813 16.48C19.1289 16.48 18.7164 16.576 18.368 16.9564C18.0196 17.3369 17.0382 18.2578 17.0382 20.128C17.0382 21.9982 18.4 23.808 18.592 24.0604C18.7804 24.3129 21.2729 28.1564 25.0916 29.8027C25.9982 30.1938 26.7093 30.4284 27.2604 30.6027C28.1707 30.8907 29.0027 30.8516 29.6569 30.752C30.3893 30.6418 31.9076 29.8311 32.224 28.9422C32.5404 28.0533 32.5404 27.2924 32.4444 27.1324C32.3484 26.9724 32.096 26.88 31.7156 26.688V26.6916Z" fill="white"></path></svg>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/icons/Whatsapp.astro", void 0);

const $$Astro$4 = createAstro("https://castelll0009.github.io");
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Mail;
  const { w, h, bg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg preserveAspectRatio="none" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="_icon_6a26g_5"><g clip-path="url(#clip0_92_7)"><path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"${addAttribute(bg, "fill")}></path><path d="M35.6836 14.2507C35.5911 13.984 35.4809 13.9093 35.3102 13.8453C34.9369 13.7031 34.304 13.9164 34.304 13.9164C34.304 13.9164 11.872 21.9804 10.592 22.8729C10.3147 23.0649 10.2222 23.1751 10.1796 23.3067C9.95913 23.9431 10.6489 24.224 10.6489 24.224L16.4302 26.1084C16.4302 26.1084 16.6471 26.1404 16.7218 26.0907C18.0374 25.2587 29.9556 17.7351 30.6418 17.4827C30.752 17.4507 30.8302 17.4862 30.8089 17.5609C30.5351 18.528 20.1849 27.7262 20.1849 27.7262C20.1849 27.7262 20.1458 27.776 20.1209 27.8329L20.1067 27.8258L19.5662 33.5609C19.5662 33.5609 19.3387 35.3173 21.0987 33.5609C22.3396 32.32 23.5378 31.2853 24.1387 30.7804C26.1262 32.1529 28.2667 33.6711 29.1876 34.464C29.6498 34.8622 30.0409 34.9262 30.3574 34.9156C31.232 34.8836 31.4774 33.92 31.4774 33.92C31.4774 33.92 35.5662 17.4684 35.7014 15.264C35.7156 15.0471 35.7334 14.912 35.7334 14.7627C35.7334 14.5564 35.7156 14.3502 35.6836 14.2507Z" fill="white"></path></g><defs><clipPath id="clip0_92_7"><rect width="48" height="48" fill="white"></rect></clipPath></defs></svg>`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/icons/Mail.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$3 = createAstro("https://castelll0009.github.io");
const $$FloatingButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FloatingButtons;
  Astro2.props;
  const subject = "Help me CAD";
  const body = "Hi! I am interested in ...";
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<!-- floating buttons -->", '<div id="floatingButtons" class="fixed flex flex-col bottom-20 md:bottom-0 right-0 z-30 gap-5 md:gap-2 md:m-8 m-2 transition-transform duration-300"> <a', ' class="w-12 h-12 md:w-14 md:h-14 cursor-pointer"> ', " </a> <a", ' class="w-12 h-12 md:w-14 md:h-14 cursor-pointer"> ', " </a> </div> <script>\n  \n// Variable para almacenar la posici\xF3n del scroll anterior\nlet lastScrollPosition = window.scrollY;\n\n// Funci\xF3n para manejar el evento de desplazamiento\nfunction handleScroll() {\n  const currentScrollPosition = window.scrollY;\n\n  // Ocultar los botones si se hace scroll hacia abajo y mostrarlos si se hace scroll hacia arriba\n  if (currentScrollPosition > lastScrollPosition) {\n    // Scroll hacia abajo\n    document.getElementById('floatingButtons').style.transform = 'translateX(100%)';\n  } else {\n    // Scroll hacia arriba\n    document.getElementById('floatingButtons').style.transform = 'translateX(0)';\n  }\n\n  // Actualizar la posici\xF3n del scroll anterior\n  lastScrollPosition = currentScrollPosition;\n}\n\n// Agregar un event listener para el evento de desplazamiento\nwindow.addEventListener('scroll', handleScroll);\n<\/script>"])), maybeRenderHead(), addAttribute(`https://wa.me/${clientsData.phone}?text=Hello%20CAD!`, "href"), renderComponent($$result, "Whatsapp", $$Whatsapp, { "w": "100%", "h": "100%", "bg": "currentColor" }), addAttribute(`mailto:${clientsData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "href"), renderComponent($$result, "Mail", $$Mail, { "w": "100%", "h": "100%", "bg": "currentColor" }));
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/icons/FloatingButtons.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://castelll0009.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, subtitle, description } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"', '> <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&display=swap"><!-- dark mode  from flobite --><!-- flowbite link --><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta', "", '><meta name="google-site-verification" content="fGktjHCQjBR4YHgvqwZHd9gLTJY6134Ws_WQqk2XMX4"><title>', " | ", "</title><!-- <ViewTransitions /> -->", "</head> <body> ", ' <main class="mx-auto p-0"> <div', "> ", " </div> ", " ", ' </main> <!-- flowbite scripts --> <!-- <script is:inline src="../path/to/flowbite/dist/flowbite.min.js"><\/script> --> <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"><\/script> <script>\n            // On page load or when changing themes, best to add inline in `head` to avoid FOUC\n            if (\n                localStorage.getItem("color-theme") === "dark" ||\n                (!("color-theme" in localStorage) &&\n                    window.matchMedia("(prefers-color-scheme: dark)").matches)\n            ) {\n                document.documentElement.classList.add("dark");\n            } else {\n                document.documentElement.classList.remove("dark");\n            }\n        <\/script> <!-- swiper bundle --> <!-- Add this script tag to your HTML --> <script src="https://unpkg.com/swiper/swiper-bundle.min.js"><\/script> <!-- cliente supabase -->  <!-- or -->  </body> </html>'], ['<html lang="en"', '> <head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;700&display=swap"><!-- dark mode  from flobite --><!-- flowbite link --><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta', "", '><meta name="google-site-verification" content="fGktjHCQjBR4YHgvqwZHd9gLTJY6134Ws_WQqk2XMX4"><title>', " | ", "</title><!-- <ViewTransitions /> -->", "</head> <body> ", ' <main class="mx-auto p-0"> <div', "> ", " </div> ", " ", ' </main> <!-- flowbite scripts --> <!-- <script is:inline src="../path/to/flowbite/dist/flowbite.min.js"><\/script> --> <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"><\/script> <script>\n            // On page load or when changing themes, best to add inline in \\`head\\` to avoid FOUC\n            if (\n                localStorage.getItem("color-theme") === "dark" ||\n                (!("color-theme" in localStorage) &&\n                    window.matchMedia("(prefers-color-scheme: dark)").matches)\n            ) {\n                document.documentElement.classList.add("dark");\n            } else {\n                document.documentElement.classList.remove("dark");\n            }\n        <\/script> <!-- swiper bundle --> <!-- Add this script tag to your HTML --> <script src="https://unpkg.com/swiper/swiper-bundle.min.js"><\/script> <!-- cliente supabase -->  <!-- or -->  </body> </html>'])), addAttribute(renderTransition($$result, "iaqcb4am", "none", ""), "data-astro-transition-scope"), addAttribute(title, "name"), addAttribute(description, "content"), title, subtitle, renderHead(), renderComponent($$result, "Header", $$Header, {}), addAttribute(renderTransition($$result, "f6ducegj", "slide", ""), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "FloatingButtons", $$FloatingButtons, {}));
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/layouts/layout.astro", "self");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://castelll0009.github.io");
const $$Mensaje = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Mensaje;
  return renderTemplate(_a || (_a = __template(["", '<div class="section flex  flex-row flex-wrap items-center justify-center mb-0 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700   bg-white dark:bg-gray-800" style="padding: 100px" data-astro-cid-b2xu5wdd> <figure class="flex max-w-fit p-5 m-4 mb-10 ml-10  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Benjamin Castell</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Creador de Multimedia</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I need my professional website \u{1F4BC}" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-3 ml-20 -mb-20  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.5s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Steven Gomez</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Propietario Mundo Moda</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\xBFC\xF3mo \u{1F3A8} dise\xF1ar un logo en un d\xEDa? " required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 mr-28  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.1s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Ovidio Castro</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Vendedor de dispositivos para pc</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Vendedor y marketero</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How to  pay for ads and SEO? \u{1F4B3}\u{1F50D}" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.5s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Laura Osorio</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Vendedor de dispositivos para pc</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Vendedor y marketero</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="!Necesito el Branding para mi empresa :(" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-1 mt-10  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.5s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ` <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Juan David</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Vendedor de dispositivos para pc</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Vendedor y marketero</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I don't like \u{1F44E}my Web Design " required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 -mt-10 -mr-10  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.5s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> `, ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Pablo Sanchez</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Vendedor de dispositivos para pc</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Vendedor y marketero</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\u{1F4BB}\u{1F622}!Mi web no carga y luce mal " required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 mt-12 min-w-[400px] border rounded-lg flex-col items-center justify-center text-center bg-white border-gray-200 md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center" data-astro-cid-b2xu5wdd> ', ` <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Maria Rodriguez</div> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\u{1F680}How to improve my website's loading speed?" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 ml-12 min-w-[400px] border rounded-lg flex-col items-center justify-center text-center bg-white border-gray-200 md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center" data-astro-cid-b2xu5wdd> `, ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Carolina Torres</div> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\xBFCu\xE1l es la importancia del SEO para mi negocio?" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 min-w-[400px] border rounded-lg flex-col items-center justify-center text-center bg-white border-gray-200 md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center" data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Andr\xE9s Lopez</div> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\xBFC\xF3mo aumentar mis seguidores en redes sociales?" required data-astro-cid-b2xu5wdd> </div> </form> </figure> </div> <script>\n    // Agrega este script para aplicar el efecto de aparici\xF3n a las figuras de forma aleatoria\n    const figures = document.querySelectorAll(\'.fade-in\');\n    figures.forEach((figure) => {\n      const randomDelay = Math.random() * 1.5; // Ajusta el rango seg\xFAn tus necesidades\n      figure.style.animationDelay = `${randomDelay}s`;\n    });\n  <\/script>'], ["", '<div class="section flex  flex-row flex-wrap items-center justify-center mb-0 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700   bg-white dark:bg-gray-800" style="padding: 100px" data-astro-cid-b2xu5wdd> <figure class="flex max-w-fit p-5 m-4 mb-10 ml-10  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Benjamin Castell</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Creador de Multimedia</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I need my professional website \u{1F4BC}" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-3 ml-20 -mb-20  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.5s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Steven Gomez</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Propietario Mundo Moda</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\xBFC\xF3mo \u{1F3A8} dise\xF1ar un logo en un d\xEDa? " required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 mr-28  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.1s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Ovidio Castro</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Vendedor de dispositivos para pc</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Vendedor y marketero</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How to  pay for ads and SEO? \u{1F4B3}\u{1F50D}" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.5s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Laura Osorio</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Vendedor de dispositivos para pc</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Vendedor y marketero</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="!Necesito el Branding para mi empresa :(" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-1 mt-10  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.5s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> ', ` <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Juan David</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Vendedor de dispositivos para pc</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Vendedor y marketero</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I don't like \u{1F44E}my Web Design " required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 -mt-10 -mr-10  min-w-[400px] border rounded-lg flex-col items-center justify-center  text-center bg-white   border-gray-200  md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" style="animation-delay: 0.5s;" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center " data-astro-cid-b2xu5wdd> `, ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Pablo Sanchez</div> <!-- <div class="text-sm text-gray-500 dark:text-gray-400 ">Vendedor de dispositivos para pc</div> --> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Vendedor y marketero</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\u{1F4BB}\u{1F622}!Mi web no carga y luce mal " required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 mt-12 min-w-[400px] border rounded-lg flex-col items-center justify-center text-center bg-white border-gray-200 md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center" data-astro-cid-b2xu5wdd> ', ` <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Maria Rodriguez</div> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\u{1F680}How to improve my website's loading speed?" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 ml-12 min-w-[400px] border rounded-lg flex-col items-center justify-center text-center bg-white border-gray-200 md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center" data-astro-cid-b2xu5wdd> `, ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Carolina Torres</div> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\xBFCu\xE1l es la importancia del SEO para mi negocio?" required data-astro-cid-b2xu5wdd> </div> </form> </figure> <figure class="flex max-w-fit p-5 m-4 min-w-[400px] border rounded-lg flex-col items-center justify-center text-center bg-white border-gray-200 md:rounded-t-none md:rounded-ss-lg dark:bg-gray-800 dark:border-gray-700 fade-in" data-astro-cid-b2xu5wdd> <figcaption class="flex items-center justify-center" data-astro-cid-b2xu5wdd> ', ' <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3" data-astro-cid-b2xu5wdd> <div data-astro-cid-b2xu5wdd>Andr\xE9s Lopez</div> </div> </figcaption> <form class="min-w-full" data-astro-cid-b2xu5wdd> <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" data-astro-cid-b2xu5wdd>Search</label> <div class="relative" data-astro-cid-b2xu5wdd> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none" data-astro-cid-b2xu5wdd> <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" data-astro-cid-b2xu5wdd> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" data-astro-cid-b2xu5wdd></path> </svg> </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="\xBFC\xF3mo aumentar mis seguidores en redes sociales?" required data-astro-cid-b2xu5wdd> </div> </form> </figure> </div> <script>\n    // Agrega este script para aplicar el efecto de aparici\xF3n a las figuras de forma aleatoria\n    const figures = document.querySelectorAll(\'.fade-in\');\n    figures.forEach((figure) => {\n      const randomDelay = Math.random() * 1.5; // Ajusta el rango seg\xFAn tus necesidades\n      figure.style.animationDelay = \\`\\${randomDelay}s\\`;\n    });\n  <\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "94", "height": "94", "src": "https://img.icons8.com/3d-fluency/94/youtube-play.png", "alt": "youtube-play", "data-astro-cid-b2xu5wdd": true }), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "94", "height": "94", "src": "https://img.icons8.com/3d-fluency/94/chrome.png", "alt": "chrome", "data-astro-cid-b2xu5wdd": true }), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "48", "height": "48", "src": "https://img.icons8.com/fluency/48/facebook.png", "alt": "facebook", "data-astro-cid-b2xu5wdd": true }), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "48", "height": "48", "src": "https://img.icons8.com/color/48/whatsapp--v1.png", "alt": "whatsapp--v1", "data-astro-cid-b2xu5wdd": true }), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "48", "height": "48", "src": "https://img.icons8.com/fluency/48/instagram-new.png", "alt": "instagram-new", "data-astro-cid-b2xu5wdd": true }), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "48", "height": "48", "src": "https://img.icons8.com/color-glass/48/gmail.png", "alt": "gmail", "data-astro-cid-b2xu5wdd": true }), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "48", "height": "48", "src": "https://img.icons8.com/color/48/google-logo.png", "alt": "google-logo", "data-astro-cid-b2xu5wdd": true }), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "48", "height": "48", "src": "https://img.icons8.com/ios-filled/50/tiktok--v1.png", "alt": "tiktok--v1", "data-astro-cid-b2xu5wdd": true }), renderComponent($$result, "Image", $$Image, { "class": "rounded-full w-9 h-9", "width": "48", "height": "48", "src": "https://img.icons8.com/pulsar-line/48/threads.png", "alt": "threads", "data-astro-cid-b2xu5wdd": true }));
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/components/CADD/Mensaje.astro", void 0);

const $$Astro = createAstro("https://castelll0009.github.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "subtitle": "Go back" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section " style="background: white; padding-top: 100px; min-height: 50vh;"> <h1 class="text-6xl flex items-center justify-center dark:text-white">404 Sorry, this page does not exist.</h1> </div> ${renderComponent($$result2, "Mensaje", $$Mensaje, {})} ` })}`;
}, "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/404.astro", void 0);

const $$file = "C:/Users/CASTELL/Documents/GitHub/ASTRO/Unikit-face-supabase/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$Image as a, clientsData as c, getConfiguredImageService as g, imageConfig as i };
