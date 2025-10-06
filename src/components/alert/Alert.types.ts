import type {ComponentProps} from "react";

export type AlertProps =ComponentProps<"div">&{
    title?: string,
    description?: string,
    type?: "info" | "success" | "warning" | "error",
    HaveIcon?: boolean,
}