import clsx from "clsx";

import type { ClassValue } from "clsx";

/**
 * Class names
 *
 * @description Wrapper of `clsx` class names utility
 *
 * @param {Array} args
 *
 * @returns {String} Concatenated class names
 */
export function cn(...args: Array<ClassValue>): string {
  return clsx(...args);
}
