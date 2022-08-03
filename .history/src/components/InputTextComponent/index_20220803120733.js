import React from "react"

export default function InputTextComponent({cssClasses, error, id, label, required, ...rest}) {
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
                />
            </div>
        </label>
    )
}