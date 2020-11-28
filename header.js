import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} /> wildfire tracker powered by nasa </h1>
        </header>
    )
}

export default header
