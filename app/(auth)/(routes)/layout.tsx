const AuthLayout = ({
    children
} : {
    children : React.ReactNode;
}) => {
    return (
        <div className="flex justify-center items-center center h-full">{children}</div>
    );
}

export default AuthLayout;