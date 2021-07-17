import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact></Contact>);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />)

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('text', () => {
    it('matches text', () => {
        const { getByTestId } = render(<Contact />)

        expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})