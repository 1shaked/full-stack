import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Greeting from '../../components/testing/Greeting'

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<Greeting name='Hello' />)
    expect(true).toBeTruthy()
})