import { useState, useEffect } from 'react';
import { render, fireEvent } from 'react-testing-library';

test('useEffect should work', () => {
  function Example() {
    const [count, setCount] = useState(0);

    // 类似于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
      // 使用浏览器API更新文档标题
      document.title = count;
    });

    return (
      <div>
        <p data-testid="count">{count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }
  const { getByText, getByTestId } = render(<Example/>);
  expect(getByTestId('count').innerHTML).toEqual('0');
  expect(document.title).toEqual('0');
  fireEvent.click(getByText('Click me'));
  fireEvent.click(getByText('Click me'));
  expect(getByTestId('count').innerHTML).toEqual('2');
  expect(document.title).toEqual('2');
})

