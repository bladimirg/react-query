import axios from "axios";


export const githubApi= axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        authorization: 'bearer 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'
    }
});