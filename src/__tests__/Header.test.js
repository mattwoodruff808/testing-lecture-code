import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Header from '../Components/Header';

it('Does not show dropdown on first render', () => {
    const {queryByTestId} = render(<Header />);
    const dropdown = queryByTestId('dropdown');

    expect(dropdown).not.toBeTruthy();
})

it('Shows the dropdown after the hamburger is clicked', () => {
    const {container, getByTestId} = render(<Header />);
    const hamburger = getByTestId('hamburger-button');

    fireEvent.click(hamburger);
    expect(container.textContent).toContain('Dropdown menu');
})