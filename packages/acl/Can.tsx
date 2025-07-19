import { useAbility } from './AclProvider'
import { ReactNode } from 'react'

export const Can = ({
  I,
  a,
  children,
  fallback = null,
}: {
  I: string
  a: string
  children: ReactNode
  fallback?: ReactNode
}) => {
  const ability = useAbility()
  return ability.can(I, a) ? <>{children}</> : <>{fallback}</>
}
