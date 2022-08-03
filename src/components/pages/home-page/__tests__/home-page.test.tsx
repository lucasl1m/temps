import { render } from '@testing-library/react';

import { HomePage } from '../home-page';

describe('Home Page', () => {
  it('should render HomePage correct', () => {
    render(<HomePage />);
  });
});
