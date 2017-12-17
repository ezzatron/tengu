const MAGIC_CONSTANT = 386.4

export function stringTension (weight, length, frequency) {
  return (weight * ((2 * length * frequency) ** 2)) / MAGIC_CONSTANT
}
