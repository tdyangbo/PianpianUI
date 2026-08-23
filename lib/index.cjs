"use strict";

exports.name = "dsh-pianpian-ui";

exports.apply = function apply(ctx) {
  const logger = ctx && ctx.logger;
  if (logger && typeof logger.info === "function") {
    logger.info("pianpian UI background plugin loaded");
  }
};
