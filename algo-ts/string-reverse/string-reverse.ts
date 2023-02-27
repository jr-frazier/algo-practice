export function reverseString(str: string) {
  let placeholder = [];

  for (let i = 0; i < str.length; i++) {
    placeholder.unshift(str[i]);
  }

  return placeholder.join("");
}
