export class Users {
    public userName:string;
    public profPic:string;
    public repoCount:number;
    public hireable:boolean;
    public accountCreateDate:Date;
    public followers:number;
    public following:number;
    constructor(userName,profPic,repoCount,hireable,accountCreateDate,followers,following){
        this.userName=userName;
        this.profPic = profPic;
        this.repoCount = repoCount;
        this.hireable = hireable;
        this.accountCreateDate = accountCreateDate;
        this.followers = followers;
        this.following = following;
    }
}
