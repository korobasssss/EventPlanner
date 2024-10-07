import { Dayjs } from "dayjs";
import cx from 'classnames';
import { ScrollWrapper } from "../../ScrollWrapper";
import my_event from '../../../../assets/icons/my_event.svg'
import go_to_event from '../../../../assets/icons/go_to_event.svg'
import { Icon } from '../../Icon/Icon';

export const AppDateCell = (value: Dayjs) => {

    const listData = [
        { type: 'warning', content: 'This is warning виваививаиваиавиавививevent.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];

    
      return (
        <ScrollWrapper>
            <ul className="space-y-[10px]">
                {listData.map((item) => (
                    <li key={item.content}>
                        <div className={cx(
                            'py-[2px] px-[6px] space-x-[4px] rounded-xs w-[100%]',
                            'flex text-app_black',
                            {
                                ['text-app_gray'] : false ,// если прошло
                                ["bg-app_light_gray"]: false, // обычный фон
                                ["bg-app_red text-app_white"]: true, // если создали мы
                            }
                            
                            
                        )
                        }>
                            <Icon icon={my_event}/>
                            <p className="font-ttcommons text-xs  overflow-hidden whitespace-nowrap truncate">
                                {item.content}
                            </p>
                        </div>
                    </li>
                 ))}
            </ul>
        </ScrollWrapper>
      );
}