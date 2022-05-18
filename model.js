class Student {

    static GENDER ={
        male:'maschio',
        female: 'femmina',
        undefined: 'not defined'
    }

    constructor(name, surname, gender, yob){
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.yob = yob;

    }
    

    toString(){
        const studentString = 'Nome: ' + this.name + '\n' +
                               'Cognome: ' + this.surname + '\n' +
                               'Genere: ' + this.gender + '\n' +
                               'Età: ' + (new Date().getFullYear() - this.yob) + '\n';

        return studentString;
    }
}