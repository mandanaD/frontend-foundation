import type {AlertProps} from "./Alert.types.ts";
import {cva} from "class-variance-authority";
import {Info, CheckCircle, AlertTriangle, XCircle, CircleQuestionMark} from "lucide-react";

export const Alert = ({title, description, HaveIcon=true, type, ...props}: AlertProps) => {
    const classes = cva(
        "alert alert-soft !items-start",
        {
            variants: {
                type: {
                    info: "alert-info !border-info/40",
                    success: "alert-success !border-success/40",
                    warning: "alert-warning !border-warning/40",
                    error: "alert-error !border-error/40",
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
            {
                HaveIcon && (
                    iconHandler()
                )
            }
            <div>
                <div>{title}</div>
                <div>
                    {description}
                </div>
            </div>
        </div>
    )
}