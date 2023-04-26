import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('main'));

// APP là một thẻ của react do chúng ta tự định nghĩa ra 
// APP là một component 
// Thẻ do chúng ta tự định nghĩa sẽ bắt đầu bằng ký tự in hoa 
root.render(
  <React.StrictMode>
    {/* strict mode sẽ giúp chúng ta phát hiện ra lỗi ảnh hưởng đến hiệu suất của trang web */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* Root của ứng dụng */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
