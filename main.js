function createSearchWindow() {
  const searchContainer = document.createElement('div');
  searchContainer.id = 'search-container';
  searchContainer.innerHTML = `
    <div id="search-box">
      <h2>Google風検索</h2>
      <div id="search-input-container">
        <input type="text" id="search-input" placeholder="検索キーワードを入力">
        <button id="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </button>
      </div>
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
      width: 600px;
    }
    #search-box {
      background-color: #E1F5FE;
      border-radius: 24px;
      padding: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    #search-box h2 {
      margin-top: 0;
      margin-bottom: 20px;
      color: #4285F4;
      font-family: Arial, sans-serif;
      font-size: 24px;
    }
    #search-input-container {
      display: flex;
      align-items: center;
      background-color: white;
      border-radius: 24px;
      padding: 6px 20px;
      box-shadow: 0 1px 6px rgba(32,33,36,0.28);
    }
    #search-input {
      flex-grow: 1;
      border: none;
      outline: none;
      font-size: 16px;
      padding: 10px 0;
    }
    #search-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      margin-left: 10px;
    }
    #search-button svg {
      fill: #4285F4;
    }
    #search-button:hover svg {
      fill: #1967D2;
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
