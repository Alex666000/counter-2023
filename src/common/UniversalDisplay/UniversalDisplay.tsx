import React, {FC, ReactNode} from "react";

type UniversalDisplayPropsType = {
    children?: ReactNode
}

const UniversalDisplay: FC<UniversalDisplayPropsType> = ({children}) => {
    return (
        <>
            {children}
        </>
    );
};

export {UniversalDisplay};