import { FC } from "react"

interface IAppTitleText {
    title: string
}

export const AppTitleText: FC<IAppTitleText> = (
    {
        title
    }
) => {
    return (
        <h2 className="font-redcollar text-xl">
            {title}
        </h2>
    )
}