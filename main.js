function createSearchWindow() {
  const searchContainer = document.createElement('div');
  searchContainer.id = 'search-container';
  searchContainer.innerHTML = `
    <div id="search-box">
      <div id="search-header">
        <h2>R Search JS</h2>
        <button id="close-button">×</button>
      </div>
      <div id="search-input-container">
        <input type="text" id="search-input" placeholder="検索キーワードまたはURLを入力">
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
      background-color: white;
      border-radius: 24px;
      padding: 30px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    }
    #search-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    #search-box h2 {
      margin: 0;
      color: #4285F4;
      font-family: Arial, sans-serif;
      font-size: 24px;
    }
    #close-button {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #5F6368;
    }
    #search-input-container {
      display: flex;
      align-items: center;
      background-color: #F1F3F4;
      border-radius: 24px;
      padding: 6px 20px;
    }
    #search-input {
      flex-grow: 1;
      border: none;
      outline: none;
      font-size: 16px;
      padding: 10px 0;
      background-color: transparent;
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
  document.getElementById('close-button').addEventListener('click', closeSearchWindow);
  document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
}

function performSearch() {
  const input = document.getElementById('search-input').value;
  if (input) {
    if (isValidURL(input)) {
      window.open(input, '_blank');
    } else {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(input)}`;
      window.open(searchUrl, '_blank');
    }
  }
}

function closeSearchWindow() {
  const searchContainer = document.getElementById('search-container');
  if (searchContainer) {
    searchContainer.remove();
  }
}

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

createSearchWindow();
