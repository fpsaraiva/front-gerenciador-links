import { api } from "@/api/axios";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
    const { register, reset, handleSubmit, watch } = useForm();
    const navigate = useNavigate()
    const inputsFormulario = watch();

    const formValido = inputsFormulario.username?.trim() && inputsFormulario.password?.trim();

    async function handleSignIn(data: any) {
        const response = await api.post('/login', data);
        console.log(response.data);
        reset({ username: '', password: '' });
        navigate('/');
    }

    return (
        <div className="p-16">
            <div className="flex flex-col justify-center w-96 gap-4">
                <div className="flex flex-col text-center">
                    <h1 className="text-2xl font-semibold">
                        Faça o seu login
                    </h1>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                    <div className="space-y-2">
                        <Label>Digite o seu email</Label>
                        <Input type="username" {...register('username')}/>
                    </div>
                    <div >
                        <Label htmlFor="">Digite a sua senha</Label>
                        <Input type="password" {...register('password')}/>
                    </div>

                    <Button variant="link">
                        <Link to="/sign-up">
                            Criar conta
                        </Link>
                    </Button>

                    <Button disabled={!formValido} className="w-full" type="submit">Logar</Button>
                </form>
            </div>
        </div>
    )
}

export default SignIn