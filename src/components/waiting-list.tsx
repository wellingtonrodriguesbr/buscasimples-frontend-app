import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { CalendarClock } from "lucide-react";

export function WaitingList() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full md:w-fit gap-2">
          <CalendarClock className="size-4" />
          Entrar na lista de espera
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-[600px] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-left text-2xl">
            Entrar na lista de espera
          </DialogTitle>
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
