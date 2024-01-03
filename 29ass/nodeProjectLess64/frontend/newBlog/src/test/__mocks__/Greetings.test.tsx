import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Greeting from '../../components/testing/Greeting'
import { screen } from '@testing-library/react';

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the greetings component", () => {
    render(<Greeting name='World' />)
    expect(true).toBeTruthy();
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
})