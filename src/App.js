import React from "react";
import * as Components from "./components";

function App() {
    const [signIn] = React.useState(true);
    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type="text" placeholder="Name" />
                        <Components.Input type="email" placeholder="Email" />
                        <Components.Input type="password" placeholder="Password" />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>

                </Components.SignInContainer>
        </Components.Container>
    )
}