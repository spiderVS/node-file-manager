# File-manager

A simple but functional file manager :)

The file manager is able to perform the following operations:

- Perform basic file operations (copy, move, delete, rename, etc.);
- Get information about the host machine operating system;
- Perform hash calculations;
- Compress and decompress files(Brotli algorithm).

To see all supported commands after launching the file manager, please type `help`.

## Start application

To start the application you should use **18 LTS** version of Node.js.

1. Go to folder `file-manager`.
2. Start file-manager by npm-script:
```javascript
npm run start -- --username=your_username
```

  > `your_username` - Your preferred name
  >
  > for example:
  >`npm run start -- --username=John`

## Usage:

## **up**

**Usage:**

```bash
  up
```
**Action:** Go upper from current directory (equivalent 'cd ..')

---
## **cd**
**Usage:**

```bash
  cd [PATH_TO_DIRECTORY]
```
**Action:** Go to dedicated folder from current directory

    [PATH_TO_DIRECTORY] can be relative or absolute)

---
## **ls**
**Usage:**

```bash
  ls
```
**Action:** Print in console list of all files and folders in current directory

---
## **cat**
**Usage:**

```bash
  cat [PATH_TO_FILE]
```
**Action:** Read file and print it's content in console

---
## **add**
**Usage:**

```bash
  add [NEW_FILENAME]
```
**Action:** Create empty file in current working directory

---
## **rn**
**Usage:**

```bash
  rn [PATH_TO_FILE] [NEW_FILENAME]
```
**Action:** Rename file

---
## **cp**
**Usage:**

```bash
  cp [PATH_TO_FILE] [PATH_TO_NEW_DIRECTORY]
```
**Action:** Copy file to the specified directory

---
## **mv**
**Usage:**

```bash
  mv [PATH_TO_FILE] [PATH_TO_NEW_DIRECTORY]
```
**Action:** Move file to the specified directory

---
## **rm**
**Usage:**

```
  rm [PATH_TO_FILE]
```
**Action:** Delete file

---
## **os**
**Usage:**

```bash
os [OPTION]
```

> `[OPTION]:`
>
>    `--EOL`          - Print EOL (default system End-Of-Line)
>
>    `--cpus`         - Print host machine CPUs info
>
>    `--homedir`      - Print home directory of current system user
>
>    `--username`     - Print current system user name
>
>    `--architecture` - Print current CPU architecture

---
## **hash**
**Usage:**

```bash
  hash [PATH_TO_FILE]
```

**Action:** Calculate SHA256 hash for specified file

---
## **compress**
**Usage:**

```bash
  compress [PATH_TO_FILE] [PATH_TO_DESTINATION_FILE]
```

**Action:** Compress file (using Brotli algorithm)

---
## **decompress**
**Usage:**

```bash
  decompress [PATH_TO_FILE] [PATH_TO_DESTINATION_FILE]
```

**Action:** Decompress file (using Brotli algorithm)

---
*P.S. Thanks for using my application ;)*
