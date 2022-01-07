/**
 * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
 * and they does not need to remember the prefix (defined once).
 */
export default function createGetCssVar<T extends string = string>(prefix: string = '') {
  function appendVar(...vars: string[]): string {
    if (!vars.length) {
      return '';
    }
    return `, var(--${prefix ? `${prefix}-` : ''}${vars[0]}${appendVar(...vars.slice(1))})`;
  }

  // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
  const getCssVar = <AdditionalVars extends string = never>(
    field: T | AdditionalVars,
    ...vars: (T | AdditionalVars)[]
  ) => {
    return `var(--${prefix ? `${prefix}-` : ''}${field}${appendVar(...vars)})`;
  };
  return getCssVar;
}
