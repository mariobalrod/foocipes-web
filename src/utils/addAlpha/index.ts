const HEX_LENGTH = 7;

export function addAlpha(hex: string, alpha: number): string {
  // get every pair of numbers in hex (every channel), and parse it to base 16
  const rgb = hex
    .replace('#', '')
    .match(/.{2}/g)
    ?.map((channel) => parseInt(channel, 16))
    .join(',');

  if (!rgb || hex.length !== HEX_LENGTH)
    throw new Error('Incorrect hexadecimal value, expects #000000 format');

  return `rgba(${rgb},${alpha})`;
}
