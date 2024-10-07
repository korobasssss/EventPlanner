import { FC } from "react"
import info_icon from '../../../assets/icons/info.svg'
import danger_icon from '../../../assets/icons/danger.svg'
import { Icon } from "../Icon"

interface IAppInfoWrapper {
    text: string
    type: 'info' | 'danger'
}

export const AppInfoWrapper: FC<IAppInfoWrapper> = (
    {
        text,
        type
    }
) => {
    return (
        <div className="max-w-[521px] flex space-x-[8px] py-[8px] px-[12px] bg-app_dark_white rounded-sm
                        font-ttcommons text-xxs">
            <Icon icon={type === 'info' ? info_icon : danger_icon}/>
            <p>
                {text}
            </p>
        </div>
    )
}