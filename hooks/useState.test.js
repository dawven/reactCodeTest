import { useState } from 'react';
import { render, fireEvent } from 'react-testing-library';

test('useState should work', () => {
  function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

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
  fireEvent.click(getByText('Click me'));
  expect(getByTestId('count').innerHTML).toEqual('1');
})
