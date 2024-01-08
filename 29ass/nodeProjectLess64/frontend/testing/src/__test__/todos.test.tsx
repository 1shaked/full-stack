import { render, screen , fireEvent} from "@testing-library/react"
import { Todos } from "../components/todos"


describe('testing todos list', () => {

    it('adding todos', () => {
        render(<Todos />)
        const input_new_todo = screen.getByTestId('input-new-todo');
        fireEvent.change(input_new_todo, { target : { value : 'hey'}});
        const button_to_add_new_todo = screen.getByTestId('button-to-add-new-todo');
        fireEvent.click(button_to_add_new_todo)
        const new_todo = screen.getByTestId('0');

        expect(new_todo.textContent).toContain('hey')
    })

})