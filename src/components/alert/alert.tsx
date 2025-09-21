import type {AlertProps} from "./alert.types.ts";
import {cva} from "class-variance-authority";
import {Info, CheckCircle, AlertTriangle, XCircle, CircleQuestionMark} from "lucide-react";

export const Alert = ({title, description, type, ...props}: AlertProps) => {
    const classes = cva(
        "alert !items-start",
        {
            variants: {
                type: {
                    info: "alert-info",
                    success: "alert-success",
                    warning: "alert-warning",
                    error: "alert-error",
                }
            }
        }
    )

    const iconHandler = () => {
        const iconProps = {size: 20, className: "shrink-0 mt-[3px]"};
        switch (type) {
            case "info":
                return <Info {...iconProps} />;
            case "success":
                return <CheckCircle {...iconProps} />;
            case "warning":
                return <AlertTriangle {...iconProps} />;
            case "error":
                return <XCircle {...iconProps} />;
            default:
                return <CircleQuestionMark {...iconProps} />;
        }
    };

    return (
        <div role="alert" className={classes({type})} {...props}>
            {iconHandler()}
            <div>
                <div>{title}</div>
                <div>
                    {description}
                </div>
            </div>
        </div>
    )
}