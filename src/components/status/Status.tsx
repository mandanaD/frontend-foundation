import type {StatusProps} from "./Status.types.ts";
import {cva} from "class-variance-authority";


export const Status = ({variant = "primary", size = "md", animation = "none", ...props}: StatusProps) => {
    const classes = cva("status", {
        variants: {
            variant: {
                primary: "status-primary",
                secondary: "status-secondary",
                neutral: "status-neutral",
                accent: "status-accent",
                success: "status-success",
                warning: "status-warning",
                info: "status-info",
                error: "status-error",
            },
            size: {
                xs: "status-xs",
                sm: "status-sm",
                md: "status-md",
                lg: "status-lg",
                xl: "status-xl",
            },
            animation: {
                none:"animate-none",
                ping: "animate-ping",
                pulse: "animate-pulse",
                bounce: "animate-bounce",
            }
        }
    })
    return (
        <div className={"flex gap-1"}>
            <div className={classes({variant, size, animation})}
                 {...props}
            />
            {props.children}
        </div>
    )
}