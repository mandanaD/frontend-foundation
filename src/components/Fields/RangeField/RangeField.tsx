import type {RangeFieldProps} from "./RangeField.types.ts";
import {cva} from "class-variance-authority";
import {Label} from "../Label.tsx";
import {ErrorMessage} from "../ErrorMessage.tsx";

export const RangeField = ({
                               variant = "primary",
                               sizeInput="sm",
                               label,
                               disabled = false,
                               error,
                               required = true,
                               className = "",
                               maxValue = 100,
                               minValue = 0,
                               defaultValue = 40,
                               ...props
                           }: RangeFieldProps) => {

    const classes = cva(`fieldset w-full relative`, {
        variants: {
            variant: {
                primary: "range-primary",
                secondary: "range-secondary",
                accent: "range-accent",
                success: "range-success",
                warning: "range-warning",
                info: "range-info",
                error: "range-error",
                neutral: "range-neutral",
            },
            sizeInput: {
                xs: "range-xs",
                sm: "range-sm",
                md: "range-md",
                lg: "range-lg",
                xl: "range-xl",
            },
            disabled: {
                true: "opacity-70",
            },
            default: {
                size: "md",
            }
        },
    });

    return (
        <fieldset className={classes({disabled})}>
            <Label
                required={required}
                text={label}
            />
            <input type="range" min={minValue} max={maxValue} value={defaultValue}
                   className={`range ${classes({variant, sizeInput})} ${className}`}
                   {...props}
            />
            <ErrorMessage text={error}/>
        </fieldset>
    );
};
