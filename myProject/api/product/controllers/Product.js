'use strict';

/**
 * Product.js controller
 *
 * @description: A set of functions called "actions" for managing `Product`.
 */

module.exports = {

  /**
   * Retrieve product records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.product.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a product record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.product.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an product record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.product.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an product record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.product.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an product record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.product.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
