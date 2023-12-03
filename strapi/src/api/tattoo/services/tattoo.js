'use strict';

/**
 * tattoo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tattoo.tattoo');
