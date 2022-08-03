import React from "react"

export default function InputTextComponent({cssClasses, error, id, label, required, onChange, ...rest}) {
    return (
        <label for={id}> 
            {label}
            <div>
                <input
                    id
                    type="text"
                    className={cssClasses}
                    {...rest}
                    required
                    onChange={(value => onChange(value))}
                />
            </div>
        </label>
    )
}