export function objectPropertiesAreEqual(baseObject: Record<string, unknown>, compareObject: Record<string, unknown>) {
  return Object.entries(compareObject).every(([key, value]) => value === baseObject?.[key]);
}
