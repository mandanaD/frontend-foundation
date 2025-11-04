import type {ComponentProps, ReactNode} from "react";

export type DrawerProps = ComponentProps<"ul">&{
    position:"end"|"start";
    actionBtn:ReactNode,
    className:string,
}