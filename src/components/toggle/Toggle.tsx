import type {ToggleProps} from "./Toggle.types.ts";
import {cva} from "class-variance-authority";

export const Toggle = ({
                           defaultChecked = false,
                           checked = false,
                           variant = "primary",
                           size = "md"
                       }: ToggleProps) => {
    const toggleClasses = cva("toggle", {
        variants: {
            variant: {
                primary: "toggle-primary",
                secondary: "toggle-secondary",
                success: "toggle-success",
                error: "toggle-error",
                info: "toggle-info",
                warning: "toggle-warning",
            },
            size: {
                xs: "toggle-xs",
                sm: "toggle-sm",
                md: "toggle-md",
                lg: "toggle-lg",
                xl: "toggle-xl",
            },
        },
    })

    return (
        <input
            checked={checked}
            type="checkbox"
            defaultChecked={defaultChecked}
            className={toggleClasses({size, variant})}/>
    )
}