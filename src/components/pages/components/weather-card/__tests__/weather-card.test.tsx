import { render } from '@testing-library/react';

import { WeatherCard } from '../weather-card';

describe('Weather Card', () => {
  it('should render WeatherCard correct', () => {
    render(<WeatherCard />);
  });
});
