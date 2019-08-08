import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import Display from './Display.js'

describe('<Display />', () => {
    it('should render the string `balls`', () => {
        const display = render(<Display />);
        display.getByText(/balls/i);
    })
    it('should render the string `strikes`', () => {
        const display = render(<Display />);
        display.getByText(/strikes/i);
    })
})