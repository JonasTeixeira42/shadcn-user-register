function getInitialLetters(name: string) {
  const splittedName = name.split(' ')

  const arrayName =
    splittedName.length < 2
      ? splittedName
      : [splittedName[0], splittedName[splittedName.length - 1]]

  return arrayName
    .slice(0, 2)
    .map((word) => word[0].charAt(0).toUpperCase())
    .join('')
}

export { getInitialLetters }
