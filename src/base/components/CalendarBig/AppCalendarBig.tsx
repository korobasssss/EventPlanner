import { Calendar } from "antd"
import styled from 'styled-components';
import { AppButton } from "../Button";
import { useCallback, useState } from "react";
import dayjs from 'dayjs';
  
const StyledCalendar = styled(Calendar)`

    .ant-picker-calendar-header {
        display: none;
    }

    thead {
        font-family: 'Red Collar', sans-serif;
        font-size: 24px;

        th {
            padding: 0 0 16px 0;
        }
    }

    tbody {
        border: 1px solid #B3B3BC !important;

        font-family: 'TT Commons', sans-serif;
        font-size: 20px;
    }

    td {
        border: 1px solid #B3B3BC;
        border-radius: 24px;
        padding: 10px;

        div {
            margin: 0;
            padding: 0;
        }
    }

    .ant-picker-cell-inner, .ant-picker-calendar-date, .ant-picker-calendar-date-today {
        background-color: transparent; 

        div {
        
        
        }
    }

    .ant-picker-cell-selected {
        div {
            color: #F51B1B;
        }
        
    }
`;


export const AppCalendarBig = () => {
    // const [month, setMonth] = useState(dayjs())

    // const handleMinusMonth = useCallback(() => {
    //     setMonth(month.subtract(1, 'month'))
    // }, [month])

    // const handlePlusMonth = useCallback(() => {
    //     setMonth(month.add(1, 'month'))
    // }, [month])

    return (
        <div>
            {/* <AppButton theme="outlined" color="red"
            //onClick={handleMinusMonth}
            />
            <span>{month.month.name}</span>
            <AppButton theme="outlined" color="red"
            //onClick={handlePlusMonth}
            /> */}
   

        <StyledCalendar  mode="month" value={dayjs()}/>
        </div>
    
    )
}