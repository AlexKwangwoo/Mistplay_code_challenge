export default class FileService {
  constructor(http) {
    this.http = http;
  }

  async getAllByKeyword(keyword) {
    return this.http.fetch(`/search?keyword=${keyword}`, {
      method: "GET",
    });
  }

  async getAllByKeyword_with_exception(keyword, exception) {
    return this.http.fetch(
      `/search?keyword=${keyword}&exception=${exception}`,
      {
        method: "GET",
      }
    );
  }

  async updateByText(text) {
    return this.http.fetch("/update", {
      method: "POST",
      // headers: this.getHeaders(),
      // 데이터를 넣어주기 위해 제이슨으로 보내야해서 stringify 사용해야함!
      body: JSON.stringify({
        text,
      }),
    });
  }
}
