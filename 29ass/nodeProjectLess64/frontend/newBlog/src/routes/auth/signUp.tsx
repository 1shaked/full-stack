import { useForm } from "react-hook-form";
import { trpc } from "../../trpc";

interface SignUpFormInterface {
    email: string;
    password: string;
}

export function SignUp() {
    const sign_up_form = useForm<SignUpFormInterface>()
    const create_user_mutation = trpc.user.create.useMutation({
        onSuccess: (data, variables) => {
            console.log({data , variables});
        }
    })

    return <main>
        <form 
        onSubmit={sign_up_form.handleSubmit((data) => {
            console.log(data);
            create_user_mutation.mutate(data);
        })}
        style={{ border: '5px solid green'}}>
            <input type="email" placeholder="email" {...sign_up_form.register('email')} />
            <br />
            <input type="password" placeholder="password" {...sign_up_form.register('password')} />
            <hr />
            <button>submit</button>
        </form>
    </main>
}

