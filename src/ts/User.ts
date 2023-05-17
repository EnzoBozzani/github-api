import GitHubUserResponse from "./GitHubUserResponse";

export default class User implements GitHubUserResponse {
    avatar_url: string;
    bio: string;
    blog: string;
    company: string;
    created_at: string;
    email: string;
    events_url: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    hireable: string;
    html_url: string;
    id: number;
    location: string;
    login: string;
    name: string;
    node_id: string;
    organizations_url: string;
    public_gists: number;
    public_repos: number;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    twitter_username: string;
    type: string;
    updated_at: string;
    url: string;
    constructor(user: GitHubUserResponse) {
        this.avatar_url = user.avatar_url;
        this.bio = user.bio;
        this.blog = user.blog;
        this.company = user.company;
        this.created_at = user.created_at;
        this.email = user.email;
        this.events_url = user.events_url;
        this.followers = user.followers;
        this.followers_url = user.followers_url;
        this.following = user.following;
        this.following_url = user.following_url;
        this.gists_url = user.gists_url;
        this.gravatar_id = user.gravatar_id;
        this.hireable = user.hireable;
        this.html_url = user.html_url;
        this.id = user.id;
        this.location = user.location;
        this.login = user.login;
        this.name = user.name;
        this.node_id = user.node_id;
        this.organizations_url = user.organizations_url;
        this.public_gists = user.public_gists;
        this.public_repos = user.public_repos;
        this.received_events_url = user.received_events_url;
        this.repos_url = user.repos_url;
        this.site_admin = user.site_admin;
        this.starred_url = user.starred_url;
        this.subscriptions_url = user.subscriptions_url;
        this.twitter_username = user.twitter_username;
        this.type = user.type;
        this.updated_at = user.updated_at;
        this.url = user.url;
    }
    renderUserCard(parentNode: any){
        //remover os filhos do parentNode
        //...
        const card = document.createElement('div');
        const title  = document.createElement('p');
        title.classList.add('display-1');
        title.textContent = this.login;
        const img = document.createElement('img');
        img.src = this.avatar_url;
        card.append(title, img);
        parentNode.appendChild(card);
    }
}