import { Fragment, ReactNode } from "react"

export default function ExampleStructureLayout({ 
    children,
 }: {
    children: ReactNode
}) {
    return (
        <Fragment>{children}</Fragment>
    )
}