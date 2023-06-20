import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { getUser } from "./api/api";
import { Layout } from "./layout/Layout";

function App() {
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        setTimeout(() => {
            getUser("KovacFilip")
                .then((res) => {
                    const data = res.data;
                    console.log(res);
                    const newUser: User = {
                        username: data.login,
                        bio: data.bio,
                        avatarUrl: data.avatar_url,
                        email: data.email,
                        created: data.created_at,
                        followers: data.followers,
                        following: data.following,
                        githubUrl: data.html_url,
                    };

                    setUser(newUser);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 2000);
    }, []);

    return (
        <div>
            {user && <Layout user={user} />}
            {!user && <CircularProgress />}
        </div>
    );
}

export default App;
