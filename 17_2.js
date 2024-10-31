class Coach{
    constructor(name, spec, rat) {
        this.name = name;
        this.spec = spec;
        this.rat = rat;
    }
    displayInfo(){
        console.log(this.name, this.spec, this.rat)
    }
}


const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo();
coach2.displayInfo();