import React, { createContext, useContext, useMemo } from "react";
import { defineAbilitiesFor, AppAbility } from './defineAbilitiesFor'

const AclContext = createContext<AppAbility | null>(null)
const RoleContext = createContext<string | null>(null)

export const AclProvider = ({
  role,
  children,
}: {
  role: string
  children: React.ReactNode
}) => {
  const ability = useMemo(() => defineAbilitiesFor(role), [role])

  return (
    <RoleContext.Provider value={role}>
      <AclContext.Provider value={ability}>
        {children}
      </AclContext.Provider>
    </RoleContext.Provider>
  )
}

export const useAbility = () => {
  const context = useContext(AclContext)
  if (!context) throw new Error('useAbility must be used within AclProvider')
  return context
}

export const useRole = () => {
  const context = useContext(RoleContext)
  if (!context) throw new Error('useRole must be used within AclProvider')
  return context
}
