import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Filter } from "lucide-react";

export function Filters() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full md:w-fit">
          <Filter className="size-4" />
          Adicionar filtros
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-[600px] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-left text-2xl">Filtros</DialogTitle>
          <DialogDescription className="text-left">
            Adicione filtros e encontre com mais facilidade o que você está
            buscando
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
