import { FC } from "react"
import { IClassname } from "../../interfaces"

interface IIcon
    extends IClassname {
    icon: string
}

export const Icon: FC<IIcon> = (
    {
        icon,
        classname
    }
) => {
    return (
        <img 
            src={icon} 
            alt='icon'
            className={classname}
        />
    )
}