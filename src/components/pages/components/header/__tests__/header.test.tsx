import { render } from '@testing-library/react';

import { Header } from '../header';

describe('Header', () => {
  it('should render Header correct', () => {
    render(<Header />);
  });
});
