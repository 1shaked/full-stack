# Code Style Guidelines

- **File Length:** Files should not exceed 150 lines unless approved.
- **Function Length:** No function should exceed 30 lines without approval.
- **Component Creation:** Always define an interface for component props.
- **Interface Naming:** Interface names should end with "Interface", e.g., `ExampleInterface`.
- **Data Retrieval:** When retrieving data from a server, validate it using Zod's safe parse.
- **Props Passing:** Do not pass a prop to a component solely for forwarding it to a child component.
- **Variable Declaration:** Start with `const` and switch to `let` only if necessary.
- **Type Restrictions:** Avoid using the "any" type. Always specify the type.
- **Component Documentation:** For every new component, document it using JSDoc.
- **Data Fetching:** Use React Query or Redux with async thunk for data retrieval.
- **Library Typing:** Always provide appropriate types when working with libraries (e.g., React Query, Redux, Jotai).
- **State Logic:** If substantial logic evolves from the state, consider encapsulating it in a separate hook.
- **Logic Duplication:** Do not replicate logic using copy-paste; create distinct hooks as needed.
- **Array Operations:** Only use `array.map()` if generating a new array.
- **Exports:** Favor named exports (`export`) over default exports (`export default`).
- **File Paths:** Use alias paths. Use relative paths only if the referenced file is in the same directory.
- **Assistance:** If stuck on a task for over an hour longer than anticipated, ask for assistance.
- **Type Files:** When defining types, create a file with a `.d.ts` extension.
- **Types Organization:** If there are numerous type definitions, organize them in a dedicated folder.
  
### Props Restrictions
- Do not pass components as props unless necessary
- Do not pass functions as props unless essential. Always provide the function's types.

- **Complex Functions:** Provide a JSDoc description for intricate functions.
- **Spelling:** Use a spell-checker extension to avoid spelling mistakes.
- **Component Design:** Consult Shaked regarding the abstraction level when creating a new component.
- **Global Variables:** Avoid global variables. If deemed necessary, obtain approval from Shaked.
