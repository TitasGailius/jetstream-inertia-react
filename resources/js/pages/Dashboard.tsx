import React from "react"
import route from "ziggy-js"
import { Inertia } from "@inertiajs/inertia"

import { Page } from "types/App"
import Button from "jetstream/Button"

const Dashboard: Page = ({ user }) => (
    <div>
        <pre>
            {JSON.stringify(user, null, 2)}
        </pre>

        <div className="w-1/4 text-center">
            <img src={user.profile_photo_url} alt="Avatar" className="mx-auto my-8 rounded-full shadow" />

            <Button className="mx-auto" onClick={() => Inertia.post(route('logout'))}>
                Logout
            </Button>
        </div>
    </div>
)

export default Dashboard
