// script.js
const stopwords = new Set([
  "a","about","above","after","again","against","all","am","an","and","any","are","aren't","as","at",
  "be","because","been","before","being","below","between","both","but","by","can't","cannot","could",
  "couldn't","did","didn't","do","does","doesn't","doing","don't","down","during","each","few","for",
  "from","further","had","hadn't","has","hasn't","have","haven't","having","he","he'd","he'll","he's",
  "her","here","here's","hers","herself","him","himself","his","how","how's","i","i'd","i'll","i'm","i've",
  "if","in","into","is","isn't","it","it's","its","itself","let's","me","more","most","mustn't","my",
  "myself","no","nor","not","of","off","on","once","only","or","other","ought","our","ours","ourselves",
  "out","over","own","same","shan't","she","she'd","she'll","she's","should","shouldn't","so","some",
  "such","than","that","that's","the","their","theirs","them","themselves","then","there","there's","these",
  "they","they'd","they'll","they're","they've","this","those","through","to","too","under","until","up",
  "very","was","wasn't","we","we'd","we'll","we're","we've","were","weren't","what","what's","when","when's",
  "where","where's","which","while","who","who's","whom","why","why's","with","won't","would","wouldn't","you",
  "you'd","you'll","you're","you've","your","yours","yourself","yourselves"
]);

function splitIntoSentences(text) {
  const regex = /[^\.!\?]+[\.!\?]+["']?|[^\.!\?]+$/g;
  const matches = text.match(regex) || [];
  return matches.map(s => s.trim()).filter(Boolean);
}

function tokenizeWords(text) {
  return text
    .toLowerCase()
    .replace(/[\d\W_]+/g, ' ')
    .split(/\s+/)
    .filter(w => w && !stopwords.has(w) && w.length > 1);
}

function buildWordFreq(tokens) {
  const freq = Object.create(null);
  tokens.forEach(w => freq[w] = (freq[w] || 0) + 1);
  return freq;
}

function scoreSentences(sentences, wordFreq) {
  return sentences.map((s, idx) => {
    const tokens = tokenizeWords(s);
    if (tokens.length === 0) return { idx, score: 0 };
    const score = tokens.reduce((sum, t) => sum + (wordFreq[t] || 0), 0) / Math.sqrt(tokens.length);
    return { idx, score };
  });
}

function summarize(text, numSentences = 3) {
  const sentences = splitIntoSentences(text);
  if (sentences.length <= numSentences) return {summary: sentences.join(' '), sentences};
  const allTokens = tokenizeWords(text);
  const wordFreq = buildWordFreq(allTokens);
  const scored = scoreSentences(sentences, wordFreq);
  const top = scored.sort((a,b) => b.score - a.score).slice(0, numSentences)
    .sort((a,b) => a.idx - b.idx) // restore original order
    .map(x => sentences[x.idx]);
  return { summary: top.join(' '), sentences, selectedIndices: top.map(s => sentences.indexOf(s)) };
}

// UI wiring
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('inputText');
  const btn = document.getElementById('summarizeBtn');
  const summaryArea = document.getElementById('summaryArea');
  const summaryText = document.getElementById('summaryText');
  const numSentences = document.getElementById('numSentences');
  const origArea = document.getElementById('origArea');
  const origSentences = document.getElementById('origSentences');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const clearBtn = document.getElementById('clearBtn');

  btn.addEventListener('click', () => {
    const text = input.value.trim();
    if (!text) { alert('Please paste some text to summarize.'); return; }
    const N = parseInt(numSentences.value, 10) || 3;
    const result = summarize(text, N);
    summaryText.textContent = result.summary;
    summaryArea.classList.remove('hidden');

    // show original sentences and highlight the chosen ones
    origSentences.innerHTML = '';
    result.sentences.forEach((s, idx) => {
      const div = document.createElement('div');
      div.className = 'orig-sentence' + (result.selectedIndices && result.selectedIndices.includes(idx) ? ' selected' : '');
      div.textContent = s;
      origSentences.appendChild(div);
    });
    origArea.classList.remove('hidden');
  });

  copyBtn.addEventListener('click', async () => {
    const text = summaryText.textContent;
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = 'Copied!';
      setTimeout(()=> copyBtn.textContent = 'Copy', 1200);
    } catch (e) {
      alert('Copy failed: ' + e);
    }
  });

  downloadBtn.addEventListener('click', () => {
    const text = summaryText.textContent;
    if (!text) return;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'summary.txt'; document.body.appendChild(a);
    a.click(); a.remove(); URL.revokeObjectURL(url);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    summaryArea.classList.add('hidden'); origArea.classList.add('hidden');
  });
});
