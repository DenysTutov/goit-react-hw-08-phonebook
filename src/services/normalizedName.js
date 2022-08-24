export const normalizedName = name => {
  return name
    .trim()
    .split(/\s+/)
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
};
