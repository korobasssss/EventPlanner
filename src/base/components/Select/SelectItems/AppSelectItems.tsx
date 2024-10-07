import { FC } from "react"
import { Icon } from "../../Icon"
import cx from 'classnames';

interface IAppSelectItems {
    icon? : string,
    label: string
}

export const AppSelectItems: FC<IAppSelectItems> = (
    {
        icon,
        label
    }
) => {
    return (
        <div className={cx(
            "flex space-x-[4px] items-center",
            icon ? 'py-[10px] px-[5px 0]' : 'px-[10px]' 
        )}>
            {icon && (
                <Icon icon={icon}/>
            )}
            <div>{label}</div>
        </div>
    )
}