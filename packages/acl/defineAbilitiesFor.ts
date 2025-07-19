import {
  AbilityBuilder,
  AbilityClass,
  PureAbility,
} from '@casl/ability'

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'

export type Subjects = 'User' | 'Course' | 'Lesson' | 'Comment' | 'all'

export type AppAbility = PureAbility<[Actions, Subjects]>

export function defineAbilitiesFor(role: string): AppAbility {
  const { can, cannot, build } = new AbilityBuilder<AppAbility>(
    PureAbility as AbilityClass<AppAbility>
  )

  switch (role) {
    case 'super-admin':
      can('manage', 'all')
      break
    case 'admin':
      can('manage', 'Course')
      can('read', 'User')
      break
    case 'moderator':
      can('read', 'Comment')
      can('delete', 'Comment')
      break
    case 'instructor':
      can('create', 'Lesson')
      can('update', 'Lesson')
      can('read', 'Course')
      break
    case 'student':
      can('read', 'Course')
      can('read', 'Lesson')
      break
    default:
      break
  }

  return build()
}
