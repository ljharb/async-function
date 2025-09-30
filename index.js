'use strict';

// eslint-disable-next-line no-extra-parens, no-empty-function
const cached = /** @type {import('./index.d.ts').AsyncFunctionConstructor} */ (async function () {}.constructor);

/** @type {import('./index.d.ts')} */
module.exports = () => cached;

