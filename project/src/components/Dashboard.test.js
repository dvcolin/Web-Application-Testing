import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Dashboard from './Dashboard.js';

describe('<Dashboard />', () => {
    it('should render button with string `ball`', () => {
        const dashboard = render(<Dashboard />);
        dashboard.getByText(/ball/i);
    })
    it('should render button with string `strike`', () => {
        const dashboard = render(<Dashboard />);
        dashboard.getByText(/strike/i);
    })
    it('should render button with string `foul`', () => {
        const dashboard = render(<Dashboard />);
        dashboard.getByText(/foul/i);
    })
    it('should render button with string `hit`', () => {
        const dashboard = render(<Dashboard />);
        dashboard.getByText(/hit/i);
    })
})