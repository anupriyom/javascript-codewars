function consonantCount(str) {
  const consonants = new Set('bcdfghjklmnpqrstvwxyz')
  return [...str.toLowerCase()].reduce((acc, x) => consonants.has(x) ? acc + 1: acc, 0)
}
