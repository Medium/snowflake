export default class Evaluation {
    constructor(x: any) {
        if (x.name !== undefined && typeof x.name === "string") 
            this.name = x.name;
        
        if (x.title !== undefined && typeof x.title === "string")
            this.title = x.title;

        if (x.milestones !== undefined && (x.milestones as Array<[string, number]>))
            this.milestones = (x.milestones as Array<[string, number]>);
    }

    name: string | undefined;
    title: string | undefined;
    milestones: Array<[string, number]> | undefined;
}
