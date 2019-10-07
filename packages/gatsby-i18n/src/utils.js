export function isBrowser() {
  return typeof window === 'undefined';
}

export const resolveLocalizedPath = (localizedPaths = {}, path) => (lang) => {
  const localizedPath = localizedPaths[path] || localizedPaths[path.split(0, path.length - 2)];

  if (!localizedPath) {
    return path;
  }

  return localizedPath[lang] || path;
}