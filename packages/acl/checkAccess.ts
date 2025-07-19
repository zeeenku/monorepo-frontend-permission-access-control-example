import { aclConfig } from './config'

export function hasAccess(
  feature: keyof typeof aclConfig,
  action: keyof (typeof aclConfig)[keyof typeof aclConfig],
  role: string
) {
  const allowedRoles = aclConfig[feature]?.[action]
  return allowedRoles?.includes(role)
}
