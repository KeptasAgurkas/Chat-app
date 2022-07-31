import { useNavigate } from '@tanstack/react-location'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { absolutPath, ROUTES } from '../utils/const'

export function InputField(props: { name: string }) {
    return (
        <Controller
            name={props.name}
            render={({ field, fieldState }) => {
                return (
                    <>
                        <input
                            {...field}
                            type="text"
                            className="bg-gray-400 h-14 rounded focus:bg-white placeholder:text-white px-5 text-center focus:text-black font-"
                            placeholder="exp.: 123"
                            autoComplete="off"
                        />
                        {fieldState.error && (
                            <span>{fieldState.error.message}</span>
                        )}
                    </>
                )
            }}
        ></Controller>
    )
}

function Section() {
    return (
        <div className="flex flex-row space-x-4 items-center">
            <InputField name={'roomName'}></InputField>
            <button
                type={'submit'}
                className="border h-14 text-xl border-gray-800 bg-blue-900 rounded hover:bg-blue-700 px-4 py-1"
            >
                Enter Room
            </button>
        </div>
    )
}

function RoomName() {
    const navigate = useNavigate()
    const form = useForm<{ roomName: string }>()

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit((result) => {
                    console.log(result)
                    navigate({
                        to: absolutPath(ROUTES.room.room(result.roomName)),
                    })
                })}
            >
                <div className="flex h-screen w-full bg-gray-900 justify-center items-center">
                    <div className="flex space-y-6 text-gray-200 flex-col justify-center items-center ">
                        <div className="text-3xl font-bold uppercase">
                            Room id
                        </div>
                        <Section></Section>
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}
export default RoomName
