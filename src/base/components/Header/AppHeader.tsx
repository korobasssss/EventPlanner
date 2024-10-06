import rdclr_icon from '../../../assets/icons/rdclr.svg'
import arrow_l_icon from '../../../assets/icons/arrow_left.svg'
import arrow_r_icon from '../../../assets/icons/arrow_right.svg'
import { AppButtonIcon } from '../ButtonIcon'
import { Icon } from '../Icon'
import { AppButton } from '../Button'

export const AppHeader = () => {
    return (
        <header className="text-app_black flex font-redcollar justify-between h-[77px]">
            <div className='flex space-x-px19 items-center'>
                <div className='flex space-x-px35'>
                    <Icon icon={rdclr_icon} classname='w-px53 h-px31'/>
                    <span className='text-l'>
                        red collar
                    </span>
                </div>
                <h1 className="text-xxl">
                    planner <span className="text-app_red">event</span>
                </h1>
            </div>
            <div className='flex  items-end space-x-[150px]'>
                <div className='flex space-x-[40px]'>
                    <span className='text-l text-app_black'>
                        Сентябрь
                    </span>
                    <div className='flex space-x-[8px]'>
                    <AppButtonIcon 
                        icon={<Icon icon={arrow_l_icon} classname='w-[32px]'/>} 
                        theme='solid'
                        color='grey'
                    />
                    
                    <AppButtonIcon 
                        icon={<Icon icon={arrow_r_icon} classname='w-[32px]'/>} 
                        theme='solid'
                        color='grey'
                    />
                    </div>
                </div>
                <div className='w-px124'>
                <AppButton theme='solid' color='black'>
                    Войти
                </AppButton>
                </div>
                
            </div>
        </header>
    )
}