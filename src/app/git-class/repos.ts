export class Repos {
    public name:string
    public html_url:string;
    public description: string;
    public created_date:Date;
    constructor(name,html_url,description,created_date){
        this.name = name;
        this.html_url = html_url;
        this.description = description;
        this.created_date = created_date;
    }
}

