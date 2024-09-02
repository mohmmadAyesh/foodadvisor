'use strict';

/**
 * ayosh service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ayosh.ayosh');
