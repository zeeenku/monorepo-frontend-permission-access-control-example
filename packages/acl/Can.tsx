import { useAbility } from './AclProvider'
import type { Actions, Subjects } from './defineAbilitiesFor'
import { ReactNode } from 'react'

export const Can = ({
  I,
  a,
  children,
  fallback = null,
}: {
  I: Actions
  a: Subjects
  children: ReactNode
  fallback?: ReactNode
}) => {
  const ability = useAbility()
  return ability.can(I, a) ? <>{children}</> : <>{fallback}</>
}


export function useCan(action: Actions, subject: Subjects | 'all') {
  const ability = useAbility()
  return ability.can(action, subject)
}
