import { FC } from "react"
import { Icon } from "../Icon"
import { IClassname } from "../../interfaces"
import cx from 'classnames';

interface IOnePhoto
    extends IClassname {
    photo: string
}

export const OnePhoto: FC<IOnePhoto> = (
    {
        classname,
        photo
    }
) => {
    return (
        <div className="w-[40px] h-[40px] object-cover">
            <Icon 
                icon = {photo}
                classname={cx(
                    classname,
                    "rounded-full"
                )}
            />
        </div>
    )
}