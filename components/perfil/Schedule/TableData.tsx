'use client'

export default function TableData(props: {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    name: string,
    value: string
}) {
    return (
        <td>
            <input 
                name={props.name}
                type='time' 
                value={props.value}
                onChange={props.handleChange}
            />
        </td>
    );
}