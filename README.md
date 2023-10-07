# html-tokenizer

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

| Filename                 | Description                                                                |
|--------------------------|----------------------------------------------------------------------------|
| `index.js`               | Command line application entry point which defines the tokenize command.   |
| `package.json`           | Entry point for the npm module.  Contains dependency definitions.          |
| `setup.sh`               | Bash commands to set up the npm module.                                    |
| `tokenize.js`            | Functions which parse the HTML and convert it to JSON.                     |
| `.yarn.lock`             | Where Yarn stores the versions of each dependency.                         |

### Version History

**[V.1.0.1](https://github.com/AJarombek/html-tokenizer/tree/v1.0.1) - GitHub Actions**

> Release Date: October 7th, 2023

* Add GitHub Actions for Linting and Formatting
* Add ESLint and Prettier Configuration

**[V.1.0.0](https://github.com/AJarombek/html-tokenizer/tree/v1.0.0) - Initial Release**

> Release Date: August 24th, 2019