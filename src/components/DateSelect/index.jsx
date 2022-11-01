import { addDays, subDays, format, formatISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Icon } from '~/components/Icon'

export const DateSelect = ({ currentDate, onChange }) => {
    const prevDay = () => {
        const prevDate = subDays(new Date(currentDate), 1)
        onChange(formatISO(prevDate))
    }
    const nextDay = () => {
        const nextDate= addDays(new Date(currentDate), 1)
        onChange(formatISO(nextDate))
    }

    return (
        <div className='p-4 flex space-x-4 justify-center items-center'>
            <span>{formatISO(new Date(2022, 10, 20))}</span>
            <span>{currentDate}</span>
            {new Date(2022, 10, 20) != currentDate && (
                <Icon name="arrowLeft" className="w-6 text-red-500 md:hover:cursor-pointer" onClick={prevDay} />
            )}
            <span className='font-bold'>{format(new Date(currentDate), "d 'de' MMMM", { locale: ptBR })}</span>
            <Icon name="arrowRight" className="w-6 text-red-500 md:hover:cursor-pointer" onClick={nextDay} />
        </div>
    )
}