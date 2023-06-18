import { withAuth} from "next-auth/middleware";


export default withAuth({
    pages: {
        signIn: "/"
    }
});

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/shop/:path*",
        "/users/:path*",
        "/conversations/:path*",
    ]
};