const Engineer = require("../lib/Engineer");

describe("Engineer", ()=>{
    describe("Intialization", () =>{
        it("should create a new Engineer object", () =>{
            const engineer = new Engineer('2','Charlie','charlie@gmail.com','charlie007');
            expect(engineer.id).toEqual('2');
            expect(engineer.name).toEqual('Charlie');
            expect(engineer.email).toEqual('charlie@gmail.com');
            expect(engineer.github).toEqual('charlie007');
        });
    });

    it("should return engineer github", ()=>{

        const github = 'charlie007';
        const engineer = new Engineer('2','Charlie','charlie@gmail.com',github);
        expect(engineer.getGithub()).toEqual(github)

    });

    it("should retun engineer role", () => {

        const role='Engineer';
        const engineer = new Engineer('2','Charlie','charlie@gmail.com','charlie007');
        expect(engineer.getRole()).toEqual(role);

    });

});