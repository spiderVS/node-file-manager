const _checkError = (e) => {
  switch (e.code) {
    case 'EEXIST':
      const eexistErr = new Error('File already exists');
      eexistErr.code = e.code;
      throw eexistErr;

    case 'ENOENT':
      const enoentErr = new Error('No such file or directory');
      enoentErr.code = e.code;
      throw enoentErr;

    default:
      throw new Error('Operation failed');
  }
}

export { _checkError };
