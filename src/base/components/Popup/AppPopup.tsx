import { Modal } from "antd"
import { FC, ReactNode } from "react"
import styled from "styled-components";

const StyledPopup = styled(Modal)`
    .ant-modal-content {
        position: relative;
        border-radius: 64px;
        padding: 80px 40px;
    }

    .ant-modal-close {
        position: absolute;
        right: 40px;
        top: 40px;
    }
    
`;

interface IAppPopup {
    children: ReactNode
    isOpen: boolean
    handleCancel: () => void
}

export const AppPopup: FC<IAppPopup> = (
    {
        children,
        isOpen,
        handleCancel
    }
) => {
    return (
        <StyledPopup
            open={isOpen}
            footer={false}
            onCancel={handleCancel}
        >
            {children}
        </StyledPopup>
    )
}