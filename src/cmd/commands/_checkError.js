const _checkError = (e) => {
  switch (e.code) {
    case 'EEXIST':
      throw new Error('File already exists');

    case 'ENOENT':
      throw new Error('No such file or directory');

    default:
      throw new Error('Operation failed');
  }
}

export { _checkError };
