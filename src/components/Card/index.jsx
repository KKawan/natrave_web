import axios from 'axios'
import { useLocalStorage } from 'react-use'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    homeTeamScore: yup.string().required(),
    awayTeamScore: yup.string().required()
})

export const Card = ({ gameId, homeTeam, awayTeam, homeTeamScore, awayTeamScore, gameTime, disabled}) => {
    const [auth] = useLocalStorage('auth')

    const onInput = () => {
        this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        formik.handleChange;
    }
    
    const formik = useFormik({
        onSubmit: (values) => {
            axios({
                method: 'post',
                baseURL: import.meta.env.VITE_API_URL,
                url: '/hunches',
                headers: {
                    authorization: `Bearer ${auth.accessToken}`
                },
                data: {
                    ...values,
                    gameId
                }
            })
        },
        initialValues: {
            homeTeamScore,
            awayTeamScore
        },
        validationSchema
    })
    
    return (
        <div className='rounded-xl border-2 border-gray-300 p-4 text-center space-y-4'>
            <span className='text-sm md:text-base text-gray-500 font-bold'>{ gameTime }</span>

            <form className='flex justify-center items-center space-x-6'>
                <div className='flex items-center space-x-4'>
                    <span className='uppercase text-gray-500'>{homeTeam}</span>
                    <img src={`/images/flags/${homeTeam}.svg`} alt="" />
                </div>

                <div className='flex items-center space-x-[21px]'>
                    <input 
                        name="homeTeamScore"
                        value={formik.values.homeTeamScore} 
                        onChange={onInput} 
                        onBlur={formik.handleSubmit}
                        type="text" 
                        className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-300 text-lg text-center font-bold rounded-full' 
                        disabled={disabled}
                    />
                    <span className='text-red-500 font-bold'>X</span>
                    <input 
                        name="awayTeamScore"
                        value={formik.values.awayTeamScore} 
                        onChange={onInput} 
                        onBlur={formik.handleSubmit} 
                        type="text" 
                        className='bg-red-300/[0.2] w-[55px] h-[55px] text-red-300 text-lg text-center font-bold rounded-full' 
                        disabled={disabled}
                        />
                </div>            

                <div className='flex items-center space-x-4'>        
                    <img src={`/images/flags/${awayTeam}.svg`} alt="" />
                    <span className='uppercase text-gray-500'>{awayTeam}</span>
                </div>
            </form>
        </div>
    )
}