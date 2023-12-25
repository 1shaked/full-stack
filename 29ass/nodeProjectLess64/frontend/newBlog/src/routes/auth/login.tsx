import { useForm } from "react-hook-form";
import { trpc } from "../../trpc";
import { useSetAtom } from "jotai";
import { UserInfoAtom } from "../../state/userState";
import { useNavigate } from 'react-router-dom';
import { USER_LOCAL_KEY } from "../../utils/CONST";

interface LoginFormInterface {
    email: string;
    password: string;
}

export function LoginPage() {
    const set_user_info = useSetAtom(UserInfoAtom);
    const login_form = useForm<LoginFormInterface>()
    const navigate = useNavigate()
    const login_user_mutation = trpc.user.login.useMutation({
        onSuccess: (data, variables) => {
            console.log({data , variables});
            set_user_info(data);
            localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(data))
            navigate('/blog');
        }
    })

    return <main>
        
        <form 
        onSubmit={login_form.handleSubmit((data) => {
            login_user_mutation.mutate(data);
        })}
        style={{ border: '5px solid red'}}>
            <input type="email" placeholder="email" {...login_form.register('email')} />
            <br />
            <input type="password" placeholder="password" {...login_form.register('password')} />
            <hr />
            <button>submit</button>
        </form>
    </main>
}

