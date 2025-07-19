import {
  AbilityBuilder,
  AbilityClass,
  PureAbility,
} from '@casl/ability'
import { aclConfig, Actions, Roles, Subjects } from './config'


export type AppAbility = PureAbility<[Actions, Subjects | 'all']>

export function defineAbilitiesFor(role: Roles): AppAbility {
  const { can, build } = new AbilityBuilder<AppAbility>(
    PureAbility as AbilityClass<AppAbility>
  )

  for (const [subject, actions] of Object.entries(aclConfig)) {
    for (const [action, roles] of Object.entries(actions)) {
      if (roles.includes(role)) {
        can(action as Actions, subject as Subjects)
      }
    }
  }

  return build()
}