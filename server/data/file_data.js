import fs from "fs";

//display the 3 most similar words in the search corpus
//at least, keyword is contained
//if there are more than 2 result.
//The small number of characters will come first.

function search_byfilter(word_list, keyword) {
  let result = [];
  let totalResult = [];
  let finalResult = [];
  word_list.forEach((word) => {
    if (word.includes(keyword)) {
      result.push(word);
    }
  });
  totalResult = result;
  result.sort(function (a, b) {
    return a.length - b.length;
  });
  for (var i = 0; i < 3; i++) {
    if (result[i] !== undefined) {
      finalResult.push(result[i]);
    }
  }
  return { finalResult, totalResult };
}

function search_byfilter_with_exception(word_list, keyword, exception) {
  let { finalResult, totalResult } = search_byfilter(word_list, keyword);
  let the_most_similar_word;
  if (finalResult.length > 0) {
    const exception_result = search_byfilter(totalResult, exception);
    if (exception_result !== null) {
      the_most_similar_word = exception_result.finalResult[0];
    }
  }
  finalResult = finalResult.filter((word) => word !== the_most_similar_word);
  totalResult = totalResult.filter((word) => word !== the_most_similar_word);
  return { finalResult, totalResult };
}

// ^\s+ means "any whitespace at the beginning of the string
// | means "or" (as in , "this or that") (it's called an "alternation")
// \s+$ means "any whitepsace at the end of the string
// Then we replace all occurrences (g) with '' (a blank string).
async function getWordList() {
  //hemingway
  return fs.promises.readFile("./corpus/hemingway.txt", "utf8").then((data) => {
    const word_list = data
      .replace(/^\s+|,|"|'|\[|\]|\(|\)|\{|\}|\s+$/g, "")
      .split(/\s+/);
    return word_list;
  });
}

export async function getAllByKeyword(keyword) {
  const word_list = await getWordList();
  const result = search_byfilter(word_list, keyword);
  return result;
}

export async function getAllByKeyword_with_exception(keyword, exception) {
  const word_list = await getWordList();
  const result = search_byfilter_with_exception(word_list, keyword, exception);
  return result;
}

export async function updateByText(text) {
  const result_text = " " + text;
  fs.promises.appendFile("./corpus/hemingway.txt", result_text);
  return "File is updated";
}
