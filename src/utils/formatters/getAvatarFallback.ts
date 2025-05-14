function getInitialLetters(name: string) {
  const splittedName = name.split(' ')

  return splittedName.map((word) => word[0].charAt(0).toUpperCase()).join('')
}

export { getInitialLetters }
