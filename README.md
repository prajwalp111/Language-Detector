# 🌍 Language Detector CLI Tool

A simple command-line tool to detect the language of a given text using [franc](https://www.npmjs.com/package/franc), [langs](https://www.npmjs.com/package/langs), and [colors](https://www.npmjs.com/package/colors).

---

## 🚀 Features

- Detects the language from user-provided input text
- Outputs the full language name (e.g., English, Hindi, etc.)
- Provides color-coded output using the `colors` package
- Handles unknown/ambiguous inputs gracefully

---

## 🧑‍💻 Prerequisites

- Node.js installed (version 12 or above recommended)
- Basic understanding of using terminal or command prompt

---

## 📦 Installation

1. Clone this repository or copy the code into a file (e.g., `detect.js`)
2. Run the following commands in your terminal:

```bash
npm init -y
npm install franc langs colors
```

---

## 📝 Usage

```bash
node detect.js "Your text goes here"
```

### Example:

```bash
node detect.js "Bonjour tout le monde"
```

### Output:

```bash
your language is : French
```

If the input text is too short or ambiguous, you'll see:

```bash
sorry i cant find u r language or may be more words
```

---

## 🧠 How It Works

1. Takes user input from the command line.
2. Uses `franc` to detect the language ISO 639-3 code.
3. Maps the code to the full language name using `langs`.
4. Prints the result in green for known languages or red if the language is undetermined.

---

## 🛠 Code Overview

```js
import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];
const langCode = franc(input);

if(langCode === 'und'){
    console.log('sorry i cant find u r language or may be more words'.red);
} else {
    const language = langs.where("3", langCode);
    console.log(`your language is : ${language.name}`.green);
}
```

---


## 🤝 Contributing

Feel free to fork the project and submit pull requests to improve the detection or add features!
