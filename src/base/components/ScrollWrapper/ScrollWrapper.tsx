import { FC, ReactNode } from "react"

interface IScrollWrapper {
    children: ReactNode
}

export const ScrollWrapper: FC<IScrollWrapper> = (
    {
        children
    }
) => {
    return (
        <div className="overflow-y-scroll h-[100%] scrollbar">
            {children}
        </div>
    )
}