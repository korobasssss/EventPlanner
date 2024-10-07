import { useCallback, useState } from 'react';
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import dateIcon from '../../../assets/icons/date.svg'
import styled from "styled-components";
import { AppButton } from "../Button";
import { formatDate } from "../../utils/formatDate";
import { Icon } from '../Icon';
import cx from 'classnames';

const StyledDatePicker = styled(DatePicker)`
    .mantine-DatePicker-month, div {
        width: 314px;
    }

    .m_730a79ed {
        max-width: 314px;

        svg {
            width: 24px;
            height: 24px;
        }
    }

    .mantine-DatePicker-calendarHeaderLevel {
        font-family: 'Red Collar', sans-serif;
        font-size: 18px;
    }

    .mantine-DatePicker-monthTbody {
        height: 199px;
    }

    .mantine-DatePicker-day {
        color: #0D0C0C;
    }

    .m_396ce5cb {
        width: 24px;
        height: 24px;
        }

    .m_8f457cd5:where([data-with-spacing]) {
        padding: 9px 12px;
    }
        
    .m_396ce5cb:where([data-in-range]) {
        background-color: #EFEFEF;
        border-radius: 4px;
    }

    .m_396ce5cb:where([data-selected]) {
        background-color: #F51B1B;
        color: #fff;
        border-radius: 4px;
    }

    .m_18a3eca {
        font-family: 'TT Commons', sans-serif;
        font-size: 14px;
        text-transform: lowercase;
        color: #B3B3BC;
    }

    .mantine-DatePicker-day {
        font-family: 'TT Commons', sans-serif;
        font-size: 18px;
    }
`


export const AppCalendarSmall = () => {
    const [value, setValue] = useState<[Date| null, Date | null]>([null, null]); 
    const [isOpen, setIsOpen] = useState(false)

    const handleClickStart = useCallback(() => {
        setIsOpen(!isOpen)
    }, [isOpen])

    return (
        <div className="w-[346px] grid space-y-[8px] justify-items-center">
            <div className="w-[100%] grid grid-cols-2 space-x-[8px]">
                <div 
                    onClick={handleClickStart}
                    className='relative h-[60px] px-[16px] py-[18px] rounded-sm border border-app_gray 
                            shadow-none flex items-center'
                >
                    <div
                        className={cx(
                            'w-min font-ttcommons text-xs',
                            value[0] ? 'text-app_black' : 'text-app_gray'
                        )}
                    >
                        {value[0] ? formatDate(value[0]) : "Начало"}
                    </div>
                    <Icon icon={dateIcon} classname="absolute grid self-center justify-self-end right-[15px]"/>
                </div>
                <div 
                    onClick={handleClickStart}
                    className='relative h-[60px] px-[16px] py-[18px] rounded-sm border border-app_gray 
                            shadow-none flex items-center'
                >
                    <div
                        className={cx(
                            'w-min font-ttcommons text-xs',
                            value[1] ? 'text-app_black' : 'text-app_gray'
                        )}
                    >
                        {value[1] ? formatDate(value[1]) : "Конец"}
                        </div>
                    <Icon icon={dateIcon} classname="absolute grid self-center justify-self-end right-[15px]"/>
                </div>
            </div>
            {isOpen && (
                <div className="w-[346px] border border-app_gray grid justify-items-center rounded-sm px-[16px] py-[32px] space-y-[24px]">
               <StyledDatePicker 
                    type="range" 
                    value={value} 
                    onChange={setValue} 
                    locale="ru" 
                    disableYearSelection 
                    shouldDisableDate
                    className="border-app_gray"
                /> 
                <AppButton 
                    theme="solid"
                    color="black"
                    className="w-[100%]"
                >
                    Применить
                </AppButton>
            </div>
            )}
        </div>
    )
} 