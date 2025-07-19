import { createContext, useContext } from "react"

export const RoleContext = createContext<Role>("student")

export const useRole = () => useContext(RoleContext)
