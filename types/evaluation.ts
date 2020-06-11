export default class Evaluation {
    constructor(x: any) {
        if (x.name !== undefined && typeof x.name === "string") 
            this.name = x.name;

        if (x.level !== undefined && typeof x.level === "string")
            this.level = x.level;
        
        if (x.title !== undefined && typeof x.title === "string")
            this.title = x.title;

        if (x.totalPoints !== undefined && typeof x.totalPoints === "number")
            this.totalPoints = x.totalPoints;
            
        if (x.milestones !== undefined && (x.milestones as Array<[string, number]>))
            this.milestones = (x.milestones as Array<[string, number]>);
    }

    name: string | undefined;
    level: string | undefined;
    title: string | undefined;
    totalPoints: number | undefined;
    milestones: Array<[string, number]> | undefined;
}
