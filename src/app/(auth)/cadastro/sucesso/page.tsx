import { AuthSuccess } from "@/components/auth-success";

export default function RegisterSuccessPage() {
  return (
    <main>
      <AuthSuccess
        title="Cadastro realizado com sucesso!"
        description="Enviamos um e-mail para você com o link de acesso a plataforma."
      />
    </main>
  );
}
