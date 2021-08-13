import * as fileRepository from "../data/file_data.js";

export async function getFile(req, res) {
  const keyword = req.query.keyword;
  const exception = req.query.exception;
  if (keyword == "") {
    res.status(404).json({ message: "You need to enter the keyword" });
  }
  const data = await (!exception
    ? fileRepository.getAllByKeyword(keyword)
    : fileRepository.getAllByKeyword_with_exception(keyword, exception));
  res.status(200).json(data);
}

export async function updateFile(req, res) {
  const { text } = req.body;
  const updated = await fileRepository.updateByText(text);
  res.status(200).json(updated);
}
