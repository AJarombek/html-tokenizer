# html-tokenizer

![Maintained Label](https://img.shields.io/badge/Maintained-Yes-brightgreen?style=for-the-badge)

### Overview

Node.js module that converts HTML to a tokenized JSON representation.  Utilized by blog posts on `jarombek.com`.

### Commands

**Initial Setup**

```bash
nvm use 18.16.1
npm install -g
```

**Tokenizing Example**

```bash
tokenize ../jarombek-com-posts/2020/09-27-jenkins-ec2.html -o parsed.json
```

### Files

| Filename                | Description                                                       |
|-------------------------|-------------------------------------------------------------------|
| `.eslintrc.js`          | Configuration for ESLint.                                         |
| `.prettierignore`       | File patterns for the Prettier code formatter to ignore.          |
| `.prettierrc`           | Configuration for Prettier.                                       |
| `package.json`          | Entry point for the npm module.  Contains dependency definitions. |
| `yarn.lock`             | Where Yarn stores the versions of each dependency.                |

### Version History

**[V.1.0.1](https://github.com/AJarombek/html-tokenizer/tree/v1.0.1) - GitHub Actions**

> Release Date: October 7th, 2023

* Add GitHub Actions for Linting and Formatting
* Add ESLint and Prettier Configuration

**[V.1.0.0](https://github.com/AJarombek/html-tokenizer/tree/v1.0.0) - Initial Release**

> Release Date: August 24th, 2019