import { InputHTMLAttributes, FC } from "react"
import { Icon } from "../Icon";


interface IAppInput
    extends InputHTMLAttributes<HTMLInputElement>{
        postfix?: string
}

export const AppInput: FC<IAppInput> = (
    {
        onChange,
        placeholder,
        postfix,
        disabled,
        value,
        type
    }
) => {
    return (
        <div className="relative grid">
           <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="h-[60px] px-[16px] py-[18px] rounded-sm border border-app_gray focus:border-app_black 
                            shadow-none font-ttcommons placeholder:text-app_gray text-app_black text-s"
                type={type}
                disabled={disabled}
            /> 
        {postfix && (
            <Icon icon={postfix} classname="absolute grid self-center justify-self-end right-[15px]"/>
        )}
        </div>
    )
}