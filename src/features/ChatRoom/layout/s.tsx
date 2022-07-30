import { Controller } from 'react-hook-form'

export function FooterInput(props: { name: string }) {
    return (
        <Controller
            name={props.name}
            render={({ field, fieldState }) => {
                return (
                    <input
                        {...field}
                        className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                        type="text"
                        placeholder="Aa"
                        name="input"
                    />
                )
            }}
        ></Controller>
    )
}
