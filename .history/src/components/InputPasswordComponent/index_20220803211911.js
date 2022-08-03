import React from "react";

export default function InputPasswordComponent({
  cssClasses,
  error,
  id,
  label,
  required,
  onChange,
  ...rest
}) {
  return (
    <label for={id}>
      {label}
      <div>
        <input
          id={id}
          type="password"
          className={cssClasses}
          {...rest}
          required
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </label>
  );
}
