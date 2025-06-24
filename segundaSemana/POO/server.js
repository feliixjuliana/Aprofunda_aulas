class Cachorro {
    #nome;
    #raca;

    constructor(nome, raca) {
        this.#nome = nome;
        this.#raca = raca;
    }

    getNome() {
        return this.#nome;
    }

    setNome(novoNome) {
        if (novoNome.length >= 2) {
            this.#nome = novoNome;
        } else {
            console.log("Nome muito curto")
        }
    }

    latir() {
        console.log("Au au!")
    }
};

const meuCachorro = new Cachorro("Pagu");
console.log(meuCachorro.getNome());

meuCachorro.setNome("Cristal");
console.log(meuCachorro.getNome())

// --------------------HERANÇA-------------------------

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Som genérico de animal.")
    }
}

class Cachorro2 extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }

    fazerSom(){
        console.log("Au au");
    }

    correr(){
        console.log(`${this.nome} está correndo`)
    }
}

const meuAnimal = new Animal("Bicho");
meuAnimal.fazerSom();

const meuCachorro2 = new Cachorro2("Charlotte");
meuCachorro2.fazerSom();
meuCachorro2.correr();