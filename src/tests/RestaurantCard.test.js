import React from 'react';
import { render } from '@testing-library/react';
import RestaurantCard from '../components/RestaurantCard';

describe('RestaurantCard component', () => {
  test('renders correctly', () => {
    const { getByText } = render(<RestaurantCard />);
    // Check that the component contains the expected elements
    // ...
  });
});