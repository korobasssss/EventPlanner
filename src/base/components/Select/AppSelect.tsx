import { Select } from "antd"
import { SelectProps } from "antd/lib";
import styled from "styled-components";
import photo from '../../../assets/icons/photo.svg'
import { FC, InputHTMLAttributes } from "react";
import { AppSelectItems } from "./SelectItems/AppSelectItems";


const StyledSelect = styled(Select)`
    .ant-select-selector {
        width: 582px;
        height: 60px;
        border: 1px solid #B3B3BC;
        border-radius: 12px;
        padding: 10px 16px;
    }
    .ant-select-focused {
        border: 1px solid #0D0C0C;
    }

    .ant-select-selection-item {
        height: 30px;
        padding: 0 10px 0 0;
        font-family: 'TT Commons Semibold', sans-serif;
        font-size: 14px;
        border-radius: 24px;
        background-color: #EFEFEF;
    }   

    .ant-select-selection-item-content {
        display: flex;
        justify-content: center;
    }
`
interface IAppSelect
    extends InputHTMLAttributes<HTMLInputElement> {
        //options: SelectProps['options'],
        //onChange: (value: string[]) => void
}

export const AppSelect: FC<IAppSelect> = (
    {
        placeholder,
        onChange
    }
) => {
    const options: SelectProps['options'] = [];

    for (let i = 10; i < 36; i++) {
      options.push({
        label: <AppSelectItems icon={photo} label={'Эмилия'}/>,
        value: i.toString(36) + i,
      });
    }
    
    const handleChange = (value: string[]) => {
      console.log(`selected ${value}`);
    };


    return (
        <StyledSelect
            mode="multiple"
            allowClear
            placeholder={placeholder}
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
            options={options}
            // className="w-[582px]"
    />
    )
}