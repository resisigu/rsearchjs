function searchEngine() {
  const query = prompt("検索キーワードを入力してください:");
  if (query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
  }
}

searchEngine();
