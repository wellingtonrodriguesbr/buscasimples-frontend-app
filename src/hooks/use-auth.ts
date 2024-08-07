import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useLocalStorage } from "react-use";
import { toast } from "sonner";

export function useAuth() {
  const [_, setAccessToken] = useLocalStorage<string>("accessToken");
  const [status, setStatus] = useState<"pending" | "success" | "error">(
    "pending"
  );
  const searchParams = useSearchParams();
  const code = searchParams.get("codigo");
  const redirectLink = searchParams.get("redirect");

  const { isPending: isAuthPending } = useQuery({
    queryKey: [""],
    queryFn: handleAuth,
    enabled: !!code,
  });

  async function handleAuth() {
    try {
      const { data } = await api.post<{ token: string }>("/sessions", {
        code,
      });
      setAccessToken(data.token);
      setStatus("success");
      window.location.href = redirectLink ? redirectLink : "/";
      return data.token;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error("Código expirado, faça login para obter outro");
          setStatus("error");
        }

        if (error.response?.status === 404) {
          toast.error("Código não encontrado");
          setStatus("error");
        }
      }
    }
  }

  return { status, isAuthPending };
}
