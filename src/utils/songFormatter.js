const regex = {
  capo: /.*capo (\d+).*/i,
  comment: /^# ?(.*)/, // everything after a '#'
  chordWords: /([^>\s]*\[[^\]]*?\][^\s<]*)/g, // a word with a chord in it
  chords: /\[(.*?)\]/g, // anything inside square brackets
  chorus: /(\n|^)(( {4}.*(?:\n|$))+)/g, // block with 4 spaces at the front of each line is a chorus
  hasChords: /.*\[.*\].*/, // has square brackets
  boldText: /\*\*(.+?)\*\*/g,
  italicText: /\*(.+?)\*/g,
  html_safety: /.*[<>`].*/,
  verseNumber: /(^|\n)([0-9]+)\.\n/gm,
  chordCore: /([A-G]#?b?)([^A-G]*)/g,
};

const formatTextBoldItalic = (text) => {
  text = text.replace(regex.boldText, "<b>$1</b>");
  text = text.replace(regex.italicText, "<i>$1</i>");
  return text;
};

const formatVerseNumbers = (lyrics) => {
  return lyrics.replace(
    regex.verseNumber,
    `$1<div class='verse-number' data-uncopyable-text='$2'></div>`
  );
};

const formatChorus = (lyrics) => {
  return lyrics.replace(regex.chorus, `$1<div class='chorus'>$2</div>`);
};

const formatCapoComment = (line) => {
  return line.replace(regex.capo, `<div id='transpose-preset'>Capo $1</div>`);
};

const formatComment = (line) => {
  return line.replace(regex.comment, "<div class='comment'>$1</div>");
};

const formatTextLine = (line) => {
  const lineRegex = /(.*>)?( {2})?(.*)/;
  return line.replace(
    lineRegex,
    `$1<div class='line'><span class='line-text'>$3</span></div>`
  );
};

const formatChords = (line) => {
  const separatedIntoWords = line.replace(
    regex.chordWords,
    `<span class='chord-word'>$1</span>`
  );
  return separatedIntoWords.replace(
    regex.chords,
    (_match, chord) =>
      `<span class='chord' data-uncopyable-text='${chord}'></span>`
  );
};

export const getLyricsHTML = (lyrics) => {
  lyrics = formatVerseNumbers(lyrics);
  lyrics = formatChorus(lyrics);

  const lines = lyrics.split("\n");

  for (let i = 0; i < lines.length; i++) {
    if (regex.capo.test(lines[i])) {
      lines[i] = formatCapoComment(lines[i]);
    } else if (regex.comment.test(lines[i])) {
      lines[i] = formatComment(lines[i]);
    } else {
      lines[i] = formatTextLine(lines[i]);

      if (regex.hasChords.test(lines[i])) {
        lines[i] = formatChords(lines[i]);
      }
    }
  }
  lyrics = lines.join("\n");
  lyrics = formatTextBoldItalic(lyrics);
  return lyrics;
};
