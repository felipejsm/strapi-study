'use strict';

/**
 * MyTodoList.js controller
 *
 * @description: A set of functions called "actions" for managing `MyTodoList`.
 */

module.exports = {

  /**
   * Retrieve myTodoList records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    const data = await strapi.services.myTodoList.fetchAll(ctx.query);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Retrieve a myTodoList record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    const data = await strapi.services.myTodoList.fetch(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Create a/an myTodoList record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    const data = await strapi.services.myTodoList.add(ctx.request.body);

    // Send 201 `created`
    ctx.created(data);
  },

  /**
   * Update a/an myTodoList record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    const data = await strapi.services.myTodoList.edit(ctx.params, ctx.request.body) ;

    // Send 200 `ok`
    ctx.send(data);
  },

  /**
   * Destroy a/an myTodoList record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    const data = await strapi.services.myTodoList.remove(ctx.params);

    // Send 200 `ok`
    ctx.send(data);
  }
};
