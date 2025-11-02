import {cva} from "class-variance-authority";
import type {TooltipProps} from "./Tooltip.types.ts";

export const Tooltip = ({
                            children,
                            dataTip,
                            variant = "primary",
                            tooltipContent ,
                            position = "top",
                            ...props
                        }: TooltipProps) => {
    const classes = cva(
        'tooltip',
        {
            variants: {
                variant: {
                    primary: "tooltip-primary",
                    secondary: "tooltip-secondary",
                    error: "tooltip-error !text-white",
                    warning: "tooltip-warning",
                    info: "tooltip-info",
                    success: "tooltip-success",
                },
                position: {
                    top: "tooltip-top",
                    bottom: "tooltip-bottom",
                    left: "tooltip-left",
                    right: "tooltip-right",
                }
            }
        }
    )
    return (
        <div className={classes({variant, position})}
             data-tip={dataTip}
             {...props}
        >
            {
                tooltipContent&&(
                    <div className="tooltip-content">
                        {tooltipContent}
                    </div>
                )
            }
            {children}
        </div>
    )
}