const bitField = require("./packages/bitfields/index");

exports.AES = require("./packages/aes256");
exports.Minesweeper = require("./packages/minesweeper");
exports.randomWords = require("./packages/random/words");
exports.randomWeight = require("./packages/random/weight");
exports.Languages = require("./packages/languages");
exports.SlashBuilder = require("./packages/SlashBuilder");

exports.BitField = bitField.BitField;
exports.UserFlags = bitField.UserFlags;
exports.Permissions = bitField.Permissions;