import { Button } from "antd"
import { ButtonHTMLAttributes, FC } from "react"
import cx from 'classnames';
import { IClassname } from "../../interfaces";

interface IButton 
    extends IClassname, ButtonHTMLAttributes<HTMLButtonElement>{
    theme: "link" | "text" | "dashed" | "outlined" | "solid" | "filled" | undefined
    color: 'black' | 'red'
}

export const AppButton: FC<IButton> = (
    {
        className,
        theme,
        color,
        onClick,
        disabled,
        children
    }
) => {
    return (
        <Button
            variant={theme}
            onClick={onClick}
            className={cx(
                className,
                'font-redcollar text-xs p-s rounded-sm h-60',
                {
                    [color === 'black' ? 
                        'bg-app_black text-app_white border border-app_black' : 
                        'bg-app_red text-app_white border border-app_red'] 
                        : theme === 'solid' && !disabled,
                    [color === 'black' ? 
                        'text-app_black' : 
                        'text-app_red hover:text-app_red focus:text-app_red'] 
                        : theme === 'outlined' && !disabled,
                    [color === 'black' ? 
                        'border border-app_black ' : 
                        'border border-app_red'] 
                        : theme === 'outlined' && !disabled,
                    ['bg-app_light_gray text-app_gray'] : disabled
                }
            )}
                
        >
            {children}
        </Button>
    )
}