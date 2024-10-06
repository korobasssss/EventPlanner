import { FC, ReactNode } from "react"
import { AppHeader } from "../Header"
import { ConfigProvider } from "antd"
import { StyleProvider } from '@ant-design/cssinjs';
import ruRU from 'antd/lib/locale/ru_RU';
import 'dayjs/locale/ru.js';
import { ScrollWrapper } from "../ScrollWrapper";
import { MantineProvider } from "@mantine/core";

interface IAppMainLayout {
    children: ReactNode
}

export const AppMainLayout: FC<IAppMainLayout> = (
    {
        children
    }
) => {
    return (
        <ScrollWrapper>
            <main className="px-[60px] py-[30px]">
            <ConfigProvider locale={ruRU}>
                <MantineProvider>
                <StyleProvider hashPriority="low" layer>
                    <section className="space-y-[100px]">
                        <AppHeader/>
                        {children}
                    </section>
                </StyleProvider>
                </MantineProvider>
            </ConfigProvider>
        </main>
        </ScrollWrapper>

    )
}