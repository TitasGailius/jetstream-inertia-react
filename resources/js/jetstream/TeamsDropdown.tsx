import React from "react"
import route from "ziggy-js"
import { Menu } from "@headlessui/react"
import { Inertia } from "@inertiajs/inertia"

import { Team } from "types/Models"
import useSharedProps from "hooks/useSharedProps"

import DropdownLink from "jetstream/DropdownLink"

import { ReactComponent as Checkmark } from "jetstream/icons/Checkmark.svg"
import { ReactComponent as SwitchVertical } from "jetstream/icons/SwitchVertical.svg"

const TeamsDropdown: React.FC = () => {
    const { jetstream, user } = useSharedProps()

    if (! jetstream.hasTeamFeatures) {
        return null
    }

    const switchToTeam = (team: Team) => {
        Inertia.put(route('current-team.update'), {
            'team_id': team.id
        }, {
            preserveState: false
        })
    }

    return (
        <Menu>
            <Menu.Button>
                <span className="inline-flex rounded-md">
                    <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition">
                        {user.current_team.name}
                        <SwitchVertical className="ml-2 -mr-0.5 h-4 w-4" />
                    </button>
                </span>
            </Menu.Button>

            <Menu.Items>
                <div className="w-60">
                    <div className="block px-4 py-2 text-xs text-gray-400">
                        Manage Team
                    </div>

                    {/* Team Settings */}
                    <DropdownLink href={route('teams.show', user.current_team)}>
                        Team Settings
                    </DropdownLink>

                    {jetstream.canCreateTeams && (
                        <DropdownLink href={route('teams.create')}>
                            Create New Team
                        </DropdownLink>
                    )}

                    <div className="border-t border-gray-100"></div>

                    {/* Team Switcher */}
                    <div className="block px-4 py-2 text-xs text-gray-400">
                        Switch Teams
                    </div>

                    {user.all_teams.map(team => (
                        <form onSubmit={() => switchToTeam(team)}>
                            <DropdownLink as="button">
                                <div className="flex items-center">
                                    {team.id === user.current_team.id && <Checkmark className="mr-2 h-5 w-5 text-green-400" />}
                                    <div>{team.name}</div>
                                </div>
                            </DropdownLink>
                        </form>
                    ))}
                </div>
            </Menu.Items>
        </Menu>
    )
}

export default TeamsDropdown
