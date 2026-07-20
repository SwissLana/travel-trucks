export function formatLocation(location) {
  if (typeof location !== 'string') {
    return '';
  }

  const parts = location
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 2) {
    return location.trim();
  }

  return parts.reverse().join(', ');
}
