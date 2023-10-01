import { createContext, useState } from "react";
import EntryInterface from "../interfaces/entry.interface";

export type ListContextType = {
    list: EntryInterface[]
    setList: React.Dispatch<React.SetStateAction<EntryInterface[]>>
}
export const ListContext = createContext<ListContextType>({list: [], setList: () => {}})

type ListProviderPropType = {
    children: React.ReactNode
}

export function ListProvider({children}: ListProviderPropType) {
    const [list, setList] = useState<EntryInterface[]>([])

    return (
        <ListContext.Provider value={{list, setList}}>{children}</ListContext.Provider>
    )
}