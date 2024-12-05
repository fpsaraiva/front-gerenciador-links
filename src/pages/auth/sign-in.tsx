import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

function SignIn() {
    const { register, reset, handleSubmit, watch } = useForm();
    const inputsFormulario = watch();

    const formValido = inputsFormulario.email?.trim() && inputsFormulario.password?.trim();

    function handleSignIn(data: any) {
        console.log(data);
        reset({ email: '', password: '' });
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
                        <Input type="email" {...register('email')}/>
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