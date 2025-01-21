"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation"; // Importar hooks do Next.js
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { TvShowResponse } from "@/types/tvType";
import Link from "next/link";

type Props = {
    details: TvShowResponse | null;
};

export function ComboboxDemo({ details }: Props) {
    const router = useRouter();
    const pathname = usePathname(); // Pega a URL atual

    // Extrai a temporada atual da URL (caso exista)
    const currentSeason = pathname.split("/").pop(); // Assume que o ID da temporada é o último segmento da URL

    const frameworks = [
        ...(details?.seasons.map((item) => ({
            value: item.season_number.toString(),
            label: item.name,
        })) || []),
    ];

    // Define o estado inicial com base na URL
    const [value, setValue] = React.useState(currentSeason || "");
    const [open, setOpen] = React.useState(false);

    const handleSelect = (currentValue: string) => {
        setValue(currentValue);
        setOpen(false);

        // Navega para a nova rota
        router.push(`/tv/${details?.id}/season/${currentValue}`);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[220px] justify-between"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Selecione uma Temporada"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[220px] p-0">
                <Command>
                    <CommandInput placeholder="Buscar Temporada" />
                    <CommandList>
                        <CommandEmpty>Temporada não existe</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.label}
                                    onSelect={() => handleSelect(framework.value)}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
