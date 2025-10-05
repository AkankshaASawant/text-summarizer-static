# 🧠 Tiny Text Summarizer

### A Simple AI-Powered App built as part of my AI Internship Assignment

> **Goal:** Build a small AI-powered app that summarizes any news article or blog post into **3 concise sentences** — with a simple, clean UI and deployable for **free on GitHub Pages**.

---

## 📘 Project Description & Goal

This project is a **Tiny Text Summarizer**, a lightweight web app that takes a block of text (such as a news article or blog post) and produces a **3-sentence extractive summary**.

The summarizer runs **entirely in the browser (client-side)** using **HTML, CSS, and JavaScript** — no backend required.
It demonstrates the power of **extractive AI techniques** that can identify the most important parts of a document without needing a large pre-trained model.

### 🎯 Key Features

* Paste any text and get a **3-sentence summary** instantly.
* Works **offline**, no API calls or keys required.
* Highlights which original sentences were chosen.
* Displays **Top 5 Keywords** extracted from the article.
* Includes a **loading animation** (spinner) for smooth UX.
* Allows **copying** or **downloading** the summary as `.txt`.
* 100% deployable on **GitHub Pages** for free hosting.

---

## ⚙️ How the Summarizer Works

### 🧩 Algorithm Type: *Extractive Summarization*

This app uses a **Term Frequency (TF)-based extractive algorithm** — a classic and explainable AI technique.

### 🧠 Step-by-step Process

1. **Text Preprocessing:**

   * Split the input text into individual sentences.
   * Tokenize words and remove **stopwords** (common words like “and”, “the”, “is”).

2. **Word Frequency Calculation:**

   * Count how often each remaining word appears.
   * Frequent words are assumed to represent the main topics.

3. **Sentence Scoring:**

   * Each sentence is scored by summing the frequencies of its words.
   * The score is normalized by sentence length to balance long and short sentences.

4. **Sentence Selection:**

   * The top **N sentences** (default 3) with the highest scores are selected.
   * Their **original order** is preserved for readability.

5. **Keyword Extraction:**

   * The app extracts the top 5 most frequent non-stop words to show the main keywords.

This approach is **interpretable, fast, and transparent**, making it ideal for small, educational AI projects.

---

## 💻 How to Run the Static Version Locally

1. **Download or clone** this repository:

   ```bash
   git clone https://github.com/<your-username>/tiny-text-summarizer.git
   cd tiny-text-summarizer
   ```

2. **Open the app locally:**
   Simply double-click `index.html` to open it in your browser.
   *(No installation or setup required.)*

3. **Paste any article** text in the input box and click **Summarize**.
   You’ll instantly see:

   * The 3-sentence summary
   * The top 5 keywords
   * Highlighted original sentences

---

## 🌐 How to Deploy to GitHub Pages (Step-by-Step)

1. **Create a new GitHub repository** (e.g., `tiny-text-summarizer`).

2. **Add all project files** (`index.html`, `style.css`, `script.js`, `README.md`).

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Tiny Text Summarizer"
   git branch -M main
   git remote add origin https://github.com/<your-username>/tiny-text-summarizer.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**

   * Go to your repository on GitHub → **Settings → Pages**
   * Under *Source*, select **Branch: main**, Folder: **/(root)**
   * Click **Save**

4. Wait 1–2 minutes, then open your deployed app at:

   ```
   https://<your-username>.github.io/tiny-text-summarizer/
   ```

🎉 Your AI-powered summarizer is now live!

---

## 🖼️ Screenshots

*(Replace these placeholders with your actual screenshots or GIFs once you test the app.)*

| Input Screen                           | Summary Output                           |
| -------------------------------------- | ---------------------------------------- |
| ![Input Screen](screenshots/input.png) | ![Output Screen](screenshots/output.png) |

If possible, record a short **GIF demo** using a free tool like **ScreenToGif** or **Loom**, showing:

* Pasting an article
* Spinner animation
* 3-sentence summary & keywords appearing

---

## 🧪 What I Tried and Problems I Encountered

* 🔍 **Tried using external summarization APIs (OpenAI / Hugging Face)** but decided against it because:

  * It required API keys and server-side code.
  * Would not be deployable on GitHub Pages (which supports only static files).

* 🧰 **Attempted to use a text extraction library** (like `newspaper3k`) to automatically fetch article text from URLs.

  * This required additional Python dependencies and backend setup, which went beyond the “tiny” scope.
  * I decided to keep the app simple — users paste text manually.

* ⚙️ **UI Adjustments:**

  * At first, the summary appeared instantly with no feedback.
  * I added a spinner animation to improve user experience and make the process feel interactive.

* 🌍 **Deployment Issue:**

  * Flask version couldn’t be hosted on GitHub Pages (static only).
  * I created a **static JavaScript version** to meet the “deploy for free” requirement.

Each challenge helped me understand trade-offs between **server-side** and **client-side** AI apps.

---

## 🌟 Extra Touches Added and Why

| Feature                            | Description                                            | Why It Matters                                              |
| ---------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| 🪄 **Keyword Extraction**          | Displays top 5 most frequent words from the text.      | Gives users quick insight into the article’s core themes.   |
| 🔄 **Loading Animation (Spinner)** | A subtle rotating loader while generating the summary. | Adds professionalism and improves user experience.          |
| 🧩 **Sentence Highlighting**       | Shows which sentences were used in the summary.        | Makes the extractive process transparent and interpretable. |
| 📋 **Copy & Download Buttons**     | Easily copy or save the generated summary.             | Improves usability and practicality.                        |

---

## 🧭 Future Improvements

If I continue building this project, I’d like to:

* Add a **reading time estimator** and **word count**.
* Integrate **Hugging Face Transformers** (like `t5-small`) for *abstractive* summaries.
* Allow users to **paste a URL** and automatically fetch article text.
* Add a **light/dark theme toggle** and more animations.

---

## 🧑‍💻 Tech Stack

| Layer      | Technology                                    |
| ---------- | --------------------------------------------- |
| Frontend   | HTML, CSS, JavaScript                         |
| Algorithm  | Extractive summarization using word frequency |
| Deployment | GitHub Pages                                  |
| Tools      | VS Code, Chrome Developer Tools, Git          |

---

## 📄 License

This project is open-source and available under the **MIT License**.
Feel free to fork, modify, and learn from it.

---

## ✍️ Author

**Akanksha Sawant**
📍 Pune, India
💼 Data Science Graduate | Aspiring AI Engineer
🔗 [LinkedIn]([https://www.linkedin.com/in/](https://www.linkedin.com/in/akanksha-sawant-29260226a)) | [GitHub]([https://github.com/](https://github.com/AkankshaASawant))

---

### ⭐ Summary

This project demonstrates how a small, client-side AI app can:

* Perform meaningful NLP tasks (summarization & keyword extraction),
* Provide a clear, interpretable output, and
* Be hosted **freely** using **GitHub Pages**.

---
