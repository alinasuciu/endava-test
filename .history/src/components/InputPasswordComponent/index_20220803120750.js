import React from "react"

export default function InputPasswordComponent({cssClasses, error, id, label, required, ...rest}) {
    return (
        <label for={id}> 
            {label}
            <div>
                <input
                    id
                    type="password"
                    className={cssClasses}
                    {...rest}
                    required
                />
            </div>
        </label>
    )
}