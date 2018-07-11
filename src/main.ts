/**
 * @param target
 * @param allowEmpty - Whether allow `[]` to pass test.
 *                     (Notice: `undefined`, `null` element in array will never pass.)
 */
export function isStringArray(target: any, allowEmpty: boolean = true): target is string[] {
  if (!Array.isArray(target)) { return false }

  if (target.length === 0 && allowEmpty !== true) { return false }

  for (const item of target as any[]) {
    if (typeof item !== 'string') { return false }
  }

  return true
}

export default isStringArray
