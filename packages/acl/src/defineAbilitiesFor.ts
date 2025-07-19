import {
  AbilityBuilder,
  AbilityClass,
  PureAbility,
} from '@casl/ability'
import { aclConfig, Roles } from './config'

export type Actions = keyof (typeof aclConfig)[keyof typeof aclConfig]
export type Subjects = keyof typeof aclConfig

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