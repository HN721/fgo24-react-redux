import React from "react";

/**
 *
 * @typedef {object} CustomProps
 * @property {string} [label]
 *
 * @typedef {CustomProps & React.React.HTMLAttributes<HTMLAtrt>} InputProps
 */

/**
 *
 * @param {InputProps} props
 * @param {string} props.label label to display above input
 * @returns
 */

function Input({ id, type, label, value, ...props }) {
  if (type === "radio") {
    return (
      <div>
        <label htmlFor={`${id}-1`}>{label}</label>
        <div className="flex gap-4">
          {value.map((value, index) => {
            const identifier = `${id}-${index + 1}`;
            return (
              <React.Fragment key={`ip-cb-$${value}`}>
                <input type={type} id={identifier} value={value} {...props} />
                <label htmlFor={identifier}>{value}</label>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
  if (type === "checkbox") {
    return (
      <div>
        <label htmlFor={`${id}-1`}>{label}</label>
        <div className="flex flex-col gap-2">
          {value.map((value, index) => {
            const identifier = `${id}-${index + 1}`;
            return (
              <React.Fragment key={`ip-cb-$${value}`}>
                <div className="flex gap-2">
                  <input type={type} id={identifier} value={value} {...props} />
                  <label htmlFor={identifier}>{value}</label>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div>
        <input type={type} id={id} {...props} />
      </div>
    </div>
  );
}

export default Input;
