import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { useForm } from "react-hook-form"

function SignIn() {
    const { register, handleSubmit } = useForm();

    function handleSignIn(data: any) {
        console.log(data);
    }

    return (
        <div className="p-8">
            <div className="flex flex-col justify-center w-96 gap-4">
                <div className="flex flex-col text-center">
                    <h1 className="text-xl font-semibold">
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

                    <Button className="w-full">Logar</Button>
                </form>
            </div>
        </div>
    )
}

export default SignIn