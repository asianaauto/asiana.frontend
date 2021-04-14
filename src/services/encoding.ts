export function encoding(text: string) {
  return text
    .split('')
    .map((value) => value.charCodeAt(0) ^ 1)
    .join('');
}
