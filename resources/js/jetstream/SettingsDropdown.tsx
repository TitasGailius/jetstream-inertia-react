import React from "react"
import { Menu } from "@headlessui/react"
import useSharedProps from "hooks/useSharedProps"

import { ReactComponent as ChevronDown } from "jetstream/icons/SwitchVertical.svg"

const SettingsDropdown: React.FC = () => {
    const { jetstream, user } = useSharedProps()

    return (
        <Menu>
            <Menu.Button>
                {jetstream.managesProfilePhotos ? (
                    <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                        <img className="h-8 w-8 rounded-full object-cover" src={user.profile_photo_url} alt={user.name} />
                    </button>
                ) : (
                    <span className="inline-flex rounded-md">
                        <button type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                            {user.name}
                            <ChevronDown className="ml-2 -mr-0.5 h-4 w-4" />
                        </button>
                    </span>
                )}
            </Menu.Button>

            <Menu.Items>
                <Menu.Item>

                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}

export default SettingsDropdown
