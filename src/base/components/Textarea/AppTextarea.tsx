import { Input } from "antd"
import { FC, TextareaHTMLAttributes } from "react"

interface IAppTextarea
    extends TextareaHTMLAttributes<HTMLTextAreaElement>{
        label?: string
}

export const AppTextarea: FC<IAppTextarea> = (
    {
        onChange,
        placeholder
    }
) => {
const {TextArea} = Input

    return (
        <TextArea
            onChange={onChange}
            maxLength={500}
            placeholder={placeholder}
            className="h-[153px] px-[16px] resize-none py-[18px] rounded-sm border border-app_gray focus:border-app_black 
                        shadow-none font-ttcommons placeholder:text-app_gray text-app_black text-s scrollbar"
        />
    )
}