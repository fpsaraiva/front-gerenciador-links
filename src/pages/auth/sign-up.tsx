import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

function SignUp() {
    const { register, reset, handleSubmit, watch } = useForm();
    const inputsFormulario = watch();

    const formValido = inputsFormulario.nome?.trim() && inputsFormulario.email?.trim() && inputsFormulario.password?.trim();

    function handleSignUp(data: any) {
        console.log(data);
        reset({ nome: '', email: '', password: '' });
    }

    return (
        <div className="p-16">
            <div className="flex flex-col justify-center w-96 gap-4">
                <div className="flex flex-col text-center">
                    <h1 className="text-2xl font-semibold">
                        Cadastre a sua conta
                    </h1>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                    <div className="space-y-2">
                        <Label>Digite o seu nome</Label>
                        <Input type="nome" {...register('nome')} />
                    </div>
                    <div className="space-y-2">
                        <Label>Digite o seu email</Label>
                        <Input type="email" {...register('email')} />
                    </div>
                    <div className="space-y-2">
                        <Label>Digite a sua senha</Label>
                        <Input type="password" {...register('password')} />
                    </div>

                    <Button variant="link">
                        <Link to="/sign-in">
                            Acessar conta
                        </Link>
                    </Button>

                    <Button disabled={!formValido} className="w-full" type="submit">Cadastrar</Button>
                </form>
            </div>
        </div>
    )
}

export default SignUp