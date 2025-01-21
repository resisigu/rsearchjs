function createSearchWindow() {
  const searchContainer = document.createElement('div');
  searchContainer.id = 'search-container';
  searchContainer.innerHTML = `
    <div id="search-box">
      <h2>カスタム検索</h2>
      <input type="text" id="search-input" placeholder="検索キーワードを入力">
      <button id="search-button">検索</button>
    </div>
  `;
  
  const style = document.createElement('style');
  style.textContent = `
    #search-container {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
    }
    #search-box {
      background-color: #f0f0f0;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
    #search-box h2 {
      margin-top: 0;
      color: #333;
    }
    #search-input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    #search-button {
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    #search-button:hover {
      background-color: #45a049;
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(searchContainer);
  
  document.getElementById('search-button').addEventListener('click', performSearch);
}

function performSearch() {
  const query = document.getElementById('search-input').value;
  if (query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
  }
}

createSearchWindow();
