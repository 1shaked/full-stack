import { useForm } from "react-hook-form";
import { trpc } from "../../trpc";
import { useAtom } from "jotai";
import { UserInfoAtom } from "../../state/userState";
import { useNavigate } from 'react-router-dom';
import { USER_LOCAL_KEY } from "../../utils/CONST";
import { EventBase } from "../../components/eventBased";
import { RefComponent } from "../../components/ref";

interface SignUpFormInterface {
    email: string;
    password: string;
}

export function SignUp() {
    const [user_info, set_user_info] = useAtom(UserInfoAtom);
    const sign_up_form = useForm<SignUpFormInterface>()
    const navigate = useNavigate();
    
    const create_user_mutation = trpc.user.create.useMutation({
        onSuccess: (data) => {
            set_user_info(data);
            localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(data))
            navigate('/blog');
        },
        onError: () => {
            navigate('/login')
        }
    })

    return <main>
        user = {JSON.stringify(user_info, null , 2)}
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
        {create_user_mutation.error?.message}

        <RefComponent / >
        {/* <EventBase /> */}
    </main>
}

