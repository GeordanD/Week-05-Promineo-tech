class Games{
    constructor(name, genre, Console) {
        this.name = name;
        this.genre = genre;
        this.Console = Console;
    }
    describe() {
        return `${this.name} is an ${this.genre} on ${this.Console}.`;
    }
}

class Console{
    constructor(name) {
        this.name = name;
        this.Console = [];
    }

    addGame(Games) {
        if (Games instanceof Games) {
            this.Games.push(Games);
        } else {
            throw new Error(`You can only add an instance of Games. Argument is not a Game ${Games}`);
        }
    }

    describe() {
        return `${this.name} has ${this.Games.length} Games.`;
    }
}

class Menu {
    constructor() {
        this.Console = [];
        this.selectedConsole = null;
    }


    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createConsole();
                    break;
                case '2':
                    this.viewConsole();
                    break;
                case '3':
                    this.deleteConsole();
                    break;
                case '4':
                    this.displayConsole();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
    
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new console
        2) view console
        3) delete console
        4) display all console
        `);
    }

    showConsoleMenuOptions(ConsoleInfo) {
        return prompt(`
        0) back
        1) add Games
        2) delete Games
        ---------------
        ${ConsoleInfo}
        `);
    }

    displayConsole() {
        let consoleString = "";
        for (let i = 0; i < this.Console.length; i++) {
            consoleString += i + ") " + this.Console[i].name + '\n';
        }
        alert(consoleString);
    }

    createConsole() {
        let name = prompt('Enter name for new Console:');
        this.Console.push(new Console(name));
    }


    viewConsole() {
        let index = prompt('Enter the index of the Console you wish to view: ');
        if (index > -1 && index < this.Console.length) {
            this.selectedConsole = this.Console[index];
            let description = 'Console Name: ' + this.selectedConsole.name + '\n';

            for (let i = 0; i < this.selectedConsole.length; i++) {
                description += i + ') ' + this.selectedConsole.Games[i].position + '\n';
            }

            let selection = this.showConsoleMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createGames();
                    break;
                case '2':
                    this.deleteGames();
            }
        }
    }
}

let menu = new Menu();
menu.start();
