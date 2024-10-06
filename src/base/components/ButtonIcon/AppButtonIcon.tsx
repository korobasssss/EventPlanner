import { Button } from "antd"
import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import cx from 'classnames';

interface IButton 
    extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme: "link" | "text" | "dashed" | "outlined" | "solid" | "filled" | undefined
    color: 'black' | 'grey'
    icon: ReactNode
}

export const AppButtonIcon: FC<IButton> = (
    {
        theme,
        color,
        onClick,
        disabled,
        icon
    }
) => {
    return (
        <Button
            variant={theme}
            onClick={onClick}
            className={cx(
                'rounded-xs h-px48 w-[64px]',
                {
                    [color === 'grey' ? 
                        'bg-app_light_gray border-app_light_gray' : 
                        'bg-app_black border border-app_black h-60'] 
                        : theme === 'solid' && !disabled,
                    [color === 'grey' ? 
                        'border border-app_light_gray ' : 
                        'border border-app_black'] 
                        : theme === 'outlined' && !disabled,
                    ['bg-app_light_gray text-app_gray'] : disabled
                }
            )}
            icon={icon}
        >
        </Button>
    )
}