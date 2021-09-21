import React, { useState } from "react"
import route from "ziggy-js"
import classNames from "classnames"
import { InertiaLink } from "@inertiajs/inertia-react"

import { Page } from "types/App"

import Banner from "jetstream/Banner"
import NavLink from "jetstream/NavLink"
import TeamsDropdown from "jetstream/TeamsDropdown"
import SettingsDropdown from "jetstream/SettingsDropdown"

import { ReactComponent as Close } from "jetstream/icons/Close.svg"
import { ReactComponent as Hamburger } from "jetstream/icons/Hamburger.svg"
import { ReactComponent as ApplicationMark } from "jetstream/icons/ApplicationMark.svg"
import { Inertia } from "@inertiajs/inertia"


const AppLayout: Page = ({ user, jetstream }) => {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)

    const toggleNavigationDropdown = () => {
        setShowingNavigationDropdown(!showingNavigationDropdown)
    }

    const logout = () => Inertia.post(route('logout'))

    return (
        <>
        <div>
            <Banner />

            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white border-b border-gray-100">
                    <!-- Primary Navigation Menu -->
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex">
                                <!-- Logo -->
                                <div className="flex-shrink-0 flex items-center">
                                    <InertiaLink href={route('dashboard')}>
                                        <ApplicationMark className="block h-9 w-auto" />
                                    </InertiaLink>
                                </div>

                                <!-- Navigation Links -->
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink href={route('dashboard')} isActive={route().current('dashboard')}>
                                        Dashboard
                                    </NavLink>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <TeamsDropdown />
                                </div>

                                <!-- Settings Dropdown -->
                                <div className="ml-3 relative">
                                    <SettingsDropdown />
                                </div>
                            </div>

                            <!-- Hamburger -->
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button onClick={toggleNavigationDropdown} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                                    {showingNavigationDropdown ? <Close className="h-6 w-6" /> : <Hamburger className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Responsive Navigation Menu -->
                    <div className={classNames('sm:hidden', { 'block': showingNavigationDropdown, 'hidden': !showingNavigationDropdown })}>
                        <div className="pt-2 pb-3 space-y-1">
                            <NavLink href={route('dashboard')} isActive={route().current('dashboard')}>
                                Dashboard
                            </NavLink>
                        </div>

                        <!-- Responsive Settings Options -->
                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="flex items-center px-4">
                                <div v-if="$page.props.jetstream.managesProfilePhotos" className="flex-shrink-0 mr-3" >
                                    <img className="h-10 w-10 rounded-full object-cover" src={user.profile_photo_url} alt={user.name} />
                                </div>

                                <div>
                                    <div className="font-medium text-base text-gray-800">{user.name}</div>
                                    <div className="font-medium text-sm text-gray-500">{user.email}</div>
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <NavLink href={route('profile.show')} isActive={route().current('profile.show')}>
                                    Profile
                                </NavLink>

                                {jetstream.hasApiFeatures && (
                                    <NavLink href={route('api-tokens.index')} isActive={route().current('api-tokens.index')}>
                                        API Tokens
                                    </NavLink>
                                )}

                                <!-- Authentication -->
                                <form onSubmit={logout}>
                                    <DropdownLink>

                                    </DropdownLink>
                                    <NavLink as="button">
                                        Log Out
                                    </NavLink>

                                    <jet-responsive-nav-link as="button">
                                        Log Out
                                    </jet-responsive-nav-link>
                                </form>

                                <!-- Team Management -->
                                <template v-if="$page.props.jetstream.hasTeamFeatures">
                                    <div className="border-t border-gray-200"></div>

                                    <div className="block px-4 py-2 text-xs text-gray-400">
                                        Manage Team
                                    </div>

                                    <!-- Team Settings -->
                                    <jet-responsive-nav-link :href="route('teams.show', $page.props.user.current_team)" :active="route().current('teams.show')">
                                        Team Settings
                                    </jet-responsive-nav-link>

                                    <jet-responsive-nav-link :href="route('teams.create')" :active="route().current('teams.create')">
                                        Create New Team
                                    </jet-responsive-nav-link>

                                    <div className="border-t border-gray-200"></div>

                                    <!-- Team Switcher -->
                                    <div className="block px-4 py-2 text-xs text-gray-400">
                                        Switch Teams
                                    </div>

                                    <template v-for="team in $page.props.user.all_teams" :key="team.id">
                                        <form @submit.prevent="switchToTeam(team)">
                                            <jet-responsive-nav-link as="button">
                                                <div className="flex items-center">
                                                    <svg v-if="team.id == $page.props.user.current_team_id" className="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                    <div>{{ team.name }}</div>
                                                </div>
                                            </jet-responsive-nav-link>
                                        </form>
                                    </template>
                                </template>
                            </div>
                        </div>
                    </div>
                </nav>

                <!-- Page Heading -->
                <header className="bg-white shadow" v-if="$slots.header">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <slot name="header"></slot>
                    </div>
                </header>

                <!-- Page Content -->
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>
        </>
    )
}

export default AppLayout
