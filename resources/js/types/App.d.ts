import { User } from "./Models"

export interface SharedProps {
    user: User
    jetstream: Jetstream
    errors: Errors
    errorBags: Record<string, Errors>
}

export interface Jetstream {
    canCreateTeams: boolean
    canManageTwoFactorAuthentication: boolean
    canUpdatePassword: boolean
    canUpdateProfileInformation: boolean
    hasAccountDeletionFeatures: boolean
    hasApiFeatures: boolean
    hasTeamFeatures: boolean
    hasTermsAndPrivacyPolicyFeature: boolean
    managesProfilePhotos: boolean
    flash?: FlashMessage
}

export interface FlashMessage {
    bannerStyle?: 'success'|'danger'
    banner?: string
}

export type Errors = Record<string, string>

export type Page<P = {}> = React.ElementType<P & SharedProps>
