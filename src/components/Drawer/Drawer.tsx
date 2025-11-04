import {cva} from "class-variance-authority";
import type {DrawerProps} from "./Drawer.types.ts";

export const Drawer = ({
                    children,
                    actionBtn = "",
                    className,
                    position = "end",
                    ...props
                }:DrawerProps) => {
    let action = (
        <label htmlFor="my-drawer-5" className="drawer-button btn btn-primary">
            Open Drawer
        </label>
    )
    if (actionBtn) {
        action = (
            <label htmlFor="my-drawer-5" className="drawer-button">
                {actionBtn}
            </label>
        )
    }

    const classes = cva(
        `drawer`,
        {
            variants: {
                position: {
                    end: "drawer-end",
                    start: "drawer-start",
                }
            }
        }
    )
    return (
        <div className={classes({position})}>
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content">
                {action}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul
                    className={`menu bg-base-200 min-h-full w-80 p-4 ${className}`}
                    {...props}
                >
                    {children}
                </ul>
            </div>
        </div>
    )
}