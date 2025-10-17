import {InputField} from "../InputField";
import type {InputFieldProps} from "../InputField/InputField.types.ts";

export const PhoneField = ({...props}: InputFieldProps) => {
    return (
        <InputField
            inputMode="numeric"
            accept={"number"}
            maxLength={11}
            {...props}
        />
    );
};
