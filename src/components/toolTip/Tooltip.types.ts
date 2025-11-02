import type {ComponentProps, ReactNode} from "react";

export type TooltipProps = ComponentProps<"div">&{
    variant: "primary" | "secondary" | "success" | "info" | "warning" | "error";
    position: "top" | "bottom" | "left" | "right";
    tooltipContent?:ReactNode,
    dataTip?:string,
    children?: ReactNode,
}