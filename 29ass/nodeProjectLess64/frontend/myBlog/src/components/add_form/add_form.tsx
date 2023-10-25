

interface AddBlogInterface {
    title: string;
    content: string;
}
export function AddForm() {
    return (
        <div>
            <h2>form</h2>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="content" />
            <button>create blog</button>
        </div>
    )
}